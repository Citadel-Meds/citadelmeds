// SVG filters work on ordinary DOM content in Gecko and WebKit. Mirror the
// marketing page into an inert, clipped lens instead of filtering its backdrop.
export function mountGlassMirror(surface, viewport) {
  let source = surface.closest("nav").parentElement;
  while (source.parentElement && source.parentElement !== document.body) {
    source = source.parentElement;
  }
  let frame = 0;
  let timer = 0;
  let disposed = false;
  let clone;
  const ignored = ".nav, .nav-mobile-menu, .nav-overlay, script, style, link, iframe, object, embed, nextjs-portal";

  const position = () => {
    frame = 0;
    if (!clone || disposed) return;
    const page = source.getBoundingClientRect();
    const glass = surface.getBoundingClientRect();
    clone.style.width = `${page.width}px`;
    clone.style.transform = `translate3d(${page.left - glass.left}px, ${page.top - glass.top}px, 0)`;
  };
  const schedulePosition = () => {
    if (!frame) frame = requestAnimationFrame(position);
  };

  const rebuild = () => {
    timer = 0;
    if (disposed) return;
    const next = source.cloneNode(true);
    next.querySelectorAll(ignored).forEach((node) => node.remove());
    // Never introduce duplicate fragment targets, executable attributes, or
    // accessible/interactive copies. Preserve SVG paint references via new IDs.
    const nodes = [next, ...next.querySelectorAll("*")];
    const ids = new Map();
    const prefix = `${surface.dataset.mirrorId}-`;
    nodes.forEach((node) => {
      if (node.id) {
        ids.set(node.id, `${prefix}${node.id}`);
        node.id = ids.get(node.id);
      }
    });
    nodes.forEach((node) => {
      for (const attribute of [...node.attributes]) {
        if (/^on/i.test(attribute.name) || ["autofocus", "name", "form"].includes(attribute.name)) {
          node.removeAttribute(attribute.name);
          continue;
        }
        let value = attribute.value.replace(/url\(#([^)]*)\)/g, (match, id) => ids.has(id) ? `url(#${ids.get(id)})` : match);
        if (["href", "xlink:href"].includes(attribute.name) && value.startsWith("#") && ids.has(value.slice(1))) {
          value = `#${ids.get(value.slice(1))}`;
        }
        if (value !== attribute.value) node.setAttribute(attribute.name, value);
      }
      if (node instanceof HTMLInputElement || node instanceof HTMLTextAreaElement) {
        node.value = "";
        node.removeAttribute("value");
      }
      if (node instanceof HTMLImageElement) node.loading = "eager";
    });
    next.inert = true;
    next.setAttribute("aria-hidden", "true");
    Object.assign(next.style, {
      position: "absolute", left: "0", top: "0", margin: "0",
      pointerEvents: "none", transformOrigin: "0 0",
    });
    clone = next;
    viewport.replaceChildren(next);
    position();
    surface.classList.add("nav-glass--mirror");
  };
  const scheduleRebuild = () => {
    if (!timer) timer = window.setTimeout(rebuild, 100);
  };
  const mutations = new MutationObserver((records) => {
    if (records.some(({ target }) => !target.parentElement?.closest(ignored) && !(target instanceof Element && target.closest(ignored)))) {
      scheduleRebuild();
    }
  });
  const resize = new ResizeObserver(scheduleRebuild);
  rebuild();
  mutations.observe(source, { subtree: true, childList: true, attributes: true, characterData: true });
  resize.observe(source);
  resize.observe(surface);
  window.addEventListener("scroll", schedulePosition, { passive: true });
  window.addEventListener("resize", scheduleRebuild);
  document.fonts.ready.then(() => { if (!disposed) scheduleRebuild(); });
  return () => {
    disposed = true;
    mutations.disconnect();
    resize.disconnect();
    cancelAnimationFrame(frame);
    clearTimeout(timer);
    window.removeEventListener("scroll", schedulePosition);
    window.removeEventListener("resize", scheduleRebuild);
    viewport.replaceChildren();
    surface.classList.remove("nav-glass--mirror");
  };
}

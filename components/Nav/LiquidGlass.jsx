"use client";

import { useEffect, useId, useRef } from "react";
import { mountGlassMirror } from "./glassMirror";

// The map describes a rounded lens: neutral in the middle, curved at the rim.
// It is regenerated only on resize; the mirror tracks scrolling once per frame.
export default function LiquidGlass() {
  const id = `nav-glass-${useId().replace(/:/g, "")}`;
  const surfaceRef = useRef(null);
  const imageRef = useRef(null);
  const mirrorRef = useRef(null);

  useEffect(() => {
    const surface = surfaceRef.current;
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if (!context) return;

    const update = () => {
      const { width, height } = surface.getBoundingClientRect();
      canvas.width = Math.max(1, Math.round(width));
      canvas.height = Math.max(1, Math.round(height));
      const radius = parseFloat(getComputedStyle(surface).borderTopLeftRadius) || 24;
      const pixels = context.createImageData(canvas.width, canvas.height);
      for (let y = 0; y < canvas.height; y++) {
        for (let x = 0; x < canvas.width; x++) {
          const dx = x - Math.max(radius, Math.min(canvas.width - radius, x));
          const dy = y - Math.max(radius, Math.min(canvas.height - radius, y));
          const distance = Math.hypot(dx, dy);
          const rim = Math.max(0, Math.min(1, distance / radius));
          const bend = Math.sin(rim * Math.PI / 2) ** 3;
          const i = (y * canvas.width + x) * 4;
          pixels.data[i] = 128 + (distance ? dx / distance : 0) * bend * 127;
          pixels.data[i + 1] = 128 + (distance ? dy / distance : 0) * bend * 127;
          pixels.data[i + 2] = 128;
          pixels.data[i + 3] = 255;
        }
      }
      context.putImageData(pixels, 0, 0);
      imageRef.current.setAttribute("href", canvas.toDataURL());
      // Reference the mounted filter, including after a development hot reload
      // preserves a server-rendered ID from an earlier React tree.
      const mountedFilterId = imageRef.current.parentElement.id;
      surface.style.setProperty("--nav-refraction", `url("#${mountedFilterId}")`);
    };

    const observer = new ResizeObserver(update);
    observer.observe(surface);
    update();
    // Preserve Chromium's native backdrop refraction. Gecko and WebKit need
    // the mirror renderer; applying it universally breaks Chromium's lens.
    const needsMirror = CSS.supports("-moz-appearance", "none")
      || CSS.supports("-webkit-touch-callout", "none");
    const reducedTransparency = matchMedia("(prefers-reduced-transparency: reduce), (forced-colors: active)");
    let unmountMirror;
    const syncMirror = () => {
      unmountMirror?.();
      unmountMirror = needsMirror && !reducedTransparency.matches
        ? mountGlassMirror(surface, mirrorRef.current)
        : undefined;
    };
    syncMirror();
    reducedTransparency.addEventListener("change", syncMirror);
    return () => {
      observer.disconnect();
      unmountMirror?.();
      reducedTransparency.removeEventListener("change", syncMirror);
    };
  }, [id]);

  return (
    <div className="nav-glass" ref={surfaceRef} data-mirror-id={id} aria-hidden="true">
      <svg className="nav-glass__definitions" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id={id} x="0" y="0" width="100%" height="100%" colorInterpolationFilters="sRGB">
            <feImage ref={imageRef} width="100%" height="100%" preserveAspectRatio="none" result="lens" />
            <feDisplacementMap in="SourceGraphic" in2="lens" scale="26" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>
      <div className="nav-glass__mirror" ref={mirrorRef} inert aria-hidden="true" />
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import styles from "./privacy-policy.module.css";

export default function PolicyContents({ sections }) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const nodes = sections.map(({ id }) => document.getElementById(id)).filter(Boolean);
    let frame;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        let current = "";
        for (const node of nodes) {
          if (node.getBoundingClientRect().top <= 160) current = node.id;
        }
        setActiveId(current);
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
    };
  }, [sections]);

  return (
    <aside className={styles.contents} aria-labelledby="policy-contents-title">
      <p className={styles.contentsTitle} id="policy-contents-title">On this page</p>
      <ol className={styles.contentsList}>
        {sections.map(({ id, title }) => <li key={id}><a href={`#${id}`} aria-current={activeId === id ? "location" : undefined}>{title}</a></li>)}
      </ol>
    </aside>
  );
}

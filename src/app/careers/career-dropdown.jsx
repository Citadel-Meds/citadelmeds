/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useId, useRef, useState } from "react";
import styles from "./careers.module.css";

export default function CareerDropdown({ label, name, placeholder, options, value, onChange, required, wide }) {
  const id = useId();
  const [open, setOpen] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const root = useRef(null);
  const trigger = useRef(null);
  const list = useRef(null);
  useEffect(() => {
    if (!open) return;
    function outside(event) { if (!root.current.contains(event.target)) setOpen(false); }
    document.addEventListener("pointerdown", outside);
    return () => document.removeEventListener("pointerdown", outside);
  }, [open]);
  function focusOption(index) { list.current?.querySelectorAll("[role=option]")[index]?.focus(); }
  function choose(option) { setInvalid(false); onChange(option); setOpen(false); trigger.current.focus(); }
  return <div className={styles.dropdown} ref={root} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }}>
    <span id={`${id}-label`} className={styles.dropdownLabel}>{label}</span>
    <select className={styles.validationSelect} name={name} required={required} value={value} aria-hidden="true" tabIndex={-1} onChange={event => onChange(event.target.value)} onInvalid={event => { event.preventDefault(); if (event.currentTarget.form.querySelector(":invalid") === event.currentTarget) trigger.current.focus(); setInvalid(true); }}>
      <option value="">{placeholder}</option>{options.map(option => <option key={option}>{option}</option>)}
    </select>
    <button ref={trigger} type="button" role="combobox" aria-labelledby={`${id}-label`} aria-expanded={open} aria-controls={`${id}-options`} aria-haspopup="listbox" aria-required={required} aria-invalid={invalid && !value} className={`${styles.dropdownTrigger} ${value ? "" : styles.placeholder}`} onClick={() => setOpen(!open)} onKeyDown={event => {
      if (["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) { event.preventDefault(); setOpen(true); requestAnimationFrame(() => focusOption(event.key === "End" || event.key === "ArrowUp" ? options.length - 1 : 0)); }
      if (event.key === "Escape") setOpen(false);
    }}>{value || placeholder}<img src="/images/careers/select.svg" alt="" /></button>
    {invalid && !value && <span className={styles.dropdownError} role="alert">Please select an option.</span>}
    {open && <div ref={list} id={`${id}-options`} role="listbox" aria-labelledby={`${id}-label`} className={styles.dropdownMenu} onKeyDown={event => {
      const items = [...list.current.querySelectorAll("[role=option]")];
      const index = items.indexOf(document.activeElement);
      if (["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) { event.preventDefault(); focusOption(event.key === "Home" ? 0 : event.key === "End" ? items.length - 1 : (index + (event.key === "ArrowDown" ? 1 : -1) + items.length) % items.length); }
      if (event.key === "Escape") { event.preventDefault(); setOpen(false); trigger.current.focus(); }
    }}>{options.map((option, index) => <div key={option}><button type="button" role="option" aria-selected={value === option} onClick={() => choose(option)}>{option}</button>{index < options.length - 1 && <div className={styles.dropdownDivider}><img src={`/images/careers/divider-${wide ? "wide" : "small"}.svg`} alt="" /></div>}</div>)}</div>}
  </div>;
}

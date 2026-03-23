"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import emailjs from "@emailjs/browser";
import "./quoteModal.css";
import {
  DETAILS_MAX_LENGTH,
  FORM_LABELS,
  FORM_PLACEHOLDERS,
  QUOTE_INTRO,
  QUOTE_TITLE,
  SERVICE_OPTIONS,
  SUBMIT_LABEL,
} from "../../src/app/contact/components/Form/contactData";

const QuoteModalContext = createContext(null);

export function QuoteModalProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [mounted, setMounted] = useState(false);
  const formRef = useRef(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  const api = useMemo(
    () => ({
      openQuoteModal: () => setOpen(true),
      closeQuoteModal: () => setOpen(false),
      isQuoteModalOpen: open,
    }),
    [open]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSending(true);
    setSubmitError("");
    setSubmitSuccess("");

    // EmailJS configuration (client-side). Keep these in sync with your EmailJS template fields.
    const serviceId = "service_vgnq2mp";
    const templateId = "template_wa1aih4";
    const publicKey = "3f0JbSF6LP8Eg3oRs";

    try {
      if (!formRef.current) {
        throw new Error("Quote modal form reference is not available.");
      }

      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );

      setSubmitSuccess(
        "Thanks! Your message has been sent. We'll get back to you shortly."
      );
      setDetails("");
      formRef.current.reset();
    } catch (err) {
      // Avoid leaking internal errors into the UI; keep UX minimal.
      console.error("EmailJS submission failed:", err);
      setSubmitError(
        "Sorry, something went wrong while sending your message. Please try again."
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <QuoteModalContext.Provider value={api}>
      {children}

      {mounted && open
        ? createPortal(
            <div
              className="quote-modal__overlay"
              role="dialog"
              aria-modal="true"
              aria-label={QUOTE_TITLE}
              onMouseDown={(e) => {
                if (e.target === e.currentTarget) setOpen(false);
              }}
            >
              <div className="quote-modal__dialog">
                <button
                  type="button"
                  className="quote-modal__close"
                  aria-label="Close"
                  onClick={() => setOpen(false)}
                >
                  ×
                </button>

                <div className="quote-modal__header">
                  <h2 className="quote-modal__title">{QUOTE_TITLE}</h2>
                  <p className="quote-modal__intro">{QUOTE_INTRO}</p>
                </div>

                <form
                  ref={formRef}
                  className="quote-modal__form"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <div className="quote-modal__field">
                    <label htmlFor="modal-full-name" className="quote-modal__label">
                      {FORM_LABELS.fullName}
                    </label>
                    <input
                      id="modal-full-name"
                      type="text"
                      name="user_name"
                      className="quote-modal__input"
                      placeholder={FORM_PLACEHOLDERS.fullName}
                      required
                      autoFocus
                    />
                  </div>

                  <div className="quote-modal__field">
                    <label htmlFor="modal-organization" className="quote-modal__label">
                      {FORM_LABELS.organization}
                    </label>
                    <input
                      id="modal-organization"
                      type="text"
                      name="organization"
                      className="quote-modal__input"
                      placeholder={FORM_PLACEHOLDERS.organization}
                      required
                    />
                  </div>

                  <div className="quote-modal__field">
                    <label htmlFor="modal-email" className="quote-modal__label">
                      {FORM_LABELS.email}
                    </label>
                    <input
                      id="modal-email"
                      type="email"
                      name="user_email"
                      className="quote-modal__input"
                      placeholder={FORM_PLACEHOLDERS.email}
                      required
                    />
                  </div>

                  <div className="quote-modal__field">
                    <label htmlFor="modal-phone" className="quote-modal__label">
                      {FORM_LABELS.phone}
                    </label>
                    <input
                      id="modal-phone"
                      type="tel"
                      name="phone"
                      className="quote-modal__input"
                      placeholder={FORM_PLACEHOLDERS.phone}
                      required
                    />
                  </div>

                  <div className="quote-modal__field">
                    <label htmlFor="modal-service" className="quote-modal__label">
                      {FORM_LABELS.service}
                    </label>
                    <select
                      id="modal-service"
                      name="service"
                      className="quote-modal__select"
                      required
                      defaultValue=""
                    >
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="quote-modal__field">
                    <label htmlFor="modal-details" className="quote-modal__label">
                      {FORM_LABELS.details}
                    </label>
                    <textarea
                      id="modal-details"
                      name="message"
                      className="quote-modal__textarea"
                      placeholder={FORM_PLACEHOLDERS.details}
                      rows={4}
                      maxLength={DETAILS_MAX_LENGTH}
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                    />
                    <span className="quote-modal__char-count">
                      {details.length}/{DETAILS_MAX_LENGTH} characters
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="quote-modal__submit"
                    disabled={isSending}
                    aria-disabled={isSending}
                  >
                    {isSending ? "Sending..." : SUBMIT_LABEL}
                  </button>

                  {(submitError || submitSuccess) && (
                    <p
                      className="quote-modal__char-count"
                      role={submitError ? "alert" : "status"}
                      aria-live="polite"
                      style={{
                        color: submitError ? "#b42318" : "#027a55",
                        textAlign: "center",
                        marginTop: "-2px",
                      }}
                    >
                      {submitError || submitSuccess}
                    </p>
                  )}
                </form>
              </div>
            </div>,
            document.body
          )
        : null}
    </QuoteModalContext.Provider>
  );
}

export function useQuoteModal() {
  const ctx = useContext(QuoteModalContext);
  if (!ctx) {
    throw new Error("useQuoteModal must be used within QuoteModalProvider");
  }
  return ctx;
}


"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  GET_IN_TOUCH_TITLE,
  GET_IN_TOUCH_INTRO,
  PHONE_ICON,
  EMAIL_ICON,
  CONTACT_PHONE,
  CONTACT_PHONE_SUB,
  CONTACT_EMAIL_PRIMARY,
  CONTACT_EMAIL_SECONDARY,
  CONTACT_EMAIL_SUB,
  TRUSTED_TITLE,
  TRUSTED_BADGES,
  QUOTE_TITLE,
  QUOTE_INTRO,
  FORM_LABELS,
  FORM_PLACEHOLDERS,
  SERVICE_OPTIONS,
  DETAILS_MAX_LENGTH,
  SUBMIT_LABEL,
} from "./contactData";
import "./form.css";

const Form = () => {
  const [details, setDetails] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState("");
  const [submitError, setSubmitError] = useState("");
  const formRef = useRef(null);

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
        throw new Error("Contact form reference is not available.");
      }

      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);

      setSubmitSuccess("Thanks! Your message has been sent. We'll get back to you shortly.");
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
    <section className="contact-form section-padding" aria-label="Contact">
      <div className="contact-form__inner">
        <div className="contact-form__grid">
          {/* Left: Get in Touch */}
          <div className="contact-form__touch">
            <h2 className="contact-form__touch-title">{GET_IN_TOUCH_TITLE}</h2>
            <p className="contact-form__touch-intro">{GET_IN_TOUCH_INTRO}</p>

            <div className="contact-form__contact-list">
              <div className="contact-form__contact-item">
                <div className="contact-form__contact-icon-wrap">
                  <img
                    src={PHONE_ICON}
                    alt=""
                    className="contact-form__contact-icon"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="contact-form__contact-body">
                  <span className="contact-form__contact-label">Phone</span>
                  <a
                    href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
                    className="contact-form__contact-value"
                  >
                    {CONTACT_PHONE}
                  </a>
                  <span className="contact-form__contact-sub">
                    {CONTACT_PHONE_SUB}
                  </span>
                </div>
              </div>

              <div className="contact-form__contact-item">
                <div className="contact-form__contact-icon-wrap">
                  <img
                    src={EMAIL_ICON}
                    alt=""
                    className="contact-form__contact-icon"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="contact-form__contact-body">
                  <span className="contact-form__contact-label">Email</span>
                  <a
                    href={`mailto:${CONTACT_EMAIL_PRIMARY}`}
                    className="contact-form__contact-value"
                  >
                    {CONTACT_EMAIL_PRIMARY}
                  </a>
                  <a
                    href={`mailto:${CONTACT_EMAIL_SECONDARY}`}
                    className="contact-form__contact-value"
                  >
                    {CONTACT_EMAIL_SECONDARY}
                  </a>
                  <span className="contact-form__contact-sub">
                    {CONTACT_EMAIL_SUB}
                  </span>
                </div>
              </div>
            </div>

            <div className="contact-form__divider" aria-hidden="true" />

            <div className="contact-form__trusted">
              <h3 className="contact-form__trusted-title">{TRUSTED_TITLE}</h3>
              <div className="contact-form__badges">
                {TRUSTED_BADGES.map((badge) => (
                  <div
                    key={badge.id}
                    className="contact-form__badge"
                    aria-label={badge.label}
                  >
                    <img
                      src={badge.icon}
                      alt=""
                      className="contact-form__badge-icon"
                      width={16}
                      height={16}
                    />
                    <span className="contact-form__badge-label">
                      {badge.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Request a Free Quote form */}
          <div className="contact-form__quote">
            <h2 className="contact-form__quote-title">{QUOTE_TITLE}</h2>
            <p className="contact-form__quote-intro">{QUOTE_INTRO}</p>

            <form
              ref={formRef}
              className="contact-form__form"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="contact-form__field">
                <label
                  htmlFor="contact-full-name"
                  className="contact-form__label"
                >
                  {FORM_LABELS.fullName}
                </label>
                <input
                  id="contact-full-name"
                  type="text"
                  name="user_name"
                  className="contact-form__input"
                  placeholder={FORM_PLACEHOLDERS.fullName}
                  required
                />
              </div>

              <div className="contact-form__field">
                <label
                  htmlFor="contact-organization"
                  className="contact-form__label"
                >
                  {FORM_LABELS.organization}
                </label>
                <input
                  id="contact-organization"
                  type="text"
                  name="organization"
                  className="contact-form__input"
                  placeholder={FORM_PLACEHOLDERS.organization}
                  required
                />
              </div>

              <div className="contact-form__field">
                <label htmlFor="contact-email" className="contact-form__label">
                  {FORM_LABELS.email}
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="user_email"
                  className="contact-form__input"
                  placeholder={FORM_PLACEHOLDERS.email}
                  required
                />
              </div>

              <div className="contact-form__field">
                <label htmlFor="contact-phone" className="contact-form__label">
                  {FORM_LABELS.phone}
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  className="contact-form__input"
                  placeholder={FORM_PLACEHOLDERS.phone}
                  required
                />
              </div>

              <div className="contact-form__field">
                <label
                  htmlFor="contact-service"
                  className="contact-form__label"
                >
                  {FORM_LABELS.service}
                </label>
                <select
                  id="contact-service"
                  name="service"
                  className="contact-form__select"
                  required
                >
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="contact-form__field">
                <label
                  htmlFor="contact-details"
                  className="contact-form__label"
                >
                  {FORM_LABELS.details}
                </label>
                <textarea
                  id="contact-details"
                  name="message"
                  className="contact-form__textarea"
                  placeholder={FORM_PLACEHOLDERS.details}
                  rows={4}
                  maxLength={DETAILS_MAX_LENGTH}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                />
                <span className="contact-form__char-count">
                  {details.length}/{DETAILS_MAX_LENGTH} characters
                </span>
              </div>

              <div className="contact-form__submit-wrap">
                <button
                  type="submit"
                  className="contact-form__submit"
                  disabled={isSending}
                  aria-disabled={isSending}
                >
                  {isSending ? "Sending..." : SUBMIT_LABEL}
                </button>
              </div>

              {(submitError || submitSuccess) && (
                <p
                  className="contact-form__char-count"
                  role={submitError ? "alert" : "status"}
                  aria-live="polite"
                  style={{
                    color: submitError ? "#b42318" : "#027a55",
                    textAlign: "center",
                    margin: "-6px 0 0",
                  }}
                >
                  {submitError || submitSuccess}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;

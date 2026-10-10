/* eslint-disable @next/next/no-img-element */
"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Nav from "../../../components/Nav/Nav";
import Footer from "../../../components/Footer/Footer";
import { SolutionCta } from "../../../components/Solutions/Solutions";
import QuoteButton from "../about-us/quote-button";
import shared from "../about-us/about-us.module.css";
import styles from "./careers.module.css";
import CareerDropdown from "./career-dropdown";
import { benefits, roles, steps } from "./career-data";

const asset = (name) => `/images/careers/${name}.svg`;
function Icon({ name }) { return <span className={styles.icon}><img src={asset(name)} alt="" /></span>; }
function Heading({ eyebrow, title, children }) { return <div className={styles.heading}><p className={styles.eyebrow}>{eyebrow}</p><h2>{title}</h2>{children}</div>; }
function Background() { return <div className={shared.contactBackground} aria-hidden="true">{["glowRight", "glowBottom", "glowRightBottom", "glowLeft"].map((name,i) => <img key={name} className={shared[name]} src={asset(["glow-right", "glow-bottom", "glow-right-bottom", "glow-left"][i])} alt="" />)}</div>; }

export default function CareersContent() {
  const [role, setRole] = useState("");
  const [details, setDetails] = useState("");
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null);
  const formRef = useRef(null);
  const [experience, setExperience] = useState("");
  const [availability, setAvailability] = useState("");
  const [rightToWork, setRightToWork] = useState("");
  const roleOptions = ["Healthcare Assistant", "Support Worker", "Senior Carer", "Registered Nurse", "Kitchen Assistants", "Cleaners / Ancillary Staff", "Others"];
  function chooseRole(value) {
    setRole(roleOptions[roles.findIndex(item => item.title === value)] || value);
    setStatus(null);
    document.getElementById("application").scrollIntoView({ block: "start" });
    formRef.current.querySelector('[role="combobox"]').focus({ preventScroll: true });
  }
  async function submit(event) {
    event.preventDefault();
    if (sending) return;
    const form = new FormData(formRef.current);
    setSending(true);
    setStatus(null);
    try {
      await emailjs.send("service_vgnq2mp", "template_wa1aih4", {
        user_name: String(form.get("fullName")).trim(),
        user_email: String(form.get("email")).trim(),
        phone: String(form.get("phone")).trim(),
        organization: "Career applicant",
        service: `Career application: ${role}`,
        message: ["CAREER APPLICATION", `Role: ${role}`, `Experience: ${form.get("experience") || "Not specified"}`, `Availability: ${form.get("availability") || "Not specified"}`, `Right to work in the UK: ${form.get("rightToWork")}`, "", `About the applicant: ${details.trim() || "Not provided"}`].join("\n"),
      }, "3f0JbSF6LP8Eg3oRs");
      formRef.current.reset();
      setRole("");
      setExperience(""); setAvailability(""); setRightToWork(""); setDetails("");
      setStatus({ error: false, text: "Thank you! Your application has been sent. Our recruitment team will be in touch." });
    } catch {
      setStatus({ error: true, text: "Your application could not be sent. Please try again or email info@citadelmeds.co.uk." });
    } finally { setSending(false); }
  }
  return <div className={styles.page}>
    <a href="#career-content" className={shared.skipLink}>Skip to careers</a><Nav />
    <main id="career-content" tabIndex={-1}>
      <section className={`${styles.section} ${styles.hero}`} aria-labelledby="career-heading">
        <div className={styles.heroCopy}><p className={styles.badge}><img src={asset("career")} alt="" />Careers at Citadel Meds Ltd</p><div className={styles.copy}><h1 id="career-heading">Build a Career That Makes a Real Difference</h1><p className={styles.tagline}>Join a team that values integrity, compassion and excellence.</p><p>We&apos;re always looking for dedicated care professionals - from Healthcare Assistants and Support Workers to Registered Nurses. Enjoy flexible shifts, competitive pay and genuine support every step of the way.</p></div><div className={styles.buttons}><a className={shared.button} href="#application">Apply Now<img src={asset("arrow-white")} alt="" /></a><a className={`${shared.button} ${shared.secondary}`} href="#open-roles">View Open Roles<img src={asset("arrow-blue")} alt="" /></a></div><ul className={styles.signals}>{[["shift-small","Flexible shift"],["pay-small","Weekly or monthly pay"],["training-small","Free training"]].map(([icon,text]) => <li key={text}><img src={asset(icon)} alt="" />{text}</li>)}</ul></div>
        <div className={styles.photo}><img src="/images/careers/hero.png" alt="Healthcare professionals working together" /></div><div className={styles.available}><strong>24/7</strong><span>shifts available</span></div>
      </section>
      <section className={`${styles.section} ${styles.white}`} aria-label="Why work with us"><Heading eyebrow="WHY WORK WITH US" title="A Better Place to Work, Grow and Belong"><p>We invest in our people because great care starts with a supported, valued workforce.</p></Heading><div className={styles.grid}>{benefits.map(item => <article className={styles.card} key={item.title}><Icon name={item.icon} /><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>
      <section id="open-roles" className={styles.section} aria-label="Roles available"><Heading eyebrow="ROLES AVAILABLE" title="Find the Role That Fits You"><p>We recruit across a wide range of care and clinical positions. Don&apos;t see your role?<br />Get in touch - we&apos;d love to hear from you.</p></Heading><div className={styles.grid}>{roles.map(item => <article className={`${styles.card} ${styles.roleCard}`} key={item.title}><Icon name="support" /><h3>{item.title}</h3><p>{item.text}</p><ul className={styles.tags}>{item.tags.map(tag => <li key={tag}>{tag}</li>)}</ul><button type="button" className={styles.applyRole} onClick={() => chooseRole(item.title)}>Apply for this role<img src={asset("apply-arrow")} alt="" /></button></article>)}</div></section>
      <section className={`${styles.section} ${styles.white}`} aria-label="Recruitment process"><Heading eyebrow="HOW TO APPLY" title="Our Recruitment Process"><p>A clear, supportive journey from application to your first shift - no surprises along the way.</p></Heading><ol className={styles.steps}>{steps.map((step,i) => <li key={step.title}><div className={styles.stepMarker}><span>{String(i+1).padStart(2,"0")}</span>{i<steps.length-1 && <div className={styles.stepConnector} aria-hidden="true" />}</div><div className={styles.stepCard}><h3>{step.title}</h3><p>{step.text}</p></div></li>)}</ol></section>
      <section id="application" className={`${styles.section} ${styles.application}`} aria-labelledby="application-heading"><div className={styles.applicationCopy}><p className={styles.eyebrow}>APPLY TODAY</p><h2 id="application-heading">Start Your Application</h2><p>Complete the form and our recruitment team will be in touch. It takes just a couple of minutes - we review every single application.</p><p><strong>Working together to deliver better staffing, better care, and better results.</strong></p><ul className={styles.reassurance}>{[["secure","Enhanced DBS and full compliance support provided."],["clock","We respond instantly"],["lock","Your information is handled securely in line with UK GDPR."]].map(([icon,text]) => <li key={text}><img src={asset(icon)} alt="" />{text}</li>)}</ul><div className={styles.talk}><h3>Prefer to talk first?</h3><div><a href="tel:07456910745"><img src={asset("call-small")} alt="" />07456 910 745</a><a href="mailto:info@citadelmeds.co.uk"><img src={asset("email")} alt="" />info@citadelmeds.co.uk</a></div></div></div>
        <form ref={formRef} className={styles.form} onSubmit={submit} aria-label="Career application" aria-busy={sending}><fieldset disabled={sending}>
          <label>Full Name *<input name="fullName" autoComplete="name" required maxLength={120} placeholder="John Smith" pattern=".*\S.*" /></label>
          <div className={styles.formRow}><label>Email Address *<input name="email" type="email" autoComplete="email" required maxLength={254} placeholder="john.smith@example.com" /></label><label>Phone Number *<input name="phone" type="tel" autoComplete="tel" required maxLength={30} placeholder="07456 910 745" /></label></div>
          <CareerDropdown label="Role Applying For *" name="role" placeholder="Select a role" options={roleOptions} value={role} onChange={setRole} required wide />
          <div className={styles.formRow}>
            <CareerDropdown label="Experience" name="experience" placeholder="Select experience" options={["No Experience Yet", "Less Than 1 Year", "1 - 2 Years", "3 - 4 Years", "5+ Years"]} value={experience} onChange={setExperience} />
            <CareerDropdown label="Availability" name="availability" placeholder="Select Availability" options={["Full-time", "Part-time", "Nights", "Weekends", "Flexible"]} value={availability} onChange={setAvailability} />
          </div>
          <CareerDropdown label="Right to Work in the UK *" name="rightToWork" placeholder="Select an option" options={["Yes - UK/Irish Citizen", "Yes - Visa With Work Rights", "I Require Sponsorship"]} value={rightToWork} onChange={setRightToWork} required wide />
          <label>Tell Us About Yourself<div className={styles.textareaWrap}><textarea name="details" value={details} onChange={e=>setDetails(e.target.value)} maxLength={500} placeholder="Share your experience, qualification and what you’re looking for..." aria-describedby="career-character-count" /><img src={asset("textarea")} alt="" /></div></label><p id="career-character-count" className={styles.counter}>{details.length}/500 characters</p>
          <button type="submit" className={styles.submit}>{sending ? "Sending Application…" : "Submit Application"}</button>
        </fieldset>{status && <p className={`${styles.status} ${status.error ? styles.error : ""}`} role={status.error ? "alert" : "status"}>{status.text}</p>}</form>
      </section>
      <section className={`${styles.section} ${shared.contact} ${styles.contact}`} aria-label="Questions about applying"><SolutionCta headingAs="h2" eyebrow="QUESTIONS ABOUT APPLYING?" title="We're here to help" subtitle={<>Call our recruitment team any time.<br />We&apos;re available 24/7 to answer questions about roles, shifts and getting started.</>} background={<Background />} primary={{label:"07456 910 745",href:"tel:07456910745",iconSrc:asset("call")}} secondaryButton={<QuoteButton iconSrc={asset("arrow-white")} />} /></section>
    </main><Footer />
  </div>;
}

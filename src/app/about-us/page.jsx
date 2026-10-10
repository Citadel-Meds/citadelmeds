/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Nav from "../../../components/Nav/Nav";
import Footer from "../../../components/Footer/Footer";
import { SolutionCta } from "../../../components/Solutions/Solutions";
import styles from "./about-us.module.css";
import QuoteButton from "./quote-button";

const description = "A UK-based agency connecting fully vetted, compassionate care professionals with the providers who depend on them - nationwide, around the clock.";
export const metadata = { title: "About Us", description, alternates: { canonical: "/about-us" }, openGraph: { title: "About Us | Citadel Meds", description, url: "/about-us" } };
const asset = (name) => `/images/about-us/${name}.svg`;
const services = [
  "Supply of fully trained Healthcare Assistants, Support Workers, Senior Carers and specialized temporary staff",
  "Full pre-employment vetting: enhanced DBS checks, reference verification, right-to-work confirmation and training audits",
  "Flexible shift coverage: same-day emergency cover, short-term placements and long-term contracted staffing",
  "Full administrative support: payroll management, compliance tracking, documentation and quality assurance",
  "Direct, accessible communication to ensure every client and staff member feels supported at all times",
];
const standards = ["Adherence to UK GDPR & Data Protection Act 2018", "Full insurance cover: Public Liability, Employers’ Liability and Professional Indemnity", "Alignment with CQC fundamental standards and safeguarding protocols", "Regular policy reviews and staff training to reflect best practice and legal updates"];
const benefits = [
  ["secure", "Fully Compliant", "Every member of staff and every process meets or exceeds regulatory requirements."],
  ["flash", "Reliable & Fast", "We respond quickly to requests, with flexible staffing models to suit your needs."],
  ["people", "People-First Approach", "We invest in our staff, ensuring they feel valued, supported and ready to deliver great care."],
  ["eye", "Transparent", "Clear pricing, honest communication and comprehensive documentation always provided."],
  ["location", "Local Understanding, National Reach", "We combine personal service with the ability to support clients across England and Wales."],
];
const values = [["secure", "Integrity", "Acting honestly and ethically in everything we do."], ["heart", "Compassion", "Approaching every interaction with empathy and respect."], ["quality", "Excellence", "Continually improving our service and standards."], ["heart", "Collaboration", "Working alongside clients and staff as true partners."]];
function Icon({ name, large = false }) { return <span className={`${styles.icon} ${large ? styles.largeIcon : ""}`}><img src={asset(name)} alt="" /></span>; }
function Checklist({ items }) { return <ul className={styles.checklist}>{items.map((item) => <li key={item}><img src={asset("tick")} alt="" /><span>{item}</span></li>)}</ul>; }
function Card({ item }) { return <article className={styles.card}><Icon name={item[0]} /><h3>{item[1]}</h3><p>{item[2]}</p></article>; }
function ContactBackground() { return <div className={styles.contactBackground} aria-hidden="true">{["glowRight", "glowBottom", "glowRightBottom", "glowLeft"].map((name, i) => <img key={name} className={styles[name]} src={asset(["glow-right", "glow-bottom", "glow-right-bottom", "glow-left"][i])} alt="" />)}</div>; }

export default function AboutUsPage() {
  return <div className={styles.page}>
    <a className={styles.skipLink} href="#about-content">Skip to about us</a>
    <Nav />
    <main id="about-content" tabIndex={-1}>
      <section className={`${styles.section} ${styles.hero}`} aria-labelledby="about-heading">
        <div className={styles.heroCopy}>
          <p className={styles.agency}><img src={asset("agency")} alt="" />UK Healthcare Staffing & Clinical Cleaning Agency</p>
          <div className={styles.copy}><h1 id="about-heading">About Citadel Meds Ltd</h1><p className={styles.tagline}>Your Trusted Partner in Healthcare Staffing Solutions</p><p>{description}</p></div>
          <div className={styles.buttons}><Link className={styles.button} href="mailto:info@citadelmeds.co.uk">Request Staff Now</Link><a className={`${styles.button} ${styles.secondary}`} href="/our-team">Meet our Team<img src={asset("arrow-blue")} alt="" /></a></div>
        </div>
        <div className={styles.photo}><img src="/images/about-us/team.png" alt="A team of healthcare professionals in clinical uniforms" /></div>
        <div className={styles.verified}><strong>Only Trained<br />& Verified</strong><p>applicants are deployed</p></div>
      </section>
      <section className={`${styles.section} ${styles.white} ${styles.twoColumns}`} aria-labelledby="who-heading">
        <div className={styles.copy}><p className={styles.eyebrow}>WHO WE ARE</p><h2 id="who-heading">Safe, reliable staffing built on compliance</h2><p>Citadel Meds Ltd is a UK-based healthcare temporary staffing agency dedicated to connecting high-quality, fully vetted care professionals with care homes, residential facilities, supported living services and healthcare providers across the country.</p><p>Founded on the principle that safe, reliable staffing is the foundation of excellent care, we combine rigorous compliance standards with flexible, responsive service to meet the evolving needs of the health and social care sector.</p><p>From our base in Wolverhampton, we operate nationwide with a strong focus on transparency, integrity and operational excellence. We are the team behind jkhealthcareservices.co.uk and citadelmeds.co.uk, serving both established providers and growing organizations.</p></div>
        <article className={styles.mission}><img className={styles.missionArt} src={asset("mission")} alt="" /><Icon name="flag" large /><h2>Our Mission</h2><p>To deliver consistent, compliant and compassionate staffing solutions that empower care providers to focus on what matters most: delivering exceptional care to those who rely on them.</p><p>We strive to raise standards across the sector by investing in our people, maintaining uncompromising compliance, and building lasting partnerships based on trust and reliability.</p></article>
      </section>
      <section className={`${styles.section} ${styles.twoColumns}`} aria-label="Our services and standards">
        <article className={styles.detailCard}><Icon name="case" large /><h2>What We Do</h2><p>We provide a complete end-to-end staffing service:</p><Checklist items={services} /></article>
        <article className={styles.detailCard}><Icon name="secure-large" large /><h2>Our Standards & Compliance</h2><p>We operate strictly in line with UK health and social care regulations, including:</p><Checklist items={standards} /><Link className={styles.complianceLink} href="/compliance">View Compliance & Governance<img src={asset("arrow-small")} alt="" /></Link></article>
      </section>
      <section className={`${styles.section} ${styles.white}`} aria-labelledby="benefits-heading"><div className={styles.centerHeading}><p className={styles.eyebrow}>WHY CHOOSE US</p><h2 id="benefits-heading">Trusted by providers across the UK</h2></div><div className={styles.benefits}>{benefits.map((item) => <Card item={item} key={item[1]} />)}<article className={`${styles.card} ${styles.available}`}><h3>24/7</h3><p>Availability for planned and unplanned staffing needs, with instant response.</p></article></div></section>
      <section id="our-team" className={`${styles.section} ${styles.twoColumns} ${styles.team}`} aria-labelledby="team-heading"><div className={styles.teamCopy}><p className={styles.eyebrow}>OUR TEAM & VALUES</p><h2 id="team-heading">Experience across healthcare, recruitment and compliance</h2><p>Our team brings together experience in healthcare management, recruitment and regulatory compliance. We believe in the values below - and we live them every day.</p><Link className={styles.button} href="/our-team">Meet Our Full Team<img src={asset("arrow-white")} alt="" /></Link></div><div className={styles.values}>{values.map((item) => <Card key={item[1]} item={item} />)}</div></section>
      <section className={`${styles.section} ${styles.contact}`} aria-label="Work with us"><SolutionCta headingAs="h2" eyebrow="WORK WITH US" title="Better staffing, better care, better results" subtitle="Partner with a team that prioritises safety, transparency and reliability in everything we do." background={<ContactBackground />} primary={{ label: "07456 910 745", href: "tel:07456910745", iconSrc: asset("call") }} secondaryButton={<QuoteButton />} /></section>
    </main>
    <Footer />
  </div>;
}

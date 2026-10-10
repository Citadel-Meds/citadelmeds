/* eslint-disable @next/next/no-img-element */
import Nav from "../../../components/Nav/Nav";
import Footer from "../../../components/Footer/Footer";
import { SolutionCta } from "../../../components/Solutions/Solutions";
import QuoteButton from "../about-us/quote-button";
import shared from "../about-us/about-us.module.css";
import styles from "./our-team.module.css";
import { teamGroups } from "./team-content";

const description = "From leadership to frontline support, our team brings together experience in healthcare management, recruitment and regulatory compliance - all working to deliver better staffing and better care.";
export const metadata = { title: "Our Team", description, alternates: { canonical: "/our-team" }, openGraph: { title: "Our Team | Citadel Meds", description, url: "/our-team" } };
const asset = (name) => `/images/our-team/${name}.svg`;
const values = [["integrity", "Integrity", "Acting honestly and ethically in everything we do."], ["compassion", "Compassion", "Approaching every interaction with empathy and respect."], ["excellence", "Excellence", "Continually improving our service and standards."], ["compassion", "Collaboration", "Working alongside clients and staff as true partners."]];
function Icon({ name }) { return <span className={styles.icon}><img src={asset(name)} alt="" /></span>; }
function ContactBackground() { return <div className={shared.contactBackground} aria-hidden="true">{["glowRight", "glowBottom", "glowRightBottom", "glowLeft"].map((name, i) => <img key={name} className={shared[name]} src={asset(["glow-right", "glow-bottom", "glow-right-bottom", "glow-left"][i])} alt="" />)}</div>; }
export default function OurTeamPage() {
  return <div className={styles.page}>
    <a href="#team-content" className={shared.skipLink}>Skip to our team</a>
    <Nav />
    <main id="team-content" tabIndex={-1}>
      <section className={`${styles.section} ${styles.hero}`} aria-labelledby="team-heading">
        <p className={styles.badge}><span><img src={asset("group")} alt="" /></span>Our Team at Citadel Meds Ltd</p>
        <div className={styles.heroCopy}><h1 id="team-heading">Our Team</h1><p className={styles.tagline}>The Dedicated People Behind Citadel Meds Ltd</p><p className={styles.intro}>{description}</p></div>
      </section>
      {teamGroups.map((group,index) => <section className={`${styles.section} ${index % 2 === 0 ? styles.white : ""}`} key={group.id} aria-labelledby={`${group.id}-heading`}>
        <h2 className={styles.groupHeading} id={`${group.id}-heading`}><span className={styles.groupIcon}><img src={asset(group.icon)} alt="" /></span>{group.title}</h2>
        <div className={styles.roles}>{group.roles.map((role) => <article className={styles.role} key={role.title}><Icon name="person" /><h3>{role.title}</h3><p>{role.description}</p></article>)}</div>
      </section>)}
      <section className={`${styles.section} ${styles.culture}`} aria-labelledby="culture-heading">
        <div className={styles.cultureCopy}><p className={styles.eyebrow}>OUR CULTURE</p><h2 id="culture-heading">United by integrity, compassion and excellence</h2><p>Every team member, from leadership to frontline staff - prioritizes safety, transparency, and reliability. We invest in continuous training, value flexible working, and strive to build trust with every client and candidate.</p><p className={styles.cultureClosing}>Working together to deliver better staffing, better care, and better results.</p></div>
        <div className={styles.values}>{values.map(([icon,title,text]) => <article className={styles.value} key={title}><Icon name={icon} /><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>
      <section className={`${styles.section} ${shared.contact}`} aria-label="Join Citadel Meds Ltd"><SolutionCta headingAs="h2" eyebrow="JOIN CITADEL MEDS LTD" title="Looking for a role or a staffing partner?" subtitle="Whether you’re a care professional seeking flexible work or a provider needing reliable staff, our team is ready to help." background={<ContactBackground />} primary={{ label: "07456 910 745", href: "tel:07456910745", iconSrc: asset("call") }} secondaryButton={<QuoteButton iconSrc={asset("arrow")} />} /></section>
    </main>
    <Footer />
  </div>;
}

/* eslint-disable @next/next/no-img-element */
import PageHero from "../../../components/PageHero/PageHero";
import Footer from "../../../components/Footer/Footer";
import PolicyContents from "./policy-contents";
import { policyIntroduction, policySections } from "./policy-content";
import styles from "./privacy-policy.module.css";

export const metadata = {
  title: "Privacy Policy",
  description: "How Citadel Meds Ltd collects, uses, stores, shares and safeguards your personal information.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: { title: "Privacy Policy | Citadel Meds", url: "/privacy-policy", description: "How Citadel Meds Ltd protects your personal information." },
};

function PolicyText({ text }) {
  if (text.includes("ico.org.uk")) {
    const [before, after] = text.split("ico.org.uk");
    return <>{before}<a href="https://ico.org.uk/" target="_blank" rel="noreferrer">ico.org.uk</a>{after}</>;
  }
  return text;
}

export default function PrivacyPolicyPage() {
  return (
    <div className={`privacy-page ${styles.page}`}>
      <a href="#policy-content" className={styles.skipLink}>Skip to privacy policy</a>
      <header className={styles.hero}>
        <PageHero title="Privacy Policy" description={metadata.description} backgroundImage="/images/privacy-policy/hero.png" backgroundOverlay="/images/privacy-policy/hero-decoration.svg" />
      </header>
      <main className={styles.main} id="policy-content" tabIndex={-1}>
        <div className={styles.layout}>
          <PolicyContents sections={policySections.map(({ id, title }) => ({ id, title }))} />
          <article className={styles.article} aria-label="Privacy policy">
            <div className={styles.badges}>
              <span className={styles.badge}><img src="/images/privacy-policy/calendar.svg" alt="" /><span>Effective Date: <time dateTime="2026-07-16">16 July 2026</time></span></span>
              <span className={styles.badge}><img src="/images/privacy-policy/home-heart.svg" alt="" />Citadel Meds Ltd</span>
            </div>
            <p>{policyIntroduction}</p>
            {policySections.map((section, index) => (
              <section className={styles.section} id={section.id} key={section.id} aria-labelledby={`${section.id}-heading`}>
                <h2 id={`${section.id}-heading`}><span className={styles.number} aria-hidden="true">{index + 1}</span>{section.title}</h2>
                {index === 0 ? (
                  <p>We are the Data Controller for all personal data we process:<br />Citadel Meds Ltd<br />Office Flat 3, 8 Castle Yard, Wolverhampton, WV1 3AL<br />Email: <a href="mailto:info@citadelmeds.co.uk">info@citadelmeds.co.uk</a> | Telephone: <a href="tel:07310086696">07310086696</a></p>
                ) : <p>{section.intro}</p>}
                {section.items.length > 0 && <ul className={styles.list}>{section.items.map((item) => (
                  <li key={item}><img src="/images/privacy-policy/tick-square.svg" alt="" /><span>{index === 3 || index === 7 ? <><strong>{item.slice(0, item.indexOf(":") + 1)}</strong>{item.slice(item.indexOf(":") + 1)}</> : item}</span></li>
                ))}</ul>}
                {section.note && <p className={styles.note}><PolicyText text={section.note} /></p>}
                {index < policySections.length - 1 && <div className={styles.divider} aria-hidden="true" />}
              </section>
            ))}
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}

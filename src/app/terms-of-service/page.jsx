/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import PageHero from "../../../components/PageHero/PageHero";
import Footer from "../../../components/Footer/Footer";
import PolicyContents from "../privacy-policy/policy-contents";
import styles from "../privacy-policy/privacy-policy.module.css";
import { termsDescription, termsIntroduction, termsSections } from "./terms-content";

export const metadata = {
  title: "Terms of Service",
  description: termsDescription,
  alternates: { canonical: "/terms-of-service" },
  openGraph: {
    title: "Terms of Service | Citadel Meds",
    url: "/terms-of-service",
    description: termsDescription,
  },
};

function TermsText({ text }) {
  return text.split(/(Privacy Policy)/).map((part, index) =>
    part === "Privacy Policy" ? (
      <Link key={index} href="/privacy-policy">{part}</Link>
    ) : part,
  );
}

export default function TermsOfServicePage() {
  return (
    <div className={`terms-page ${styles.page}`}>
      <a href="#terms-content" className={styles.skipLink}>Skip to terms of service</a>
      <header className={styles.hero}>
        <PageHero
          title="Terms of Service"
          description={termsDescription}
          backgroundImage="/images/privacy-policy/hero.png"
          backgroundOverlay="/images/terms-of-service/hero-decoration.svg"
        />
      </header>
      <main className={styles.main} id="terms-content" tabIndex={-1}>
        <div className={styles.layout}>
          <PolicyContents sections={termsSections.map(({ id, title }) => ({ id, title }))} />
          <article className={styles.article} aria-label="Terms of service">
            <div className={styles.badges}>
              <span className={styles.badge}>
                <img src="/images/privacy-policy/calendar.svg" alt="" />
                <span>Effective Date: <time dateTime="2026-07-16">16 July 2026</time></span>
              </span>
              <span className={styles.badge}>
                <img src="/images/privacy-policy/home-heart.svg" alt="" />Citadel Meds Ltd
              </span>
            </div>
            <p>{termsIntroduction}</p>
            {termsSections.map((section, index) => (
              <section
                className={styles.section}
                id={section.id}
                key={section.id}
                aria-labelledby={`${section.id}-heading`}
              >
                <h2 id={`${section.id}-heading`}>
                  <span className={styles.number} aria-hidden="true">{index + 1}</span>
                  {section.title}
                </h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}><TermsText text={paragraph} /></p>)}
                {section.items.length > 0 && (
                  <ul className={styles.list}>
                    {section.items.map((item) => (
                      <li key={item}>
                        <img src="/images/terms-of-service/tick-square.svg" alt="" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.note && <p className={styles.note}>{section.note}</p>}
                {section.id === "contact-us" && (
                  <p>
                    For questions about these Terms:<br />
                    Citadel Meds Ltd<br />
                    Office Flat 3, 8 Castle Yard, Wolverhampton, WV1 3AL<br />
                    Email: <a href="mailto:info@citadelmeds.co.uk">info@citadelmeds.co.uk</a>
                    {" | Telephone: "}<a href="tel:07310086696">07310086696</a>
                  </p>
                )}
                {index < termsSections.length - 1 && <div className={styles.divider} aria-hidden="true" />}
              </section>
            ))}
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}

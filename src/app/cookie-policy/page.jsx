/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import PageHero from "../../../components/PageHero/PageHero";
import Footer from "../../../components/Footer/Footer";
import PolicyContents from "../privacy-policy/policy-contents";
import styles from "../privacy-policy/privacy-policy.module.css";
import { cookieDescription, cookieIntroduction, cookieSections } from "./cookie-content";

export const metadata = {
  title: "Cookie Policy",
  description: cookieDescription,
  alternates: { canonical: "/cookie-policy" },
  openGraph: {
    title: "Cookie Policy | Citadel Meds",
    url: "/cookie-policy",
    description: cookieDescription,
  },
};

function CookieText({ text }) {
  return text.split(/(Privacy Policy)/).map((part, index) =>
    part === "Privacy Policy" ? (
      <Link key={index} href="/privacy-policy">{part}</Link>
    ) : part,
  );
}

export default function CookiePolicyPage() {
  return (
    <div className={`cookie-page ${styles.page}`}>
      <a href="#cookie-content" className={styles.skipLink}>Skip to cookie policy</a>
      <header className={styles.hero}>
        <PageHero
          title="Cookie Policy"
          description={cookieDescription}
          backgroundImage="/images/cookie-policy/hero.png"
          backgroundOverlay="/images/cookie-policy/hero-decoration.svg"
        />
      </header>
      <main className={styles.main} id="cookie-content" tabIndex={-1}>
        <div className={styles.layout}>
          <PolicyContents sections={cookieSections.map(({ id, title }) => ({ id, title }))} />
          <article className={styles.article} aria-label="Cookie policy">
            <div className={styles.badges}>
              <span className={styles.badge}>
                <img src="/images/cookie-policy/calendar.svg" alt="" />
                <span>Effective Date: <time dateTime="2026-07-16">16 July 2026</time></span>
              </span>
              <span className={styles.badge}>
                <img src="/images/cookie-policy/home-heart.svg" alt="" />Citadel Meds Ltd
              </span>
            </div>
            <p><CookieText text={cookieIntroduction} /></p>
            {cookieSections.map((section, index) => (
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
                {section.paragraphs.map((paragraph) => <p key={paragraph}><CookieText text={paragraph} /></p>)}
                {section.items.length > 0 && (
                  <ul className={styles.list}>
                    {section.items.map((item) => (
                      <li key={item}>
                        <img src="/images/cookie-policy/tick-square.svg" alt="" />
                        <span>{section.id === "types-of-cookies" ? <><strong>{item.slice(0, item.indexOf(":") + 1)}</strong>{item.slice(item.indexOf(":") + 1)}</> : item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.note && <p className={styles.note}>{section.note}</p>}
                {section.id === "contact-us" && (
                  <>
                  <p>
                    For questions about cookies:<br />
                    Citadel Meds Ltd<br />
                    Office Flat 3, 8 Castle Yard, Wolverhampton, WV1 3AL<br />
                    Email: <a href="mailto:info@citadelmeds.co.uk">info@citadelmeds.co.uk</a>
                    {" | Telephone: "}<a href="tel:07310086696">07310086696</a>
                  </p>
                  <p className={styles.note}>For more information about how we handle personal data, please read our <Link href="/privacy-policy">Privacy Policy</Link>.</p>
                  </>
                )}
                {index < cookieSections.length - 1 && <div className={styles.divider} style={{ backgroundImage: 'url("/images/cookie-policy/divider.svg")' }} aria-hidden="true" />}
              </section>
            ))}
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import PageHero from "../../../components/PageHero/PageHero";
import Footer from "../../../components/Footer/Footer";
import { SolutionCta } from "../../../components/Solutions/Solutions";
import heroStyles from "../privacy-policy/privacy-policy.module.css";
import styles from "./faqs.module.css";
import { faqDescription, faqGroups } from "./faq-content";

export const metadata = {
  title: "Frequently Asked Questions",
  description: faqDescription,
  alternates: { canonical: "/faqs" },
  openGraph: { title: "Frequently Asked Questions | Citadel Meds", description: faqDescription, url: "/faqs" },
};

function Answer({ text }) {
  return text.split(/(Privacy Policy|Cookie Policy)/).map((part, index) => part === "Privacy Policy" || part === "Cookie Policy"
    ? <Link key={index} href={part === "Privacy Policy" ? "/privacy-policy" : "/cookie-policy"}>{part}</Link>
    : part);
}

function ContactBackground() {
  return (
    <div className={styles.contactBackground} aria-hidden="true">
      <img className={styles.glowRight} src="/images/faqs/glow-right.svg" alt="" />
      <img className={styles.glowBottom} src="/images/faqs/glow-bottom.svg" alt="" />
      <img className={styles.glowRightBottom} src="/images/faqs/glow-right-bottom.svg" alt="" />
      <img className={styles.glowLeft} src="/images/faqs/glow-left.svg" alt="" />
    </div>
  );
}

export default function FaqsPage() {
  return (
    <div className={styles.page}>
      <a href="#faq-content" className={heroStyles.skipLink}>Skip to frequently asked questions</a>
      <header className={heroStyles.hero}>
        <PageHero title="Frequently Asked Questions" description={faqDescription}
          backgroundImage="/images/faqs/hero.png" backgroundOverlay="/images/faqs/hero-decoration.svg" />
      </header>
      <main id="faq-content" tabIndex={-1}>
        <div className={styles.content}>
          <div className={styles.categories} role="navigation" aria-label="FAQ categories">
            {faqGroups.map((group) => (
              <a href={`#${group.id}`} key={group.id}>
                <img src="/images/faqs/category.svg" alt="" />{group.title}
              </a>
            ))}
          </div>
          {faqGroups.map((group) => (
            <section className={styles.group} key={group.id} id={group.id} aria-labelledby={`${group.id}-heading`}>
              <h2 id={`${group.id}-heading`}>
                <span className={styles.groupIcon}><img src={`/images/faqs/${group.icon}`} alt="" /></span>
                {group.title}
              </h2>
              <div className={styles.questions}>
                {group.items.map((item) => (
                  <details className={styles.question} open key={item.id}>
                    <summary>
                      <h3>{item.question}</h3>
                      <span className={styles.toggle} aria-hidden="true"><img src="/images/faqs/plus.svg" alt="" /></span>
                    </summary>
                    <p><Answer text={item.answer} /></p>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>
        <section className={styles.contact} aria-label="Contact our team">
          <SolutionCta eyebrow="Still have questions?" headingAs="h2" title="We’re here to help 24/7"
            subtitle="Get in touch and our team will answer any question about your specific situation immediately"
            background={<ContactBackground />}
            primary={{label:"07456 910 745",href:"tel:07456910745",iconSrc:"/images/faqs/call.svg"}}
            secondary={{label:"Email Us",href:"mailto:info@citadelmeds.co.uk",iconSrc:"/images/faqs/email.svg"}} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

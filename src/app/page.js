import {
  Brands,
  Footer,
  Hero,
  Nav,
  ScrollReveal,
  Services,
  Solutions,
  Standards,
  Trust,
  Value,
} from "../../components";

export default function Home() {
  return (
    <div className={"container"}>
      <div className="container-inner">
        <Nav />
        <Hero />
      </div>
      <ScrollReveal animation="fade-up">
        <Trust />
      </ScrollReveal>
      <ScrollReveal animation="fade-up" delay={100}>
        <Services />
      </ScrollReveal>
      <ScrollReveal animation="fade-up" delay={100}>
        <Value />
      </ScrollReveal>
      <ScrollReveal animation="fade-up" delay={100}>
        <Standards />
      </ScrollReveal>
      <ScrollReveal animation="fade-up" delay={100}>
        <Solutions />
      </ScrollReveal>
      <ScrollReveal animation="fade-up" delay={100}>
        <Brands />
      </ScrollReveal>

      <ScrollReveal animation="fade">
        <Footer />
      </ScrollReveal>
    </div>
  );
}

import { site } from "@/content";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EmpathySection from "@/components/EmpathySection";
import FullBleedSection from "@/components/FullBleedSection";
import ApproachSection from "@/components/ApproachSection";
import SplitSection from "@/components/SplitSection";
import TeamSection from "@/components/TeamSection";
import ValuesSection from "@/components/ValuesSection";
import ServicesSection from "@/components/ServicesSection";
import MethodsSection from "@/components/MethodsSection";
import FounderSection from "@/components/FounderSection";
import BookingSection from "@/components/BookingSection";
import OfficeSection from "@/components/OfficeSection";
import Footer from "@/components/Footer";

// Section order mirrors the reference homepage exactly (PDF pages 1–12),
// plus the new "Our Office" section required for the redesign.
export default function HomePage() {
  return (
    <>
      <Header brand={site.brand} links={site.nav.links} cta={site.nav.cta} />
      <main>
        <Hero {...site.hero} />
        <EmpathySection {...site.empathy} />
        <FullBleedSection {...site.fullBleed} />
        <ApproachSection {...site.approach} />
        <SplitSection {...site.whereWeComeIn} />
        <SplitSection {...site.tackle} />
        <TeamSection {...site.team} />
        <ValuesSection {...site.values} />
        {site.services && <ServicesSection {...site.services} />}
        <MethodsSection {...site.methods} />
        <FounderSection {...site.founder} />
        <BookingSection {...site.booking} />
        {site.office && <OfficeSection {...site.office} />}
      </main>
      <Footer brand={site.brand} footer={site.footer} navigateLinks={site.nav.links} />
    </>
  );
}
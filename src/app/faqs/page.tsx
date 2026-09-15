import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AccordionList from "@/components/AccordionList";

export const metadata: Metadata = {
  title: `FAQs | ${site.brand.name}`,
  description: site.seo.description,
};

export default function FaqsPage() {
  return (
    <>
      <Header brand={site.brand} links={site.nav.links} cta={site.nav.cta} />
      <main className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:py-28">
          <Link
            href="/"
            className="text-[11px] uppercase tracking-[0.2em] text-ink transition-colors hover:text-accent"
          >
            ← Back to home
          </Link>
          <h1 className="mt-8 font-serif text-4xl text-ink">{site.faqs.heading}</h1>
          <div className="mt-10">
            <AccordionList items={site.faqs.items} />
          </div>
        </div>
      </main>
      <Footer brand={site.brand} footer={site.footer} navigateLinks={site.nav.links} />
    </>
  );
}
import AccentText from "./AccentText";
import AccordionList from "./AccordionList";
import type { SiteContent } from "@/content/types";

export default function MethodsSection({ id, heading, items }: SiteContent["methods"]) {
  return (
    <section id={id} className="bg-white">
      <div className="mx-auto grid max-w-content gap-12 px-6 py-20 lg:grid-cols-[1fr_1.2fr] lg:gap-20 lg:px-12 lg:py-28">
        <h2 className="font-serif text-3xl leading-snug text-ink lg:sticky lg:top-28 lg:self-start lg:text-4xl">
          <AccentText text={heading} />
        </h2>
        <AccordionList items={items} />
      </div>
    </section>
  );
}
import AccentText from "./AccentText";
import type { SiteContent } from "@/content/types";

export default function EmpathySection({ id, heading, eyebrow, paragraph }: SiteContent["empathy"]) {
  return (
    <section id={id} className="bg-sand">
      <div className="mx-auto grid max-w-content gap-10 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-28">
        <h2 className="font-serif text-3xl leading-snug text-ink lg:text-4xl">
          <AccentText text={heading} />
        </h2>
        <div className="lg:pt-2">
          <p className="max-w-md text-[11px] uppercase leading-6 tracking-[0.18em] text-ink/70">{eyebrow}</p>
          <p className="mt-5 max-w-md text-sm leading-7 text-ink/80">{paragraph}</p>
        </div>
      </div>
    </section>
  );
}
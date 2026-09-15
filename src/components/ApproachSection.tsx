import AccentText from "./AccentText";
import type { SiteContent } from "@/content/types";

export default function ApproachSection({ id, eyebrow, heading }: SiteContent["approach"]) {
  return (
    <section id={id} className="bg-white">
      <div className="mx-auto max-w-content px-6 py-24 lg:px-12 lg:py-36">
        <p className="text-[11px] uppercase tracking-[0.22em] text-ink/70">{eyebrow}</p>
        <h2 className="mt-7 max-w-3xl font-serif text-2xl leading-relaxed text-ink lg:text-[2rem]">
          <AccentText text={heading} />
        </h2>
      </div>
    </section>
  );
}
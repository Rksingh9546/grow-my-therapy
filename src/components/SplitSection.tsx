import Image from "next/image";
import Link from "next/link";
import AccentText from "./AccentText";
import type { SplitSectionData } from "@/content/types";

export default function SplitSection({
  id, image, imageSide, bleed, eyebrow, heading, paragraphs, cta,
}: SplitSectionData) {
  const bleedClass = bleed === "right" ? "lg:-mr-12" : bleed === "left" ? "lg:-ml-12" : "";
  const imageOnLeft = imageSide === "left";

  return (
    <section id={id} className="bg-white">
      <div className="mx-auto grid max-w-content items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-28">
        <div className={`relative h-[340px] lg:h-[480px] ${bleedClass} ${imageOnLeft ? "" : "lg:order-2"}`}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className={imageOnLeft ? "lg:order-2" : ""}>
          {eyebrow && <p className="text-[11px] uppercase tracking-[0.22em] text-ink/70">{eyebrow}</p>}
          {heading && (
            <h2 className={`font-serif text-3xl leading-snug text-ink lg:text-[2.1rem] ${eyebrow ? "mt-4" : ""}`}>
              <AccentText text={heading} />
            </h2>
          )}
          <div className={`space-y-5 text-sm leading-7 text-ink/80 ${heading ? "mt-6" : "mt-5"}`}>
            {paragraphs.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
          {cta && (
            <Link
              href={cta.href}
              className="mt-8 inline-block rounded-full border border-ink px-7 py-3 text-[11px] uppercase tracking-[0.2em] text-ink transition-colors hover:bg-ink hover:text-cream"
            >
              {cta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
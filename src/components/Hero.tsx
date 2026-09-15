import Image from "next/image";
import Link from "next/link";
import AccentText from "./AccentText";
import type { SiteContent } from "@/content/types";

export default function Hero({ eyebrow, heading, description, cta, image }: SiteContent["hero"]) {
  return (
    <section id="top" className="bg-cream">
      <div className="mx-auto grid max-w-content items-center gap-10 px-6 pb-16 pt-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14 lg:px-12 lg:pb-24 lg:pt-14">
        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-ink/70">{eyebrow}</p>
          <h1 className="mt-8 font-serif text-4xl leading-[1.15] text-ink sm:text-5xl lg:text-[3.5rem]">
            <AccentText text={heading} />
          </h1>
          <p className="mt-7 max-w-md text-sm leading-7 text-ink/80">{description}</p>
          <Link
            href={cta.href}
            className="mt-9 inline-block border-b border-ink pb-1 text-[11px] uppercase tracking-[0.22em] text-ink transition-colors hover:border-accent hover:text-accent"
          >
            {cta.label}
          </Link>
        </div>
        {/* image bleeds to the right viewport edge on desktop, like the reference */}
        <div className="relative h-[380px] sm:h-[460px] lg:-mr-12 lg:h-[560px]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
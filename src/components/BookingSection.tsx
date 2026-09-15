import Image from "next/image";
import Link from "next/link";
import AccentText from "./AccentText";
import type { SiteContent } from "@/content/types";

export default function BookingSection({ id, image, eyebrow, heading, note, cta }: SiteContent["booking"]) {
  return (
    <section id={id} className="bg-sand">
      <div className="mx-auto grid max-w-content items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-28">
        {/* image bleeds to the left edge on desktop, like the reference */}
        <div className="relative order-2 h-[340px] lg:order-1 lg:-ml-12 lg:h-[460px]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="order-1 lg:order-2 lg:pl-8">
          <p className="text-[11px] uppercase tracking-[0.22em] text-ink/70">{eyebrow}</p>
          <h2 className="mt-8 font-serif text-3xl leading-snug text-ink lg:text-[2.6rem]">
            <AccentText text={heading} />
          </h2>
          <p className="mt-6 text-sm leading-7 text-ink/80">{note}</p>
          <Link
            href={cta.href}
            className="mt-8 inline-block rounded-full border border-ink bg-cream px-8 py-3 text-[11px] uppercase tracking-[0.2em] text-ink underline underline-offset-4 transition-colors hover:bg-ink hover:text-cream"
          >
            {cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
import Image from "next/image";
import AccentText from "./AccentText";
import type { SiteContent } from "@/content/types";

export default function FounderSection({ image, heading, quote, attribution }: SiteContent["founder"]) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-content px-6 pb-24 lg:px-12">
        <div className="grid items-center gap-10 bg-taupe p-8 sm:p-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14 lg:p-16">
          <div className="relative h-[360px] lg:h-[420px]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 768px) 100vw, 350vw"
              className="object-contain"
            />
          </div>
          <div>
            <h2 className="font-serif text-3xl text-ink lg:text-4xl">
              <AccentText text={heading} />
            </h2>
            <blockquote className="mt-6 max-w-xl text-sm leading-7 text-ink/80">
              <p>“{quote}”</p>
            </blockquote>
            <p className="mt-6 text-sm text-ink">— {attribution}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

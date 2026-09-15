import Image from "next/image";
import AccentText from "./AccentText";
import type { SiteContent } from "@/content/types";

export default function FullBleedSection({ image, caption }: SiteContent["fullBleed"]) {
  return (
    <section className="relative h-[420px] w-full lg:h-[540px]">
      <Image src={image.src} alt={image.alt} fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-black/35" aria-hidden="true" />
      <p className="absolute bottom-10 left-6 max-w-xl font-serif text-2xl leading-snug text-cream lg:bottom-14 lg:left-16 lg:text-[2.1rem]">
        <AccentText text={caption} />
      </p>
    </section>
  );
}
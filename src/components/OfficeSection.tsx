import Image from "next/image";
import AccentText from "./AccentText";
import type { SiteContent } from "@/content/types";

export default function OfficeSection({
  id, heading, description, images, locationNote, sessionNote,
}: NonNullable<SiteContent["office"]>) {
  return (
    <section id={id} className="bg-white">
      <div className="mx-auto max-w-content px-6 py-20 lg:px-12 lg:py-28">
        <h2 className="font-serif text-3xl text-ink lg:text-4xl">
          <AccentText text={heading} />
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-ink/80">{description}</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img) => (
            <div key={img.src} className="relative h-64 w-full lg:h-72">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {(locationNote || sessionNote) && (
          <div className="mt-8 space-y-1.5 text-sm text-ink">
            {locationNote && <p>{locationNote}</p>}
            {sessionNote && <p>{sessionNote}</p>}
          </div>
        )}
      </div>
    </section>
  );
}
import Image from "next/image";
import type { SiteContent } from "@/content/types";

const sectionTitles = [
  "Understanding Your Experience",
  "A Warm, Collaborative Approach",
  "Support for Work and Everyday Life",
  "Therapy That Moves at Your Pace",
];

export default function TeamSection({
  id,
  heading,
  description,
  bio,
  members,
}: SiteContent["team"]) {
  const member = members[0];

  // Group the bio into sections of two paragraphs each.
  const bioSections = bio
  ? Array.from(
      { length: Math.ceil(bio.length / 2) },
      (_, index) => ({
        title: sectionTitles[index] ?? "More About Our Approach",
        paragraphs: bio.slice(index * 2, index * 2 + 2),
      })
    )
  : [];

  return (
    <section id={id} className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-12 md:py-24">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[minmax(0,1fr)_300px] md:gap-12 lg:grid-cols-[minmax(0,1fr)_350px] lg:gap-16">
          {/* Biography */}
          <div className="min-w-0">
            <h2 className="font-serif text-3xl text-ink md:text-4xl">
              {heading}
            </h2>

            <div className="my-6 h-0.5 w-24 bg-accent" />

            {description && (
              <p className="mb-8 max-w-3xl text-base leading-7 text-ink/75">
                {description}
              </p>
            )}

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {bioSections.map((section, index) => (
                <article
                  key={`${section.title}-${index}`}
                  className="rounded-2xl border border-ink/10 bg-white/70 p-5 md:p-6"
                >
                  <h3 className="mb-3 font-serif text-xl leading-snug text-ink">
                    {section.title}
                  </h3>

                  <div className="space-y-3">
                    {section.paragraphs.map((paragraph, paragraphIndex) => (
                      <p
                        key={`${index}-${paragraphIndex}`}
                        className="text-sm leading-7 text-ink/75"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Founder portrait */}
          {member && (
            <figure className="mx-auto w-full max-w-[350px] md:sticky md:top-24">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-white/60">
                <Image
  src={member.image.src}
  alt={member.image.alt}
  fill
  sizes="(min-width: 1024px) 40vw, 100vw"
  className="object-contain"
/>
              </div>

              <figcaption className="mt-5 text-center">
                <p className="font-serif text-2xl text-ink">
                  {member.name}
                </p>

                {member.role && (
                  <p className="mt-1 text-sm text-ink/65">{member.role}</p>
                )}
              </figcaption>
            </figure>
          )}
        </div>
      </div>
    </section>
  );
}

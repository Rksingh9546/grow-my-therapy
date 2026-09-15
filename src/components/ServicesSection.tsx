import type { SiteContent } from "@/content/types";

export default function ServicesSection({ id, eyebrow, heading, description, items }: NonNullable<SiteContent["services"]>) {
  return (
    <section id={id} className="bg-white">
      <div className="mx-auto max-w-content px-6 py-20 lg:px-12 lg:py-28">
        <p className="text-[11px] uppercase tracking-[0.22em] text-ink/70">{eyebrow}</p>
        <h2 className="mt-4 font-serif text-3xl text-ink lg:text-4xl">{heading}</h2>
        {description && <p className="mt-4 max-w-xl text-sm leading-7 text-ink/80">{description}</p>}
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {items.map((service) => (
            <article key={service.title} className="border border-line bg-cream p-7">
              <h3 className="font-serif text-xl text-ink">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink/80">{service.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
import type { SiteContent } from "@/content/types";

export default function ValuesSection({ id, items }: SiteContent["values"]) {
  return (
    <section id={id} className="bg-sand">
      <div className="mx-auto grid max-w-content gap-12 px-6 py-20 sm:grid-cols-3 lg:px-12 lg:py-28">
        {items.map((item) => (
          <div key={item.title}>
            <h2 className="font-serif text-2xl text-ink lg:text-[1.7rem]">{item.title}</h2>
            <p className="mt-5 text-sm leading-7 text-ink/80">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
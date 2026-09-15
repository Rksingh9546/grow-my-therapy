import Link from "next/link";
import Brand from "./Brand";
import type { NavLink, SiteContent } from "@/content/types";

type Props = {
  brand: SiteContent["brand"];
  footer: SiteContent["footer"];
  navigateLinks: NavLink[];
};

export default function Footer({ brand, footer, navigateLinks }: Props) {
  const email = footer.email?.trim();
  const phone = footer.phone?.trim();
  const phoneHref = phone?.replace(/[^\d+]/g, "");

  return (
    <footer className="bg-white">
      <div className="mx-auto grid max-w-content gap-12 px-6 pb-16 pt-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.8fr_1fr] lg:px-12">
        <div>
          <Brand name={brand.name} tagline={brand.tagline} large />
          <p className="mt-6 max-w-xs text-sm leading-7 text-ink/80">
            {footer.about}
          </p>
        </div>

        <nav aria-label="Footer">
          <h3 className="text-[11px] uppercase tracking-[0.22em] text-ink">
            {footer.navigateHeading}
          </h3>

          <ul className="mt-5 space-y-2.5 text-sm text-ink/80">
            {navigateLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-[11px] uppercase tracking-[0.22em] text-ink">
            {footer.teamHeading}
          </h3>

          <ul className="mt-5 space-y-2.5 text-sm text-ink/80">
            {footer.teamNames.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[11px] uppercase tracking-[0.22em] text-ink">
            {footer.contactHeading}
          </h3>

          <address className="mt-5 space-y-2.5 text-sm not-italic leading-6 text-ink/80">
            {footer.addressLines.map((line) => (
              <p key={line}>{line}</p>
            ))}

            {email && (
              <p>
                <a
                  href={`mailto:${email}`}
                  className="break-words transition-colors hover:text-accent"
                >
                  {email}
                </a>
              </p>
            )}

            {phone && phoneHref && (
              <p>
                <a
                  href={`tel:${phoneHref}`}
                  className="transition-colors hover:text-accent"
                >
                  {phone}
                </a>
              </p>
            )}

            {footer.servingNote && (
              <p className="pt-2">{footer.servingNote}</p>
            )}
          </address>
        </div>
      </div>

      <div className="bg-deep py-3.5">
        <p className="mx-auto max-w-content px-6 text-xs tracking-wide text-cream/90 lg:px-12">
          {footer.legal}
        </p>
      </div>
    </footer>
  );
}
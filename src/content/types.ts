export type NavLink = { label: string; href: string };
export type CtaLink = { label: string; href: string };
export type ImageAsset = { src: string; alt: string };
export type AccordionItem = { title: string; body: string };
export type FeatureItem = { title: string; body: string };
export type TeamMember = { name: string; role?: string; image: ImageAsset };

export type SplitSectionData = {
  id?: string;
  image: ImageAsset;
  imageSide: "left" | "right";
  bleed?: "left" | "right"; // image touches the viewport edge (like the reference)
  eyebrow?: string;
  heading?: string;
  paragraphs: string[];
  cta?: CtaLink;
};

export type SiteContent = {
  theme: "original" | "maya";
  brand: { name: string; tagline: string };
  nav: { links: NavLink[]; cta: CtaLink };
  seo: { title: string; description: string; keywords: string[] };
  hero: { eyebrow: string; heading: string; description: string; cta: CtaLink; image: ImageAsset };
  empathy: { id: string; heading: string; eyebrow: string; paragraph: string };
  fullBleed: { image: ImageAsset; caption: string };
  approach: { id: string; eyebrow: string; heading: string };
  whereWeComeIn: SplitSectionData;
  tackle: SplitSectionData;
  team: { id: string; heading: string; description: string; bio?: string[]; members: TeamMember[] };
  values: { id: string; items: FeatureItem[] };
  services?: { id: string; eyebrow: string; heading: string; description?: string; items: FeatureItem[] };
  methods: { id: string; heading: string; items: AccordionItem[] };
  founder: { image: ImageAsset; heading: string; quote: string; attribution: string };
  booking: { id: string; image: ImageAsset; eyebrow: string; heading: string; note: string; cta: CtaLink };
  office?: {
    id: string;
    heading: string;
    description: string;
    images: ImageAsset[];
    locationNote?: string;
    sessionNote?: string;
  };
  faqs: { heading: string; items: AccordionItem[] };
  footer: {
    about: string;
    navigateHeading: string;
    teamHeading: string;
    teamNames: string[];
    contactHeading: string;
    addressLines: string[];
    email: string;
    phone: string;
    servingNote: string;
    legal: string;
  };
};
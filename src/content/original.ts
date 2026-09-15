import type { SiteContent } from "./types";

/**
 * VARIANT 1 — Homepage clone of the reference site, matching the PDF screenshots
 * (section order, layout, spacing, colors, typography, image placement).
 *
 * NOTE: longer body paragraphs are PARAPHRASED (short headlines kept). Replace
 * them with the exact wording from your screenshots if required.
 * For the internship assignment demo only — do not publish this variant.
 */
const original: SiteContent = {
  theme: "original",
  brand: { name: "Conejo Valley", tagline: "Family Counseling" },

  nav: {
    links: [
      { label: "About", href: "/#about" },
      { label: "Our Team", href: "/#team" },
      { label: "Specialties", href: "/#specialties" },
      { label: "Methods", href: "/#methods" },
      { label: "FAQs", href: "/faqs" },
    ],
    cta: { label: "Contact", href: "/#book" },
  },

  seo: {
    title: "Conejo Valley Family Counseling | Therapists in Newbury Park, CA",
    description:
      "Compassionate, specialized therapy for individuals, couples, and families in Newbury Park, CA. Online and in-person sessions available.",
    keywords: [
      "therapists in Newbury Park CA",
      "family counseling Newbury Park",
      "Thousand Oaks therapist",
      "counseling Camarillo CA",
    ],
  },

  hero: {
    eyebrow: "Therapists in Newbury Park, CA",
    heading: "We’re here to help *you* find solid ground again.",
    description:
      "Discover a transformative therapy experience with our dedicated, specialized therapists.",
    cta: { label: "Book an Appointment", href: "/#book" },
    image: {
      src: "/images/original/hero.jpg",
      alt: "Parents laughing with their two children on a sofa at home",
    },
  },

  empathy: {
    id: "about",
    heading: "It seems like nobody else understands what you’re going through.",
    eyebrow:
      "You could be here as a parent, a spouse, or simply someone trying to navigate the things life has thrown your way.",
    paragraph:
      "We know how draining it can feel to untangle your own emotions while meeting everyone else’s needs. Our experience and empathetic approach help clients feel safe and understood—whatever they carry into the room.",
  },

  fullBleed: {
    image: {
      src: "/images/original/band.jpg",
      alt: "A father and child holding hands while running along an overcast beach",
    },
    caption: "This isn’t the whole story. We’re here to help you write the next chapter.",
  },

  approach: {
    id: "approach",
    eyebrow: "Our Approach",
    heading:
      "We believe real change starts with understanding yourself, but we know that’s not enough—you need to know *how* to make that change happen.",
  },

  whereWeComeIn: {
    image: {
      src: "/images/original/family-beach.jpg",
      alt: "A family of four walking barefoot along the shoreline",
    },
    imageSide: "left",
    eyebrow: "That’s where we come in.",
    paragraphs: [
      "We’re here to listen, honor what you’ve been through, and help you make sense of your experiences—without judgment or a preset agenda. Opening up can feel vulnerable, especially if you’re used to handling everything alone. This is a place where you can show up exactly as you are, knowing you’ll be met with care.",
      "Our goal goes beyond insight: we want to equip you with practical skills you can use in daily life. We expect you to show up ready to reflect and engage, because we believe growth happens through consistency, both in and out of sessions.",
    ],
  },

  tackle: {
    image: {
      src: "/images/original/ocean.jpg",
      alt: "Soft waves washing over pale sand",
    },
    imageSide: "right",
    bleed: "right",
    heading:
      "Together, we’ll tackle the specific challenges you’re facing—conflict in your relationships, stress at work, or feeling disconnected from yourself or others.",
    paragraphs: [
      "No one else has lived your life, so we take time to understand your experience not just as therapists, but as people who genuinely care. You don’t need to have it all figured out—you just need to be ready to take the first steps. When everything else feels unsteady, we hope to be a place of safety and stability in your life.",
    ],
    cta: { label: "Schedule Now", href: "/#book" },
  },

  team: {
    id: "team",
    heading: "Meet the Team",
    description:
      "Learn about our therapists and find the right fit for you and your family.",
    members: [
      { name: "Jennifer Anderson", image: { src: "/images/original/team-1.jpg", alt: "Portrait of Jennifer Anderson" } },
      { name: "Heather Williams-Baumgart", image: { src: "/images/original/team-2.jpg", alt: "Portrait of Heather Williams-Baumgart" } },
      { name: "Autumn Bodily", image: { src: "/images/original/team-3.jpg", alt: "Portrait of Autumn Bodily" } },
      { name: "Michaella Gorospe", image: { src: "/images/original/team-4.jpg", alt: "Portrait of Michaella Gorospe" } },
      { name: "Samantha Johnson", image: { src: "/images/original/team-5.jpg", alt: "Portrait of Samantha Johnson" } },
      { name: "Chad Flores", image: { src: "/images/original/team-6.jpg", alt: "Portrait of Chad Flores" } },
      // TODO: add portraits for Candace Bletscher, Andrea Watkins, Rosa Gomez
    ],
  },

  values: {
    id: "specialties",
    items: [
      {
        title: "Expertise.",
        body: "We’ve spent years honing our skills, and we never stop learning—from training, from research, and from our clients. Every session deepens our understanding of what truly helps people, and we pass those practical tools on to you.",
      },
      {
        title: "Understanding.",
        body: "Your story is your own, and we honor that. Whether it’s your relationships, your work, or the way you move through the world, we take time to really listen—because your experience is unique, and the way you’re supported should be too.",
      },
      {
        title: "Transformation.",
        body: "True change doesn’t happen overnight, but it does happen with commitment and consistency. We work alongside you to create real, tangible shifts—not just in how you feel, but in how you live.",
      },
    ],
  },

  // NOTE: these method descriptions are original plain-language summaries.
  methods: {
    id: "methods",
    heading: "Some of the *methods* we use",
    items: [
      {
        title: "Somatic Therapy",
        body: "A body-centered approach that helps you notice and release stress held physically, building a stronger sense of calm and safety.",
      },
      {
        title: "Eye Movement Desensitization & Reprocessing (EMDR)",
        body: "A structured therapy that helps the brain reprocess difficult memories so they feel less overwhelming over time.",
      },
      {
        title: "Emotionally Focused Therapy (EFT)",
        body: "Focused on attachment and emotional bonds, EFT helps partners and families understand each other and respond in new ways.",
      },
      {
        title: "Internal Family Systems Informed",
        body: "Explores the different “parts” of you—like the inner critic or the caretaker—to build compassion and internal balance.",
      },
      {
        title: "Cognitive Behavioral Therapy (CBT)",
        body: "Practical, goal-oriented work that helps you notice unhelpful thought patterns and change how they shape your day.",
      },
      {
        title: "Dialectical Behavioral Therapy (DBT)",
        body: "Skills-based therapy for managing intense emotions, with tools for mindfulness, distress tolerance, and healthier relationships.",
      },
      {
        title: "Brainspotting",
        body: "An attuned, body-based technique that locates where difficult experiences are held and supports deep processing.",
      },
    ],
  },

  founder: {
    // Paraphrased — replace with the exact founder quote from the reference site if required.
    image: { src: "/images/original/founder.jpg", alt: "Portrait of the practice founder smiling outdoors" },
    heading: "A *note* from our founder",
    quote:
      "Starting this practice in 2014 and watching it grow has been one of the great privileges of my life. Therapy changed my own life, and that experience fuels my passion for helping others heal and find hope. We all carry our own stories—and it’s an honor to walk alongside people as they reclaim theirs.",
    attribution: "Jennifer Anderson, LMFT",
  },

  booking: {
    id: "book",
    image: {
      src: "/images/original/booking.jpg",
      alt: "Two friends sitting on a driftwood log outdoors, looking at a phone together",
    },
    eyebrow: "Book an Appointment",
    heading: "It’s time to close the gap between the life you want and the life you’re *living*.",
    note: "Sessions available for you both online and in-person based in Newbury Park.",
    cta: { label: "Book Now", href: "mailto:info@conejovalleycounseling.com" },
  },

  // NOTE: the "Our Office" section is intentionally absent from the original variant —
  // it is a NEW section required only in the redesign.

  faqs: {
    heading: "Frequently Asked Questions",
    items: [
      {
        title: "How do I get started?",
        body: "Reach out by email or phone using the contact details in the footer. We’ll answer your questions and help match you with the right therapist.",
      },
      {
        title: "Do you offer online sessions?",
        body: "Yes—virtual appointments are available to clients anywhere in California, in addition to in-person sessions in Newbury Park.",
      },
      {
        title: "How long does a session last?",
        body: "Most sessions run about 50 minutes. Your therapist will confirm the details with you when you book.",
      },
      {
        title: "What does therapy cost?",
        body: "Rates vary by therapist. Contact us for current fees and to discuss insurance or sliding-scale options.",
      },
      {
        title: "Is what I share confidential?",
        body: "Yes. Sessions are confidential within the legal and ethical guidelines that govern licensed therapy. Your therapist will review these with you in your first session.",
      },
    ],
  },

  footer: {
    about:
      "We want to make getting started simple. You’re welcome to come into our office in Newbury Park or schedule virtual appointments from anywhere in CA—whatever works best for you.",
    navigateHeading: "Navigate",
    teamHeading: "Our Team",
    teamNames: [
      "Jennifer Anderson",
      "Heather Williams-Baumgart",
      "Autumn Bodily",
      "Michaella Gorospe",
      "Candace Bletscher",
      "Samantha Johnson",
      "Andrea Watkins",
      "Rosa Gomez",
      "Chad Flores",
    ],
    contactHeading: "Contact",
    addressLines: ["925 Broadbeck Dr", "Suites 200 and 226", "Newbury Park, CA 91320"],
    email: "info@conejovalleycounseling.com",
    phone: "805.242.3120",
    servingNote: "Serving Thousand Oaks, Westlake Village, Camarillo, Moorpark, & Simi Valley",
    legal: "Terms | Privacy Policy | Disclaimer | Clone built for an internship assignment — demo only",
  },
};

export default original;
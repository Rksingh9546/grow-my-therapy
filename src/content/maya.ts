import type { SiteContent } from "./types";


/**
 * VARIANT 2 — Redesign for Dr. Maya Reynolds.
 *
 * Confirmed details supplied for this assignment:
 * - Dr. Maya Reynolds, PsyD
 * - Licensed Clinical Psychologist (Fictional Therapist)
 * - Office: 123th Street 45 W, Santa Monica, CA 90401
 *
 * Replace remaining [placeholders] with information from the profile document.
 * Do not invent qualifications, specialties, methods, or contact details.
 */
const maya: SiteContent = {
  theme: "maya",

  brand: {
    name: "Dr. Maya Reynolds, PsyD",
    tagline: "Licensed Clinical Psychologist",
  },

  nav: {
    links: [
      { label: "About", href: "/#about" },
      { label: "Dr. Reynolds", href: "/#team" },
      { label: "Services", href: "/#specialties" },
      { label: "Methods", href: "/#methods" },
      { label: "FAQs", href: "/faqs" },
    ],
    cta: { label: "Contact", href: "/#book" },
  },

  seo: {
    title:
      "Dr. Maya Reynolds, PsyD | Clinical Psychologist in Santa Monica, CA",
    description:
      "Learn about Dr. Maya Reynolds, PsyD, a fictional licensed clinical psychologist based in Santa Monica, California.",
    keywords: [
      "clinical psychologist Santa Monica CA",
      "Dr. Maya Reynolds PsyD",
      "psychologist Santa Monica California",
    ],
  },

  hero: {
    eyebrow: "Licensed Clinical Psychologist in Santa Monica, CA",
    heading: "A calmer, clearer path back to *yourself*.",
    description:
      "Explore the practice of Dr. Maya Reynolds, PsyD, a fictional licensed clinical psychologist in Santa Monica, California.",
    cta: { label: "Contact the Practice", href: "/#book" },
    image: {
      src: "/images/maya/hero.jpg",
      alt: "Therapy office",
    },
  },

  empathy: {
    id: "about",
    heading: "You don’t have to carry it all by *yourself*.",
    eyebrow:
      "Feeling stuck, overwhelmed, or simply ready for something to change?",
    paragraph:
      "Reaching out is often the hardest step. In our work together you’ll find a steady, judgment-free space to make sense of what you’re feeling—and practical support to help you find your way forward.",
  },

  fullBleed: {
    image: {
      src: "/images/maya/band.jpg",
      alt: "A calm, wide landscape",
    },
    caption:
      "Your story isn’t finished. Let’s write the next chapter *together*.",
  },

  approach: {
    id: "approach",
    eyebrow: "My Approach",
    heading:
      "Real change starts with understanding yourself—and knowing *how* to turn that understanding into action.",
  },

  whereWeComeIn: {
    image: {
      src: "/images/maya/session.jpg",
      alt: "A welcoming therapy space",
    },
    imageSide: "left",
    eyebrow: "That’s where I come in.",
    paragraphs: [
      "I’m here to listen—to honor what you’ve been through and help you make sense of it, without judgment or a preset agenda. This is a space where you can show up exactly as you are.",
      "Beyond insight, my goal is to give you practical tools you can use between sessions. Growth comes from consistency, both in and out of the room.",
    ],
  },

  tackle: {
    image: {
      src: "/images/maya/band.jpg",
      alt: "A calming landscape",
    },
    imageSide: "right",
    bleed: "right",
    heading:
      "Together, we’ll tackle the specific challenges you’re facing—at your own *pace*.",
    paragraphs: [
      "No one else has lived your life, so I take time to understand your experience as a person first, not just a set of symptoms. You don’t need to have it all figured out—you just need to be ready to take the first step.",
    ],
    cta: { label: "Schedule Now", href: "/#book" },
  },

  team: {
  id: "team",
  heading: "About Dr. Maya Reynolds, PsyD",
  description:
    "Dr. Maya Reynolds is a licensed clinical psychologist in Santa Monica, California, offering in-person therapy and secure telehealth sessions for adults experiencing anxiety, stress, trauma, and burnout.",
  bio: [
    "I’m a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel exhausted, stuck in overthinking, or emotionally on edge.",

    "My work often focuses on anxiety, panic, trauma, and burnout. Clients frequently come to me feeling “functional” on the outside while quietly struggling with constant worry, tension in their body, difficulty sleeping, or a sense that they’re always bracing for something to go wrong. Others are navigating the impact of earlier life experiences that continue to affect their relationships, confidence, or sense of safety.",

    "I take a warm, collaborative, and grounded approach to therapy. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth. I integrate evidence-based methods such as cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques to help clients understand both the emotional and physiological sides of what they’re experiencing.",

    "Trauma work is an important part of my practice. I work with adults who have experienced single-incident trauma as well as more complex, long-standing patterns that may stem from childhood, relationships, or chronic stress. My approach is paced carefully, with an emphasis on safety, stabilization, and helping clients feel more regulated in their daily lives—not just during sessions.",

    "In addition to trauma and anxiety, I frequently support clients dealing with professional burnout, perfectionism, and high internal pressure. Many are entrepreneurs, creatives, or professionals who feel disconnected from themselves after years of pushing through stress. Therapy can become a space to slow down, reconnect, and develop more sustainable ways of living and working.",

    "I offer both in-person therapy from my Santa Monica office and secure telehealth sessions for clients located in California. My office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. Clients often share that the space itself helps them feel more at ease when they arrive.",

    "I believe therapy works best when clients feel respected, understood, and actively involved in the process. My goal is not just symptom relief, but helping clients develop insight, resilience, and a stronger relationship with themselves over time.",

    "If you’re looking for a therapist who combines practical tools with depth-oriented work—and who understands the realities of living and working in a fast-paced environment—I may be a good fit.",
  ],
  members: [
    {
      name: "Dr. Maya Reynolds",
      role: "PsyD · Licensed Clinical Psychologist",
      image: {
        src: "/images/maya/portrait.png",
        alt: "Portrait of Dr. Maya Reynolds",
      },
    },
  ],
},

  values: {
    id: "values",
    items: [
      {
        title: "Expertise.",
        body:
          "I care deeply about this work and never stop learning—from training, from research, and from my clients. Every session deepens the practical tools I can share with you.",
      },
      {
        title: "Understanding.",
        body:
          "Your story is your own, and I honor that. Whether it’s your relationships, your work, or the way you move through the world, I take time to really listen—because the way you’re supported should fit you.",
      },
      {
        title: "Transformation.",
        body:
          "Real change doesn’t happen overnight, but it does happen with commitment and consistency. Together we’ll build a stronger foundation, find your footing, and move forward with clarity and confidence.",
      },
    ],
  },

  services: {
  id: "specialties",
  eyebrow: "Specialties",
  heading: "Therapy Services",
  description:
    "Therapy for adults navigating anxiety, panic, trauma, and burnout. Support is shaped around each person’s experiences, needs, and pace.",
  items: [
    {
      title: "Anxiety & Panic",
      body:
        "Support for adults experiencing persistent worry, panic, overthinking, body tension, or feeling constantly on edge. Therapy can help you better understand these experiences and develop practical ways to respond.",
    },
    {
      title: "Trauma & Past Experiences",
      body:
        "Support for adults affected by single-incident trauma or longer-standing experiences connected to childhood, relationships, or chronic stress. The work is paced carefully, with attention to safety, stabilization, and feeling more regulated in daily life.",
    },
    {
      title: "Burnout & Perfectionism",
      body:
        "Support for adults dealing with professional burnout, perfectionism, and high internal pressure—including entrepreneurs, creatives, and professionals who feel disconnected from themselves after prolonged stress.",
    },
  ],
},

  methods: {
  id: "methods",
  heading: "Some of the *methods* I use",
  items: [
    {
      title: "Cognitive-Behavioral Therapy (CBT)",
      body:
        "CBT helps you notice connections between thoughts, feelings, and behaviors. It can offer practical ways to understand unhelpful patterns and respond to challenges.",
    },
    {
      title: "EMDR",
      body:
        "EMDR is one of the approaches I integrate into trauma-focused work. This work is paced carefully, with attention to safety, stabilization, and your readiness.",
    },
    {
      title: "Mindfulness-Based Practices",
      body:
        "Mindfulness practices can help you pay attention to the present moment and notice thoughts, emotions, and body sensations with greater awareness.",
    },
    {
      title: "Body-Oriented Techniques",
      body:
        "These techniques help explore how stress and emotional experiences can show up physically, such as through tension or other body sensations.",
    },
  ],
},

  founder: {
    image: {
      src: "/images/maya/portrait.png",
      alt: "Portrait of Dr. Maya Reynolds",
    },
    heading: "A *note* from Dr. Reynolds",
    quote:
      "I believe therapy works best when you feel genuinely seen and never judged. My role is to offer a steady, compassionate space where you can untangle what you’re carrying and practice new ways of moving through the world. However you arrive here, you’re welcome.",
    attribution: "Dr. Maya Reynolds, PsyD",
  },

  booking: {
    id: "book",
    image: {
      src: "/images/maya/booking.jpg",
      alt: "A calm detail from the office",
    },
    eyebrow: "Book an Appointment",
    heading:
      "It’s time to close the gap between the life you want and the life you’re *living*.",
    note: "Contact the practice for appointment availability and booking details.",
    cta: {
      label: "Contact the Practice",
      href: "/#book",
    },
  },

  office: {
  id: "office",
  heading: "Welcome to *our office*",
  description:
    "The practice offers a quiet, private office in Santa Monica. The space is designed to feel comfortable and uncluttered, with natural light.",
  images: [
    {
      src: "/images/maya/office-1.jpeg",
      alt: "Therapy office interior",
    },
    {
      src: "/images/maya/office-2.jpeg",
      alt: "Counseling space",
    },
    {
      src: "/images/maya/office-3.jpg",
      alt: "Office detail",
    },
  ],
  locationNote: "123th Street 45 W, Santa Monica, CA 90401",
  sessionNote:
    "In-person sessions are available in Santa Monica, along with secure telehealth for clients in California.",
},

faqs: {
  heading: "Frequently Asked Questions",
  items: [
    {
      title: "How do I get started?",
      body:
        "Contact the practice to ask about getting started and to discuss whether therapy with Dr. Maya Reynolds may be a good fit.",
    },
    {
      title: "Do you offer online sessions?",
      body:
        "Yes. Secure telehealth sessions are available for clients in California. In-person sessions are also available in Santa Monica.",
    },
    {
      title: "How long is a session?",
      body:
        "Session length has not been specified. Please contact the practice for details.",
    },
    {
      title: "What does therapy cost?",
      body:
        "Rates and payment information have not been specified. Please contact the practice for current details.",
    },
    {
      title: "Is what I share confidential?",
      body:
        "Confidentiality and its limits will be discussed directly with the psychologist before beginning therapy.",
    },
  ],
},

  footer: {
  about:
    "Dr. Maya Reynolds, PsyD, is a fictional licensed clinical psychologist based in Santa Monica, California.",

  navigateHeading: "Navigate",
  teamHeading: "About",
  teamNames: ["Dr. Maya Reynolds, PsyD"],

  contactHeading: "Contact",
  addressLines: [
    "123th Street 45 W",
    "Santa Monica, CA 90401",
  ],

  email: "",
  phone: "",
  servingNote:
    "In-person sessions in Santa Monica and secure telehealth for clients in California.",

  legal:
    "© 2026 Dr. Maya Reynolds, PsyD | Fictional Therapist Profile",
},
};

export default maya;
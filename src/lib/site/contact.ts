/**
 * Contact page content.
 *
 * Layout and colour are code (components/site/ContactPage); the copy lives
 * here and merges with the Contact page's `sections.contact` from the CMS.
 */
import { mergeContent } from "./merge";

export type ContactContent = {
  hero: {
    title: string;
    lede: string;
    ctaLabel: string;
    ctaHref: string;
    /** The mocked assistant conversation beside the hero copy. */
    chat: {
      title: string;
      status: string;
      messages: { from: "customer" | "assistant"; text: string }[];
      placeholder: string;
    };
  };

  details: {
    title: string;
    /** `href` empty renders the value as plain text (the support-hours card). */
    cards: { eyebrow: string; value: string; href: string; body: string }[];
  };

  marquee: { label: string };

  channels: {
    title: string;
    intro: string;
    items: { title: string; meta: string; body: string }[];
  };
};

export const CONTACT_DEFAULTS: ContactContent = {
  hero: {
    title: "We answer, fast",
    lede: "Chat with our AI assistant the moment a question comes up, ask for a human agent whenever you want one, or reach the team by email and phone. Card and fraud issues always jump the queue.",
    ctaLabel: "Start a live chat",
    ctaHref: "#channels",
    chat: {
      title: "SPay Assistant",
      status: "Online",
      messages: [
        { from: "customer", text: "My card was declined at checkout. Why?" },
        {
          from: "assistant",
          text: "Your balance covers the amount, but the merchant is in a blocked category. Try another card there — nothing was charged.",
        },
        { from: "customer", text: "Can I speak to someone?" },
        {
          from: "assistant",
          text: "Connecting you to a human agent now. Average wait: under 3 minutes.",
        },
      ],
      placeholder: "Type your message…",
    },
  },

  details: {
    title: "Reach the team directly",
    cards: [
      {
        eyebrow: "Email support",
        value: "support@spay.finance",
        href: "mailto:support@spay.finance",
        body: "For account, card, and transaction issues. Replies within 24 hours on business days.",
      },
      {
        eyebrow: "Phone support",
        value: "+971 55 947 6972",
        href: "tel:+971559476972",
        body: "Speak to a live agent for urgent card or fraud issues. Available during support hours.",
      },
      {
        eyebrow: "Support hours",
        value: "Mon – Fri",
        href: "",
        body: "9:00 AM – 6:00 PM GST. Closed on UAE public holidays.",
      },
    ],
  },

  marquee: { label: "Get yours today." },

  channels: {
    title: "Support in the app",
    intro:
      "Live chat sits in the bottom corner of every screen in the SPay app. Start with the assistant, hand over to a person whenever you need to.",
    items: [
      {
        title: "AI assistant",
        meta: "Instant, 24/7",
        body: "Ask about balances, limits, fees or a declined payment. The assistant answers inside the app and can walk you through fixes step by step.",
      },
      {
        title: "Talk to a human",
        meta: "Mon – Fri, support hours",
        body: "Not resolved by the assistant? Ask for an agent in the same chat window. Your history carries over, so nothing needs repeating.",
      },
      {
        title: "Urgent card issues",
        meta: "Freeze first, then call",
        body: "Freeze the card in the app immediately, then call +971 55 947 6972 so we can review the transactions with you.",
      },
    ],
  },
};

export function resolveContact(raw: unknown): ContactContent {
  const sections = raw as Record<string, unknown> | null | undefined;
  return mergeContent(CONTACT_DEFAULTS, sections?.contact);
}

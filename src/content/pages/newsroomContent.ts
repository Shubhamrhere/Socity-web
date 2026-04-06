import type { PageContent } from "@/content/types"

export const newsroomPage: PageContent = {
  label: "NEWSROOM",
  title: "Updates, stories, and perspectives from Socity.",
  subtitle:
    "This is where we share what we are building, how we are thinking, and why it matters.",
  blocks: [
    {
      heading: "Announcements",
      body: [
        "Official updates live here.",
        "Product updates, partnerships, and platform changes are explained clearly and directly.",
      ],
    },
    {
      heading: "Product Updates",
      bullets: [
        "Why a change was made",
        "What problem it addresses",
        "How it affects members and community leaders",
        "Clarity over frequency",
      ],
    },
    {
      heading: "Stories",
      bullets: [
        "Community leadership",
        "Belonging in a digital world",
        "Lessons from real communities",
        "How people gather around shared purpose",
      ],
    },
    {
      heading: "Press & Media",
      body: [
        "For press inquiries, interviews, and background information, our team can provide context and insights.",
      ],
      bullets: [
        "Company overview",
        "Mission and principles",
        "Founder statement",
      ],
    },
    {
      heading: "Social Presence",
      body: [
        "We use social platforms selectively. They support broader conversations, but official updates and long-form context are published here first.",
      ],
      bullets: ["Instagram", "LinkedIn", "X (Twitter)"],
    },
  ],
}

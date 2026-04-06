import type { PageContent } from "@/content/types"

export const resourcesPage: PageContent = {
  label: "RESOURCES",
  title: "Frequently asked questions and practical guidance.",
  subtitle:
    "Socity is a Community-as-a-Service platform for discovering, joining, and building intentional communities.",
  blocks: [
    {
      heading: "FAQ",
      bullets: [
        "Socity helps like-minded people discover and build purpose-driven communities.",
        "It is built for students, professionals, creators, builders, and leaders.",
        "Unlike social media, it prioritizes people, purpose, and participation.",
        "It supports both online interaction and offline engagement.",
        "Exploring and joining communities is free.",
      ],
    },
    {
      heading: "How We Connect Like-Minded People",
      bullets: ["Shared interests", "Ambitions", "Values", "Long-term goals"],
      body: [
        "Connections are intentional, relevant, and growth-oriented. This is purposeful community building, not casual networking.",
      ],
    },
    {
      heading: "Building a Community on Socity",
      bullets: [
        "Tools to create and manage communities",
        "Membership controls and moderation options",
        "Spaces for focused discussions and events",
        "Support for culture, structure, and long-term engagement",
      ],
    },
    {
      heading: "Safety, Trust & Moderation",
      bullets: [
        "User accountability and verification mechanisms",
        "Clearly defined community standards",
        "Reporting and moderation tools",
        "Strict action against harassment, hate, and misuse",
      ],
    },
  ],
}

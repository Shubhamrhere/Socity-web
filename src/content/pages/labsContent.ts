import type { PageContent } from "@/content/types"

export const labsPage: PageContent = {
  label: "LABS",
  title: "Exploring how communities work.",
  subtitle:
    "Socity Labs studies healthy community dynamics and turns those insights into product decisions.",
  blocks: [
    {
      heading: "Socity Labs",
      body: [
        "We spend time understanding why some communities last while others fade.",
        "Labs is not about shipping quickly. It is about learning carefully.",
      ],
      bullets: [
        "How leadership styles affect participation",
        "What creates trust at scale",
        "How online and offline interaction reinforce each other",
      ],
    },
    {
      heading: "Areas of Exploration",
      bullets: [
        "Community discovery and matching",
        "Trust, moderation, and reputation systems",
        "Sustainable models for community leadership",
        "Measuring community health without reducing it to numbers",
      ],
    },
    {
      heading: "Built With Intention",
      body: [
        "We test with small groups, listen closely, and iterate slowly.",
        "Ideas move from Labs into product only after proving useful in real behavior.",
      ],
    },
  ],
}

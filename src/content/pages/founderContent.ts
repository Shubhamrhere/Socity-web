import type { PageContent } from "@/content/types"

export const founderPage: PageContent = {
  label: "FOUNDER'S STATEMENT",
  title: "A note on why Socity exists.",
  subtitle:
    "Socity began with a question: why is it easy to join groups, but hard to feel part of something that lasts?",
  blocks: [
    {
      heading: "Why We Started",
      body: [
        "Many communities form around learning, building, and shared interests, then lose momentum.",
        "Not because people do not care, but because sustaining community requires clarity and ongoing effort.",
      ],
    },
    {
      heading: "What We Are Trying to Build",
      body: [
        "Socity treats communities as environments worth designing for carefully.",
      ],
      bullets: [
        "Make purpose-driven communities easier to find",
        "Respect the effort of community leaders",
        "Stay out of the way of genuine connection",
      ],
    },
    {
      heading: "How We Think About Growth",
      body: ["Growth is not just numbers."],
      bullets: [
        "Communities remain clear as they expand",
        "New members understand what they are joining",
        "Leaders feel supported rather than stretched thin",
      ],
    },
  ],
}

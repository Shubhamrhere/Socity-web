import type { PageContent } from "@/content/types"

export const legalPage: PageContent = {
  label: "LEGAL",
  title: "Clear standards for responsible participation.",
  subtitle:
    "Socity protects members, supports leaders, and maintains respectful communities through clear policies.",
  blocks: [
    {
      heading: "Terms of Service",
      bullets: [
        "Use the platform responsibly and lawfully",
        "Respect members and community guidelines",
        "No harassment, spam, or harmful conduct",
        "Accounts may be suspended for violations",
      ],
    },
    {
      heading: "Privacy Policy",
      body: ["Socity does not sell personal data."],
      bullets: [
        "Enable account creation and access",
        "Improve community discovery and relevance",
        "Enhance platform functionality and security",
      ],
    },
    {
      heading: "Community Guidelines",
      bullets: [
        "Engage respectfully and professionally",
        "Communicate honestly",
        "Contribute constructively",
        "No hate speech, discrimination, harassment, or abuse",
        "No fake identities or exploitative activity",
      ],
    },
    {
      heading: "Content Responsibility",
      body: [
        "Users retain responsibility for their content. Community leaders are expected to set clear rules and maintain healthy discussions.",
      ],
    },
    {
      heading: "Intellectual Property",
      body: [
        "Socity branding and proprietary content are protected by law.",
        "Users retain ownership of their content while granting Socity a limited license to display it on platform.",
      ],
    },
    {
      heading: "Contact & Support",
      body: ["Email: support@socity.app"],
    },
  ],
}

export type ContentBlock = {
  heading: string
  body?: string[]
  bullets?: string[]
}

export type PageContent = {
  label: string
  title: string
  subtitle: string
  blocks: ContentBlock[]
}

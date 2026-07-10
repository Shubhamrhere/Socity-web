"use client"

import type { ContentBlock } from "@/content/types"
import { motion } from "framer-motion"

type SectionHeaderProps = {
  label: string
  title: string
  subtitle: string
}

function SectionHeader({ label, title, subtitle }: SectionHeaderProps) {
  return (
    <section data-nav-theme="dark" className="w-full min-h-[70vh] bg-[#0f1113] text-white px-6 md:px-12 py-24 md:py-32 flex items-end">
      <motion.div
        className="max-w-5xl"
        initial={{ y: 24, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <motion.p className="text-sm md:text-base text-gray-300 mb-5" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          {label}
        </motion.p>
        <motion.h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight max-w-4xl" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.16, duration: 0.6 }}>
          {title}
        </motion.h1>
        <motion.p className="mt-7 text-gray-200 text-base md:text-lg max-w-3xl leading-relaxed" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.22, duration: 0.55 }}>
          {subtitle}
        </motion.p>
      </motion.div>
    </section>
  )
}

type ContentBlockCardProps = {
  block: ContentBlock
  index: number
}

function ContentBlockCard({ block, index }: ContentBlockCardProps) {
  return (
    <motion.article
      className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-200"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.52, delay: index * 0.06, ease: "easeOut" }}
    >
      <h2 className="font-serif text-2xl md:text-3xl leading-tight text-gray-900">{block.heading}</h2>

      {block.body?.map((paragraph, paragraphIndex) => (
        <p key={paragraphIndex} className="mt-4 text-gray-700 leading-relaxed text-base md:text-lg">
          {paragraph}
        </p>
      ))}

      {block.bullets && block.bullets.length > 0 ? (
        <ul className="mt-5 space-y-2 text-gray-700 text-base md:text-lg">
          {block.bullets.map((bullet, bulletIndex) => (
            <li key={bulletIndex} className="flex gap-3">
              <span className="text-purple-700">•</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </motion.article>
  )
}

type StructuredRoutePageProps = {
  label: string
  title: string
  subtitle: string
  blocks: ContentBlock[]
}

export default function StructuredRoutePage({
  label,
  title,
  subtitle,
  blocks,
}: StructuredRoutePageProps) {
  return (
    <motion.main className="w-full bg-[#f7f7f7] text-[#111]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      <SectionHeader label={label} title={title} subtitle={subtitle} />
      <section data-nav-theme="light" className="px-6 md:px-12 py-16 md:py-20">
        <div className="max-w-6xl mx-auto space-y-10">
          {blocks.map((block, index) => (
            <ContentBlockCard key={index} block={block} index={index} />
          ))}
        </div>
      </section>
    </motion.main>
  )
}
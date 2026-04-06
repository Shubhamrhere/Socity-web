"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"

const testimonials = [
  {
    text: "Strong communities change how people learn new skills, stay consistent with habits, and feel less isolated.",
    author: "Why It Matters"
  },
  {
    text: "The impact of a community is not measured by size, but by how often people show up with intent.",
    author: "Meaningful Outcomes"
  },
  {
    text: "Socity is building durable infrastructure for communities that evolve as people and goals change.",
    author: "Long-Term View"
  }
]

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0)

  // auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section data-nav-theme="dark" className="w-full bg-[#111111] h-screen text-white py-20 px-6 md:px-12">
      
      <motion.div
        className="max-w-6xl mx-auto flex flex-col"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        
        {/* Heading */}
        <p className="text-gray-400 text-sm md:text-base mb-10">
          Impact
        </p>

        {/* Carousel */}
        <div className="relative overflow-hidden min-h-[260px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="w-full flex flex-col"
            >
              <span className="text-5xl md:text-6xl text-gray-500 mb-6">“</span>

              <h2 className="font-serif leading-tight 
                text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-4xl">
                {testimonials[index].text}
              </h2>

              <p className="mt-8 text-gray-400 text-sm md:text-base">
                {testimonials[index].author}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Progress Lines */}
        <div className="flex gap-4 mt-12">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`h-0.5 flex-1 transition-all duration-500 ${
                i === index ? "bg-white" : "bg-gray-700"
              }`}
            />
          ))}
        </div>

        <Link
          href="/impact"
          className="mt-8 w-fit px-6 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition"
        >
          Read impact details
        </Link>

      </motion.div>
    </section>
  )
}
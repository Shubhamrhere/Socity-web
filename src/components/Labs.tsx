"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.6, ease: "easeOut" },
}

export default function Labs() {
  return (
    <section data-nav-theme="light" className="w-full h-screen bg-[#f7f7f7] py-16 md:py-24 px-6 md:px-12">
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">
        
        {/* LEFT: IMAGE */}
        <motion.div
          className="relative w-full md:w-1/2 h-75 sm:h-100 md:h-125 rounded-2xl overflow-hidden"
          initial={{ opacity: 0, x: -30, scale: 0.98 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <Image
            src="/labs.jpeg"
            alt="People talking"
            fill
            className="object-cover"
          />

          {/* subtle gradient */}
          <div className="absolute inset-0 bg-gradient-to from-white/40 via-transparent to-transparent" />
        </motion.div>

        {/* RIGHT: CONTENT */}
        <motion.div {...reveal} transition={{ duration: 0.6, delay: 0.12 }} className="w-full md:w-1/2 flex flex-col justify-center">
          
          <p className="text-purple-700 text-sm md:text-base mb-4">
            For Community Leaders
          </p>

          <h2 className="font-serif font-semibold leading-tight 
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900">
            A home for people
            <br />
            who bring others together.
          </h2>

          <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed max-w-lg">
            Starting a community is easy. Sustaining one is not. Socity helps
            leaders bring member management, sessions, events, and clear purpose
            into one place so the focus stays on people and culture.
          </p>

          <motion.div {...reveal} transition={{ duration: 0.55, delay: 0.18 }} className="mt-6 w-fit">
            <Link
            href="/mission"
            className="mt-6 w-fit px-6 py-3 bg-black text-white rounded-full hover:opacity-90 transition"
            >
              Explore our mission
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
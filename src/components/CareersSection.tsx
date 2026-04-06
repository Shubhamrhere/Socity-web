"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function CareersSection() {
  return (
    <section data-nav-theme="light" className="w-full bg-[#f7f6f4] h-screen py-20 px-6 md:px-16">
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
        
        {/* LEFT */}
        <motion.div
          className="flex flex-col flex-1 max-w-lg"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-sm text-purple-500 mb-5">
            Communities shape how we grow
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight text-black mb-6">
            Join a community <br />
            or start your own
          </h1>

          <p className="text-gray-600 text-base md:text-lg mb-8">
            Socity helps people gather around shared purpose through thoughtful,
            intentional, and sustainable communities.
          </p>

          <motion.div className="flex items-center gap-4" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.55, delay: 0.12 }}>
            <Link href="/resources" className="bg-black text-white px-6 py-3 rounded-full w-fit hover:opacity-90 transition">
              Join a community
            </Link>
            <Link href="/mission" className="border border-black text-black px-6 py-3 rounded-full w-fit hover:bg-black hover:text-white transition">
              Start your own
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className="flex flex-1 justify-center gap-4"
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          
          {/* Image 1 */}
          <motion.div className="flex-1 max-w-50 rounded-xl overflow-hidden" whileInView={{ y: [20, 0] }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.05 }}>
            <img
              src="/img1.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Image 2 (lower) */}
          <motion.div className="flex-1 max-w-50 rounded-xl overflow-hidden translate-y-6" whileInView={{ y: [30, 24] }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.12 }}>
            <img
              src="/img2.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Image 3 (upper) */}
          <motion.div className="flex-1 max-w-50 rounded-xl overflow-hidden -translate-y-4" whileInView={{ y: [8, -16] }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.18 }}>
            <img
              src="/img3.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </motion.div>

        </motion.div>

      </div>
    </section>
  )
}
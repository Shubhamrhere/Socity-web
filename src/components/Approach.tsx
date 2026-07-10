"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
}

export default function Approach() {
  return (
    <section data-nav-theme="light" className="w-full h-screen bg-[#f7f7f7] py-16 md:py-24 px-6 md:px-12">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        
        {/* LEFT SIDE */}
        <motion.div {...fadeUp}>
          <motion.p {...fadeUp} transition={{ duration: 0.5 }} className="text-purple-700 text-sm md:text-base mb-6">
            For Members
          </motion.p>

          <motion.h2 {...fadeUp} transition={{ duration: 0.65, delay: 0.08 }} className="font-serif font-semibold leading-tight 
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900">
            
            Find communities{" "}
            <span className="relative inline-block">
              that fit
              
              {/* Circle SVG */}
              <svg
                className="absolute -top-2 -left-2 w-[120%] h-[120%]"
                viewBox="0 0 200 80"
                fill="none"
              >
                <ellipse
                  cx="100"
                  cy="40"
                  rx="95"
                  ry="30"
                  stroke="#6b2c5f"
                  strokeWidth="3"
                />
              </svg>
            </span>{" "}
            <br />
            your purpose.
          </motion.h2>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.12 }} className="flex flex-col justify-end h-full mt-4 md:mt-16">
          
          {/* Arrow (optional image) */}
          <motion.div className="mb-6" whileInView={{ rotate: [0, -8, 0], opacity: [0, 1, 1] }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }}>
            {/* <Image
              src="/arrow.jpeg" // optional, or remove
              alt="arrow"
              width={60}
              height={60}
            /> */}
          </motion.div>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-md">
            Joining communities should not mean random links, inactive chats, and
            no clear purpose. Socity helps members discover communities through
            shared interests, goals, commitment level, and real activity.
          </p>

          <motion.div {...fadeUp} transition={{ duration: 0.55, delay: 0.16 }} className="mt-6 w-fit">
            <Link
            href="/resources"
            className="mt-6 w-fit px-6 py-3 bg-black text-white rounded-full hover:opacity-90 transition"
            >
              Learn how discovery works
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
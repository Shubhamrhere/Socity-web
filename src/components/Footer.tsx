"use client"

import Link from "next/link"
import { Twitter, Instagram, Globe, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <motion.footer
      data-nav-theme="dark"
      className="w-full bg-[#0f1113] text-gray-300 px-6 md:px-16 py-16"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
    >

      <div className="max-w-7xl mx-auto flex flex-col gap-16">

        {/* Top Divider */}
        <div className="w-full h-px bg-gray-700" />

        {/* Main Footer */}
        <motion.div className="flex flex-col lg:flex-row justify-between gap-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}>

          {/* Logo */}
          <motion.div className="flex flex-col justify-between min-h-[200px]" initial={{ y: 18, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}>
            <h1 className="text-white text-3xl font-semibold">SOCITY</h1>

            <div className="flex items-center gap-6 text-sm text-gray-400">
              <p>© 2026 Socity</p>

              <div className="flex items-center gap-2">
                <Globe size={16} />
                <span>English (UK)</span>
              </div>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div className="flex flex-wrap gap-16" initial={{ y: 18, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}>

            {/* Index */}
            <div className="flex flex-col gap-4">
              <h4 className="text-gray-400 text-sm">Index</h4>

              <div className="flex flex-col gap-3 text-white">
                <Link href="/mission" className="hover:text-gray-300">Mission</Link>
                <Link href="/impact" className="hover:text-gray-300">Impact</Link>
                <Link href="/labs" className="hover:text-gray-300">Labs</Link>
                <Link href="/newsroom" className="hover:text-gray-300">Newsroom</Link>
                <Link href="/founder-statement" className="hover:text-gray-300">Founder Statement</Link>
                <Link href="/resources" className="hover:text-gray-300">Resources</Link>

                <div className="flex flex-col gap-3 pt-2">
                  <a href="mailto:support@socity.site" className="flex items-center gap-2 hover:text-gray-300 text-sm">
                    <Mail size={16} />
                    <span>support@socity.site</span>
                  </a>
                  <div className="flex items-center gap-4 text-gray-400">
                    <a href="https://www.instagram.com/socity.india?igsh=eHZ5cnRxNnM0YzY1" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                      <Instagram size={18} />
                    </a>
                    <a href="https://www.linkedin.com/company/socity-india/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Resources */}
            <div className="flex flex-col gap-4">
              <h4 className="text-gray-400 text-sm">Resources</h4>

              <div className="flex flex-col gap-3 text-white">
                <Link href="/resources" className="hover:text-gray-300">FAQ</Link>
                <Link href="/resources" className="hover:text-gray-300">How We Connect Like-Minded People</Link>
                <Link href="/resources" className="hover:text-gray-300">Safety, Trust & Moderation</Link>
                <Link href="/newsroom" className="hover:text-gray-300">Press Resources</Link>
                <Link href="/mission" className="hover:text-gray-300">Community as a Service</Link>
              </div>
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-4">
              <h4 className="text-gray-400 text-sm">Legal</h4>

              <div className="flex flex-col gap-3 text-white">
                <Link href="/legal" className="hover:text-gray-300">Terms of Service</Link>
                <Link href="/legal" className="hover:text-gray-300">Privacy Policy</Link>
                <Link href="/legal" className="hover:text-gray-300">Community Guidelines</Link>
                <Link href="/legal" className="hover:text-gray-300">Content Responsibility</Link>
                <Link href="/legal" className="hover:text-gray-300">Intellectual Property</Link>
              </div>
            </div>

          </motion.div>

        </motion.div>

      </div>
    </motion.footer>
  )
}
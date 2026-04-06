"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

type NavbarTheme = "transparent" | "light" | "dark"

export default function Navbar() {
  const pathname = usePathname()
  const [theme, setTheme] = useState<NavbarTheme>(pathname === "/" ? "transparent" : "dark")

  useEffect(() => {
    const resolveTheme = () => {
      const probeY = 90
      const candidate = document.elementFromPoint(window.innerWidth / 2, probeY)
      const section = candidate?.closest("[data-nav-theme]")
      const nextTheme = section?.getAttribute("data-nav-theme") as NavbarTheme | null
      setTheme(nextTheme ?? "dark")
    }

    resolveTheme()
    window.addEventListener("scroll", resolveTheme, { passive: true })
    window.addEventListener("resize", resolveTheme)

    return () => {
      window.removeEventListener("scroll", resolveTheme)
      window.removeEventListener("resize", resolveTheme)
    }
  }, [pathname])

  const navClassByTheme: Record<NavbarTheme, string> = {
    transparent: "bg-transparent text-white",
    light: "bg-[#f7f7f7]/95 text-[#111111] border-b border-gray-200",
    dark: "bg-[#0f1113]/95 text-white",
  }

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-30 flex items-center justify-between px-6 md:px-12 py-6 transition-colors duration-300 ${navClassByTheme[theme]}`}
    >
      <motion.div className="hidden md:flex gap-8 text-sm font-medium" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
        <Link href="/mission" className="cursor-pointer hover:opacity-80">Mission</Link>
        <Link href="/impact" className="cursor-pointer hover:opacity-80">Impact</Link>
        <Link href="/labs" className="cursor-pointer hover:opacity-80">Labs</Link>
      </motion.div>

      <motion.div className="text-xl md:text-2xl font-semibold" initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.15 }}>
        <Link href="/">SOCITY</Link>
      </motion.div>

      <motion.div className="hidden md:flex gap-8 text-sm font-medium" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        <Link href="/newsroom" className="cursor-pointer hover:opacity-80">Newsroom</Link>
        <Link href="/founder-statement" className="cursor-pointer hover:opacity-80">Founder</Link>
        <Link href="/resources" className="cursor-pointer hover:opacity-80">Resources</Link>
      </motion.div>
    </motion.nav>
  )
}
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

type NavbarTheme = "transparent" | "light" | "dark"

type NavLink = {
  label: string
  href: string
}

type NavbarProps = {
  logo?: string
  leftLinks?: NavLink[]
  rightLinks?: NavLink[]
}

const DEFAULT_LEFT_LINKS: NavLink[] = [
  { label: "Mission", href: "/mission" },
  { label: "Impact", href: "/impact" },
  { label: "Labs", href: "/labs" },
]

const DEFAULT_RIGHT_LINKS: NavLink[] = [
  { label: "Newsroom", href: "/newsroom" },
  { label: "Founder", href: "/founder-statement" },
  { label: "Resources", href: "/resources" },
]

export default function Navbar({
  logo = "SOCITY",
  leftLinks = DEFAULT_LEFT_LINKS,
  rightLinks = DEFAULT_RIGHT_LINKS,
}: NavbarProps) {
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
        {leftLinks.map((link) => (
          <Link key={link.href} href={link.href} className="cursor-pointer hover:opacity-80">
            {link.label}
          </Link>
        ))}
      </motion.div>

      <motion.div className="text-xl md:text-2xl font-semibold" initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.15 }}>
        <Link href="/">{logo}</Link>
      </motion.div>

      <motion.div className="hidden md:flex gap-8 text-sm font-medium" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        {rightLinks.map((link) => (
          <Link key={link.href} href={link.href} className="cursor-pointer hover:opacity-80">
            {link.label}
          </Link>
        ))}
      </motion.div>
    </motion.nav>
  )
}
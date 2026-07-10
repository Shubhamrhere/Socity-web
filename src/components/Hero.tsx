"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section data-nav-theme="transparent" className="relative w-full h-screen min-h-150">
      
      {/* Background Image */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08, opacity: 0.7 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Image
          src="/Hero.jpeg" // put your image in public folder
          alt="People in a community"
          fill
          priority
          className="object-cover"
        />
        
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-end px-6 md:px-12 pb-16 md:pb-24">
        
        <motion.h1
          initial={{ y: 32, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.7, ease: "easeOut" }}
          className="text-white font-serif font-bold leading-tight 
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-xl">
          
          What Socity Is? <br />
          Belonging, built with intention.
        </motion.h1>

      </div>
    </section>
  )
}
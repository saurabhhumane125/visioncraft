"use client"

import { motion } from "framer-motion"

const MARQUEE_ITEMS = [
  "The Bombay Studio",
  "Nexa Constructors",
  "Aura Medical Clinics",
  "Malabar Estates",
  "Kochi Design Co.",
  "Zeta Tech Solutions",
  "The Urban Roast",
  "Prime Smiles Dental",
  "Aurum Luxury Jewels",
  "Studio Vastu",
]

export function TrustedMarquee() {
  return (
    <div className="bg-neutral-950 py-10 md:py-16 border-y border-neutral-100/10 overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-neutral-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-neutral-950 to-transparent z-10 pointer-events-none" />
      
      <div className="flex flex-col items-center justify-center w-full">
        <span className="text-[10px] text-neutral-100/40 uppercase tracking-[0.3em] font-mono mb-8 md:mb-12">
          Transforming Digital Experiences For
        </span>
        
        <div className="flex w-full overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 35,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {/* Duplicated for seamless loop */}
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center mx-6 md:mx-12"
              >
                <span className="font-display text-xl md:text-3xl font-bold text-neutral-100/20 uppercase tracking-widest hover:text-neutral-100/60 transition-colors duration-500 cursor-default">
                  {item}
                </span>
                <span className="text-electric/40 mx-6 md:mx-12 text-2xl font-serif italic">
                  *
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

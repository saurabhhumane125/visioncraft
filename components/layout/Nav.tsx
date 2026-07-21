"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const NAV_LINKS = [
  { href: "/#services", label: "Services" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/#process", label: "Process" },
  { href: "/#testimonials", label: "Testimonials" },
]

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(totalHeight > 0 ? window.scrollY / totalHeight : 0)
      setIsScrolled(window.scrollY > 60)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  return (
    <>
      {/* Top bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
            ? "bg-neutral-950/95 backdrop-blur-md"
            : "bg-transparent"
          }`}
      >
        <div className="w-full px-6 md:px-12 lg:px-16 flex items-center justify-between h-20 md:h-24">
          <Link

            href="/"
            className="font-display text-2xl md:text-3xl font-bold tracking-tight text-neutral-100 z-[60]"
          >
            VisionCraft Studio
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-neutral-100 z-[60] hover:text-electric transition-colors flex items-center justify-center p-2 -mr-2"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Scroll progress line */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-neutral-100/5">
          <motion.div
            className="h-full bg-electric origin-left"
            style={{ scaleX: scrollProgress }}
          />
        </div>
      </header>

      {/* Full-screen overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.77, 0, 0.175, 1] }}
            className="fixed inset-0 z-[55] bg-neutral-950 flex flex-col"
          >
            {/* Grain texture */}
            <div className="absolute inset-0 grain pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full mx-auto max-w-[1440px] px-5 md:px-10 lg:px-16 pt-24 md:pt-32">
              {/* Navigation links */}
              <nav className="flex-1 flex flex-col justify-center" role="navigation" aria-label="Main navigation">
                {NAV_LINKS.map((link, idx) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.15 + idx * 0.08,
                      ease: [0.77, 0, 0.175, 1],
                    }}
                    className="border-b border-neutral-100/10"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center justify-between py-5 md:py-7"
                    >
                      <span className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-neutral-100 tracking-tight transition-colors duration-300 group-hover:text-electric">
                        {link.label}
                      </span>
                      <span className="text-electric text-sm font-mono opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                        0{idx + 1}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Footer area */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="pb-8 md:pb-12 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6"
              >
                <div>
                  <p className="text-neutral-100/40 text-xs uppercase tracking-widest mb-2">
                    Get in touch
                  </p>
                  <a
                    href="mailto:visioncraftstudio22@gmail.com"
                    className="text-neutral-100 text-sm md:text-base link-underline hover:text-electric transition-colors"
                  >
                    visioncraftstudio22@gmail.com
                  </a>
                </div>
                <div className="flex gap-6 text-sm text-neutral-100/60">
                  <a href="#" className="hover:text-electric transition-colors">Instagram</a>
                  <a href="#" className="hover:text-electric transition-colors">LinkedIn</a>
                  <a href="#" className="hover:text-electric transition-colors">Twitter</a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

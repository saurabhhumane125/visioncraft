"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

const PROJECTS = [
  {
    id: 1,
    name: "Azure Residences",
    category: "3D Visualization · Architecture",
    image: "/images/portfolio-villa.png",
  },
  {
    id: 2,
    name: "The Urban Roast",
    category: "Brand Identity · Packaging",
    image: "/images/portfolio-restaurant.png",
  },
  {
    id: 3,
    name: "Prime Smiles",
    category: "Web Design · Healthcare",
    image: "/images/portfolio-dental.png",
  },
  {
    id: 4,
    name: "Cafe Connect",
    category: "Social Campaign · Marketing",
    image: "/images/portfolio-cafe.png",
  },
  {
    id: 5,
    name: "Aurum Jewels",
    category: "Ecommerce · Web & Photography",
    image: "/images/portfolio-jewelry.png",
  },
]

export function Portfolio() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  // We'll adjust the translation to -55% to perfectly align the last card with the edge of the screen and eliminate empty space.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"])

  return (
    <section
      ref={targetRef}
      id="portfolio"
      className="relative bg-white h-[250vh]" // Reduced from 400vh to eliminate extra space
      aria-label="Portfolio"
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden pt-20">
        {/* Section header */}
        <div className="mx-auto max-w-[1440px] w-full px-5 md:px-10 lg:px-16 flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <span className="text-electric text-sm font-mono tracking-widest mb-3 block">
              02
            </span>
            <h2
              className="font-display font-bold tracking-tight text-neutral-950 leading-[1.05]"
              style={{ fontSize: "var(--text-display)" }}
            >
              Selected
              <br />
              Work
            </h2>
          </div>
          <a
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-neutral-950/60 hover:text-electric transition-colors link-underline mt-6 sm:mt-0 pb-1 font-medium"
          >
            View All Projects
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Framer-Motion driven horizontal gallery */}
        <div className="flex pl-5 md:pl-10 lg:pl-16 relative">
          <motion.div style={{ x }} className="flex gap-8 md:gap-12 w-max">
            {PROJECTS.map((project, idx) => (
              <div
                key={project.id}
                className="w-[85vw] sm:w-[500px] lg:w-[600px] shrink-0 group flex flex-col"
              >
                {/* Fixed aspect ratio card container */}
                <div
                  className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100 shadow-[0_4px_24px_rgba(0,0,0,0.03)]"
                >
                  <Image
                    src={project.image}
                    alt={`${project.name} — ${project.category}`}
                    fill
                    sizes="(max-width: 768px) 85vw, 600px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle dark overlay for premium feel */}
                  <div className="absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/5 transition-colors duration-500 pointer-events-none" />
                </div>

                {/* Info */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mt-5 gap-2 px-2">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-neutral-950 tracking-tight transition-colors duration-300">
                    {project.name}
                  </h3>
                  <span className="text-xs text-neutral-950/40 uppercase tracking-widest font-bold">
                    {project.category}
                  </span>
                </div>
              </div>
            ))}
            
            {/* End padding to ensure last item is fully visible */}
            <div className="w-[10vw] shrink-0" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}


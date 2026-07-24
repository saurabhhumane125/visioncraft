"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

type Project = {
  id: number
  name: string
  category: string
  image: string
  link?: string
}

const PROJECTS: Project[] = [
  {
    id: 1,
    name: "Odo The Gaming Bay",
    category: "Web Design · Gaming",
    image: "/images/nexgen-gaming.png",
    link: "https://nexgen-gaming.vercel.app/",
  },
  {
    id: 2,
    name: "Let's Smile Dental",
    category: "Web Design · Healthcare",
    image: "/images/lets-smile-dental.png",
    link: "https://lets-smile-dental.vercel.app/",
  },
  {
    id: 3,
    name: "Raman Humane",
    category: "2D Plan With Furniture",
    image: "/images/portfolio-architecture.png",
    link: "/documents/raman-humane-2d-plan.pdf",
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
            {PROJECTS.map((project, idx) => {
              const CardContent = (
                <>
                  <Image
                    src={project.image}
                    alt={`${project.name} — ${project.category}`}
                    fill
                    sizes="(max-width: 768px) 85vw, 600px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle dark overlay for premium feel */}
                  <div className={`absolute inset-0 transition-all duration-500 flex items-center justify-center ${project.link ? 'bg-neutral-950/0 group-hover:bg-neutral-950/30' : 'bg-neutral-950/0 group-hover:bg-neutral-950/5 pointer-events-none'}`}>
                    {project.link && (
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white text-neutral-950 px-6 py-3 rounded-full font-bold text-sm tracking-wide shadow-xl">
                        Visit Live Site
                      </span>
                    )}
                  </div>
                </>
              )

              return (
              <div
                key={project.id}
                className="w-[85vw] sm:w-[500px] lg:w-[600px] shrink-0 group flex flex-col"
              >
                {/* Fixed aspect ratio card container */}
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100 shadow-[0_4px_24px_rgba(0,0,0,0.03)] cursor-pointer block">
                    {CardContent}
                  </a>
                ) : (
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100 shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
                    {CardContent}
                  </div>
                )}

                {/* Info */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mt-5 gap-2 px-2">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-neutral-950 tracking-tight transition-colors duration-300 group-hover:text-electric">
                    {project.name}
                  </h3>
                  <span className="text-xs text-neutral-950/40 uppercase tracking-widest font-bold">
                    {project.category}
                  </span>
                </div>
              </div>
            )})}
            
            {/* End padding to ensure last item is fully visible */}
            <div className="w-[10vw] shrink-0" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}


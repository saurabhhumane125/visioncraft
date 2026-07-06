"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const STEPS = [
  {
    num: "01",
    title: "Brief & Scope",
    desc: "We align on your goals, requirements, and project constraints. Every project begins with a deep understanding of your brand.",
  },
  {
    num: "02",
    title: "Design & Draft",
    desc: "Initial concepts and structural drafts across web, design, or video. You see the direction before we commit to production.",
  },
  {
    num: "03",
    title: "Review & Refine",
    desc: "Iterative feedback loops to ensure the output matches your vision. We don't settle until every detail is right.",
  },
  {
    num: "04",
    title: "Deliver & Support",
    desc: "Final handover of all assets, source files, and post-launch support. The relationship doesn't end at delivery.",
  },
]

export function Process() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 50%"],
  })

  // Timeline line height grows as user scrolls
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section
      ref={sectionRef}
      id="process"
      className="bg-neutral-200 text-neutral-950 relative overflow-hidden"
      style={{
        paddingTop: "var(--space-section-normal)",
        paddingBottom: "var(--space-section-generous)",
      }}
      aria-label="Process"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-16">
        {/* Section header */}
        <div className="mb-20 md:mb-32">
          <span className="text-electric text-sm font-mono tracking-widest mb-4 block">
            04
          </span>
          <h2
            className="font-display font-bold tracking-tight leading-[1.05]"
            style={{ fontSize: "var(--text-display)" }}
          >
            How We
            <br />
            Work
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline track */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[2px] bg-neutral-950/10">
            <motion.div
              className="w-full bg-electric origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Steps */}
          <div className="flex flex-col">
            {STEPS.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                  ease: [0.77, 0, 0.175, 1],
                }}
                className="relative pl-16 md:pl-24 lg:pl-32"
                style={{
                  paddingBottom:
                    idx === STEPS.length - 1
                      ? "0"
                      : `clamp(80px, ${8 + idx * 2}vw, ${120 + idx * 20}px)`,
                }}
              >
                {/* Dot on timeline */}
                <div
                  className={`absolute left-[10px] md:left-[26px] top-2 w-3 h-3 rounded-full border-2 ${
                    idx === STEPS.length - 1
                      ? "border-mars bg-mars"
                      : "border-electric bg-neutral-200"
                  }`}
                />

                {/* Step number */}
                <span
                  className={`font-display font-bold tracking-tight block mb-2 ${
                    idx === STEPS.length - 1
                      ? "text-mars"
                      : "text-electric"
                  }`}
                  style={{
                    fontSize: `clamp(3rem, ${5 + idx * 0.5}vw, ${4 + idx * 0.5}rem)`,
                  }}
                >
                  {step.num}
                </span>

                {/* Title */}
                <h3
                  className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-3"
                  style={{
                    marginLeft: `${idx * 8}px`,
                  }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  className="text-neutral-950/60 text-sm md:text-base leading-relaxed max-w-md"
                  style={{
                    marginLeft: `${idx * 8}px`,
                  }}
                >
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

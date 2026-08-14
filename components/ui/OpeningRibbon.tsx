"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, Variants } from "framer-motion"

type RibbonState = "closed" | "cutting" | "opening" | "completed"

export function OpeningRibbon() {
  const [ribbonState, setRibbonState] = useState<RibbonState>("closed")
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (ribbonState === "cutting") {
      // Very quick cut effect before opening
      const timer = setTimeout(() => {
        setRibbonState("opening")
      }, 300)
      return () => clearTimeout(timer)
    }

    if (ribbonState === "opening") {
      // 6s for the pieces to drift and fade out, then complete
      const timer = setTimeout(() => {
        setRibbonState("completed")
      }, 6000)
      return () => clearTimeout(timer)
    }
  }, [ribbonState])

  if (!mounted || ribbonState === "completed") return null

  const handleInteraction = () => {
    if (ribbonState === "closed") {
      setRibbonState("cutting")
    }
  }

  // Animation variants for the left and right halves
  const leftHalfVariants: Variants = {
    closed: {
      x: 0,
      y: 0,
      rotate: 0,
      opacity: 1,
    },
    cutting: {
      x: -5,
      y: 2,
      rotate: -1,
      opacity: 1,
    },
    opening: {
      x: "-100vw",
      y: "30vh",
      rotate: -15,
      opacity: 0,
      transition: {
        duration: 5,
        ease: [0.25, 1, 0.5, 1], // Decelerate smoothly
        opacity: { duration: 4, delay: 1 }, // Stay visible for a bit before fading
      },
    },
  }

  const rightHalfVariants: Variants = {
    closed: {
      x: 0,
      y: 0,
      rotate: 0,
      opacity: 1,
    },
    cutting: {
      x: 5,
      y: 2,
      rotate: 1,
      opacity: 1,
    },
    opening: {
      x: "100vw",
      y: "30vh",
      rotate: 15,
      opacity: 0,
      transition: {
        duration: 5,
        ease: [0.25, 1, 0.5, 1],
        opacity: { duration: 4, delay: 1 },
      },
    },
  }

  // Premium 3D Satin Ribbon styles
  const ribbonGradients = {
    base: "linear-gradient(to bottom, #5a000b 0%, #a6091b 15%, #E0364A 35%, #FF6B73 50%, #E0364A 65%, #a6091b 85%, #5a000b 100%)",
    shadow: "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 80%, rgba(0,0,0,0.8) 100%)",
    shadowRight: "linear-gradient(270deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 80%, rgba(0,0,0,0.8) 100%)",
    goldTrimTop: "linear-gradient(90deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)",
    goldTrimBottom: "linear-gradient(90deg, #AA771C, #FBF5B7, #B38728, #FCF6BA, #BF953F)",
  }

  return (
    <div
      className="fixed inset-0 z-[9999] pointer-events-none flex items-center justify-center overflow-hidden"
      aria-hidden="true"
    >
      {/* Dark overlay backdrop that fades out */}
      <AnimatePresence>
        {(ribbonState === "closed" || ribbonState === "cutting") && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-black/60 pointer-events-auto"
          />
        )}
      </AnimatePresence>

      <div className="relative w-full h-[12vh] sm:h-[15vh] max-h-[120px] pointer-events-auto cursor-pointer" onClick={handleInteraction}>
        {/* Hover / Hint effect */}
        {ribbonState === "closed" && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0, 1, 0], scale: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/10 blur-2xl rounded-full z-0 pointer-events-none"
          />
        )}

        {/* LEFT HALF */}
        <motion.div
          variants={leftHalfVariants}
          initial="closed"
          animate={ribbonState}
          className="absolute left-0 top-0 bottom-0 w-1/2 origin-top-right shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
          style={{ background: ribbonGradients.base }}
        >
          {/* Gold Trims */}
          <div className="absolute top-0 left-0 right-0 h-1" style={{ background: ribbonGradients.goldTrimTop, opacity: 0.8 }} />
          <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: ribbonGradients.goldTrimBottom, opacity: 0.8 }} />

          {/* Inner shadow/fold for realism near the cut */}
          <div className="absolute inset-y-0 right-0 w-48 pointer-events-none mix-blend-multiply" style={{ background: ribbonGradients.shadow }} />
          
          {/* Left half of the bow */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[15%] z-10">
            <div className="relative">
              {/* Back Loop Shadow */}
              <div className="absolute inset-0 bg-black/40 blur-md rounded-full translate-y-4 -translate-x-2" />
              
              {/* Main Bow Loop */}
              <div 
                className="relative w-20 sm:w-32 h-24 sm:h-36 rounded-l-[100px] rounded-r-2xl border-y-[12px] border-l-[16px] border-r-[4px] overflow-hidden"
                style={{ 
                  borderColor: "transparent", // Use box-shadow for a seamless 3D edge
                  background: "linear-gradient(135deg, #FF8A93 0%, #d31027 60%, #5a000b 100%)",
                  boxShadow: "inset -15px 0 30px rgba(0,0,0,0.7), inset 5px 10px 15px rgba(255,255,255,0.4), -5px 15px 25px rgba(0,0,0,0.6)"
                }}
              >
                {/* Inner dark void of the loop */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3/4 h-2/3 bg-black/60 rounded-l-[50px] blur-[2px] shadow-[inset_10px_0_20px_rgba(0,0,0,1)]" />
              </div>

              {/* Bow Tail */}
              <div 
                className="absolute top-[80%] right-4 w-16 sm:w-20 h-32 sm:h-48 origin-top-right -rotate-[20deg]"
                style={{
                  background: "linear-gradient(180deg, #a6091b 0%, #FF6B73 20%, #E0364A 60%, #5a000b 100%)",
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 85%, 0 100%)",
                  boxShadow: "-10px 15px 25px rgba(0,0,0,0.5)"
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT HALF */}
        <motion.div
          variants={rightHalfVariants}
          initial="closed"
          animate={ribbonState}
          className="absolute right-0 top-0 bottom-0 w-1/2 origin-top-left shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
          style={{ background: ribbonGradients.base }}
        >
          {/* Gold Trims */}
          <div className="absolute top-0 left-0 right-0 h-1" style={{ background: ribbonGradients.goldTrimTop, opacity: 0.8 }} />
          <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: ribbonGradients.goldTrimBottom, opacity: 0.8 }} />

          {/* Inner shadow/fold for realism near the cut */}
          <div className="absolute inset-y-0 left-0 w-48 pointer-events-none mix-blend-multiply" style={{ background: ribbonGradients.shadowRight }} />
          
          {/* Right half of the bow */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[15%] z-10">
            <div className="relative">
              {/* Back Loop Shadow */}
              <div className="absolute inset-0 bg-black/40 blur-md rounded-full translate-y-4 translate-x-2" />

              {/* Main Bow Loop */}
              <div 
                className="relative w-20 sm:w-32 h-24 sm:h-36 rounded-r-[100px] rounded-l-2xl border-y-[12px] border-r-[16px] border-l-[4px] overflow-hidden"
                style={{ 
                  borderColor: "transparent",
                  background: "linear-gradient(225deg, #FF8A93 0%, #d31027 60%, #5a000b 100%)",
                  boxShadow: "inset 15px 0 30px rgba(0,0,0,0.7), inset -5px 10px 15px rgba(255,255,255,0.4), 5px 15px 25px rgba(0,0,0,0.6)"
                }}
              >
                {/* Inner dark void of the loop */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3/4 h-2/3 bg-black/60 rounded-r-[50px] blur-[2px] shadow-[inset_-10px_0_20px_rgba(0,0,0,1)]" />
              </div>

              {/* Center Knot (attached to the right side so it splits cleanly) */}
              <div 
                className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-12 sm:w-16 h-14 sm:h-20 rounded-2xl z-20"
                style={{
                  background: "linear-gradient(135deg, #FF8A93 0%, #d31027 40%, #5a000b 100%)",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.6), inset 0 5px 10px rgba(255,255,255,0.5), inset 0 -5px 15px rgba(0,0,0,0.8)"
                }}
              />

              {/* Bow Tail */}
              <div 
                className="absolute top-[80%] left-4 w-16 sm:w-20 h-32 sm:h-48 origin-top-left rotate-[20deg] z-0"
                style={{
                  background: "linear-gradient(180deg, #a6091b 0%, #FF6B73 20%, #E0364A 60%, #5a000b 100%)",
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 85%, 0 100%)",
                  boxShadow: "10px 15px 25px rgba(0,0,0,0.5)"
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-black/20" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* The Spark / Cut Flash */}
        <AnimatePresence>
          {ribbonState === "cutting" && (
            <motion.div
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 3, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full mix-blend-overlay blur-md z-20 pointer-events-none"
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

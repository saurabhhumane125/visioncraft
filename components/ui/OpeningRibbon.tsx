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

  // Premium bright Satin Ribbon styles
  const ribbonGradients = {
    base: "linear-gradient(to bottom, #E0364A 0%, #FF4D5A 20%, #FF6B73 50%, #FF4D5A 80%, #E0364A 100%)",
    shadow: "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(224,54,74,0.3) 80%, rgba(224,54,74,0.6) 100%)",
    shadowRight: "linear-gradient(270deg, rgba(0,0,0,0) 0%, rgba(224,54,74,0.3) 80%, rgba(224,54,74,0.6) 100%)",
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
          className="absolute left-0 top-0 bottom-0 w-1/2 origin-top-right shadow-[0_20px_40px_rgba(224,54,74,0.4)]"
          style={{ background: ribbonGradients.base }}
        >
          {/* Inner fold highlight/shadow */}
          <div className="absolute inset-y-0 right-0 w-32 pointer-events-none mix-blend-multiply" style={{ background: ribbonGradients.shadow }} />
          
          {/* Left half of the bow */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[10%] z-10">
            <div className="relative">
              
              {/* Main Bow Loop - Elegant & Bright */}
              <div 
                className="relative w-20 sm:w-28 h-20 sm:h-28 rounded-l-[100px] rounded-r-xl border-y-[8px] border-l-[12px] border-r-[2px] overflow-hidden"
                style={{ 
                  borderColor: "transparent",
                  background: "linear-gradient(135deg, #FF8A93 0%, #E0364A 60%, #b81e30 100%)",
                  boxShadow: "inset -10px 0 20px rgba(184,30,48,0.7), inset 5px 5px 15px rgba(255,255,255,0.5), -5px 10px 20px rgba(0,0,0,0.3)"
                }}
              />

              {/* Bow Tail */}
              <div 
                className="absolute top-[80%] right-2 w-12 sm:w-16 h-24 sm:h-32 origin-top-right -rotate-[15deg]"
                style={{
                  background: "linear-gradient(180deg, #b81e30 0%, #FF6B73 20%, #E0364A 60%, #9e1424 100%)",
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 85%, 0 100%)",
                  boxShadow: "-5px 10px 15px rgba(0,0,0,0.3)"
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* RIGHT HALF */}
        <motion.div
          variants={rightHalfVariants}
          initial="closed"
          animate={ribbonState}
          className="absolute right-0 top-0 bottom-0 w-1/2 origin-top-left shadow-[0_20px_40px_rgba(224,54,74,0.4)]"
          style={{ background: ribbonGradients.base }}
        >
          {/* Inner fold highlight/shadow */}
          <div className="absolute inset-y-0 left-0 w-32 pointer-events-none mix-blend-multiply" style={{ background: ribbonGradients.shadowRight }} />
          
          {/* Right half of the bow */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[10%] z-10">
            <div className="relative">

              {/* Main Bow Loop - Elegant & Bright */}
              <div 
                className="relative w-20 sm:w-28 h-20 sm:h-28 rounded-r-[100px] rounded-l-xl border-y-[8px] border-r-[12px] border-l-[2px] overflow-hidden"
                style={{ 
                  borderColor: "transparent",
                  background: "linear-gradient(225deg, #FF8A93 0%, #E0364A 60%, #b81e30 100%)",
                  boxShadow: "inset 10px 0 20px rgba(184,30,48,0.7), inset -5px 5px 15px rgba(255,255,255,0.5), 5px 10px 20px rgba(0,0,0,0.3)"
                }}
              />

              {/* Center Knot */}
              <div 
                className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-10 sm:w-14 h-12 sm:h-16 rounded-xl z-20"
                style={{
                  background: "linear-gradient(135deg, #FF8A93 0%, #E0364A 40%, #b81e30 100%)",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.4), inset 0 3px 8px rgba(255,255,255,0.6), inset 0 -3px 10px rgba(184,30,48,0.8)"
                }}
              />

              {/* Bow Tail */}
              <div 
                className="absolute top-[80%] left-2 w-12 sm:w-16 h-24 sm:h-32 origin-top-left rotate-[15deg] z-0"
                style={{
                  background: "linear-gradient(180deg, #b81e30 0%, #FF6B73 20%, #E0364A 60%, #9e1424 100%)",
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 85%, 0 100%)",
                  boxShadow: "5px 10px 15px rgba(0,0,0,0.3)"
                }}
              />
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

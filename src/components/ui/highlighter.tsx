"use client"
import type React from "react"
import { useInView } from "motion/react"
import { annotate } from "rough-notation"
import { useLayoutEffect, useRef } from "react"
import { type RoughAnnotation } from "rough-notation/lib/model"

type AnnotationAction =
  | "highlight"
  | "underline"
  | "box"
  | "circle"
  | "strike-through"
  | "crossed-off"
  | "bracket"

interface HighlighterProps {
  children: React.ReactNode
  action?: AnnotationAction
  color?: string
  strokeWidth?: number
  animationDuration?: number
  iterations?: number
  padding?: number
  multiline?: boolean
  isView?: boolean
}

export function Highlighter({
  children,
  action = "highlight",
  color = "#ffd1dc",
  strokeWidth = 1.5,
  animationDuration = 600,
  iterations = 2,
  padding = 2,
  multiline = true,
  isView = false,
}: HighlighterProps) {
  const elementRef = useRef<HTMLSpanElement>(null)

  const isInView = useInView(elementRef, {
    once: true,
    margin: "-10%",
  })
  
  const shouldShow = !isView || isInView

  useLayoutEffect(() => {
    const element = elementRef.current
    let annotation: RoughAnnotation | null = null
    let resizeObserver: ResizeObserver | null = null

    if (shouldShow && element) {
      const annotationConfig = {
        type: action,
        color,
        strokeWidth,
        animationDuration,
        iterations,
        padding,
        multiline,
      }

      const currentAnnotation = annotate(element, annotationConfig)
      annotation = currentAnnotation
      currentAnnotation.show()

      let timeoutId: ReturnType<typeof setTimeout>
      let lastWidth = element.offsetWidth
      let lastHeight = element.offsetHeight

      resizeObserver = new ResizeObserver(() => {
        if (!element) return
        
        const newWidth = element.offsetWidth
        const newHeight = element.offsetHeight
        
        if (Math.abs(newWidth - lastWidth) > 2 || Math.abs(newHeight - lastHeight) > 2) {
          lastWidth = newWidth
          lastHeight = newHeight
          
          clearTimeout(timeoutId)
          timeoutId = setTimeout(() => {
            currentAnnotation.hide()
            currentAnnotation.show()
          }, 100)
        }
      })

      resizeObserver.observe(element)
      if (document.fonts) {
        document.fonts.ready.then(() => {
          if (element) {
            lastWidth = element.offsetWidth
            lastHeight = element.offsetHeight
            currentAnnotation.hide()
            currentAnnotation.show()
          }
        })
      }
    }

    return () => {
      annotation?.remove()
      if (resizeObserver) {
        resizeObserver.disconnect()
      }
    }
  }, [
    shouldShow,
    action,
    color,
    strokeWidth,
    animationDuration,
    iterations,
    padding,
    multiline,
  ])

  return (
    <span ref={elementRef} className="relative inline-flex items-center justify-center leading-none">
      {children}
    </span>
  )
}

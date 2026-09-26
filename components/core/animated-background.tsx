"use client"

import { Children, cloneElement, isValidElement, ReactElement, ReactNode, useState } from "react"
import { motion, Transition } from "motion/react"
import { cn } from "@/lib/utils"

type AnimatedBackgroundProps = {
  children: ReactNode
  defaultValue?: string
  className?: string
  transition?: Transition
  enableHover?: boolean
}

export function AnimatedBackground({
  children,
  defaultValue,
  className,
  transition,
  enableHover = false,
}: AnimatedBackgroundProps) {
  const [activeId, setActiveId] = useState<string | undefined>(defaultValue)

  return (
    <div className="relative flex flex-row items-center gap-1">
      {Children.map(children, (child) => {
        if (!isValidElement(child)) {
          return child
        }

        const item = child as ReactElement<{ "data-id"?: string; onMouseEnter?: () => void; onFocus?: () => void; className?: string }>
        const id = item.props["data-id"]
        const isActive = id && activeId === id

        return cloneElement(item, {
          onMouseEnter: () => {
            if (enableHover) {
              setActiveId(id)
            }
            item.props.onMouseEnter?.()
          },
          onFocus: () => {
            if (enableHover) {
              setActiveId(id)
            }
            item.props.onFocus?.()
          },
          className: cn("relative z-10", item.props.className),
          children: (
            <>
              {isActive ? (
                <motion.span
                  layoutId="navbar-animated-background"
                  className={cn("absolute inset-0 -z-10", className)}
                  transition={transition}
                />
              ) : null}
              {item.props.children}
            </>
          ),
        })
      })}
    </div>
  )
}

import React from "react";
import { IconType } from "react-icons";



import { cn } from "@/lib/utils";



import { DotPattern } from "../widgets";


type IconPlacement = "topLeft" | "topRight" | "bottomLeft" | "bottomRight"

type CardCustomProps = {
  children: React.ReactNode
  className?: string
  classNameIcon?: string
  classNameContent?: string
  icon?: IconType 
  iconSize?: number
  iconPlacement?: IconPlacement
} & React.HTMLAttributes<HTMLDivElement> // biar tetep bisa nerima onClick, id, dsb.

const CardCustom = ({
  children,
  className,
  classNameContent,
  classNameIcon,
  icon: Icon,
  iconSize = 150,
  iconPlacement = "bottomRight",
  ...props
}: CardCustomProps) => {
  const containerClasses = cn(
    "relative overflow-hidden p-6 rounded-2xl border-2 bg-zinc-800",
    className,
  )

  const iconClasses = cn(
    "absolute w-max h-max z-10 opacity-5",
    {
      topLeft: "-top-2 -left-4",
      topRight: "-top-2 -right-4",
      bottomLeft: "-bottom-2 -left-4",
      bottomRight: "-bottom-2 -right-4"
    }[iconPlacement],
    
  )

  return (
    <div className={containerClasses} {...props}>
      {/* Content */}
      <div className={cn("relative z-20", classNameContent)}>{children}</div>

      {/* Decorative Icon */}
      {Icon && (
        <div className={iconClasses}>
          <Icon size={iconSize} strokeWidth={2} />
        </div>
      )}

      {/* Background pattern */}
      <DotPattern
        className={cn(
          "[-webkit-mask-image:radial-gradient(ellipse_at_bottom_right,white_10%,transparent_90%)]",
          "[mask-image:radial-gradient(ellipse_at_bottom_right,white_10%,transparent_90%)]"
        )}
      />
    </div>
  )
}

export { CardCustom }
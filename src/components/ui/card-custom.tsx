import React from "react"

import { cn } from "@/lib/utils"

import { DotPattern } from "../widgets"

type CardCustomProps = {
	color?: string
} & React.ComponentProps<"div">

const CardCustom = React.forwardRef<HTMLDivElement, CardCustomProps>(
	({ children, className, color, ...props }, ref) => {
		const classes = cn(
			"relative overflow-hidden p-6 rounded-2xl border bg-zinc-800",
			className
		)

		return (
			<div ref={ref} className={classes} {...props}>
				<span className="z-10">{children}</span>

				<DotPattern
					className={cn(
						"[-webkit-mask-image:radial-gradient(ellipse_at_bottom_right,white_10%,transparent_90%)]",
						"[mask-image:radial-gradient(ellipse_at_bottom_right,white_10%,transparent_90%)]"
					)}
				/>
			</div>
		)
	}
)

CardCustom.displayName = "CardCustom"

export { CardCustom }

"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

type PaddingProps = "py-16" | "py-20" | "py-32" | "py-44"
type ContainerProps = {
	padding?: PaddingProps
	container?: boolean
} & React.ComponentProps<"div">

export const Container = React.forwardRef<HTMLElement, ContainerProps>(
	({ children, className, container = true, padding, ...props }, ref) => {
		const classes = cn(
			"relative z-10",
			container
				? "container px-4 sm:px-14 lg:px-4"
				: "w-full mx-auto max-w-[1740px]",
			className,
			padding
		)

		return (
			<main ref={ref} className={classes} {...props}>
				{children}
			</main>
		)
	}
)

Container.displayName = "Container"

"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

type ContainerProps = React.ComponentProps<"div">

const Container = ({ children, className, ref, ...props }: ContainerProps) => {
	const classes = cn("container relative z-10", className)

	return (
		<main ref={ref} className={classes} {...props}>
			{children}
		</main>
	)
}

export { Container }

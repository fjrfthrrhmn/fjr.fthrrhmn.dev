"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

type PaddingProps = "py-16" | "py-20" | "py-32" | "py-44"
type ContainerProps = {
	padding?: PaddingProps
} & React.ComponentProps<"div">

const Container = ({ children, className, ref, ...props }: ContainerProps) => {
	const classes = cn("container relative z-10 px-4 sm:px-14 lg:px-4", className, props.padding)

	return (
		<main ref={ref} className={classes} {...props}>
			{children}
		</main>
	)
}

export { Container }

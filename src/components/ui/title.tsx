import React from "react"

import { cn } from "@/lib/utils"

import Typography from "./typography"

type TitleProps = {
	text: string
	description?: string
	variant?:
		| "1/black"
		| "1/extrabold"
		| "1/bold"
		| "2/black"
		| "2/extrabold"
		| "2/bold"
		| "3/black"
		| "3/extrabold"
		| "3/bold"
} & React.ComponentProps<"div">

export const Title = ({ ...props }: TitleProps) => {
	const {
		ref,
		className,
		text,
		title,
		description,
		variant = "3/extrabold"
	} = props
	const classes = cn("", className)

	return (
		<div ref={ref} title={title} className={classes} {...props}>
			<Typography.Title variant={variant}>{text}</Typography.Title>
			{description && (
				<div className="mt-4 max-w-xl">
					<Typography.Text>{description}</Typography.Text>
				</div>
			)}
		</div>
	)
}

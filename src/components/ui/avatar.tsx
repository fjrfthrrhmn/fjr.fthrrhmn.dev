"use client"

import * as React from "react"

import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

type AvatarProps = {
	size?: "size-8" | "size-10" | "size-12" | "size-16"
} & React.ComponentProps<typeof AvatarPrimitive.Root>

function Avatar({ className, size = "size-10", ...props }: AvatarProps) {
	return (
		<AvatarPrimitive.Root
			data-slot="avatar"
			className={cn(
				"relative flex shrink-0 overflow-hidden rounded-full border-4 border-zinc-50/15",
				size,
				className
			)}
			{...props}
		/>
	)
}

function AvatarImage({
	className,
	...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
	return (
		<AvatarPrimitive.Image
			data-slot="avatar-image"
			className={cn("aspect-square size-full", className)}
			{...props}
		/>
	)
}

function AvatarFallback({
	className,
	...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
	return (
		<AvatarPrimitive.Fallback
			data-slot="avatar-fallback"
			className={cn(
				"bg-muted flex size-full items-center justify-center rounded-full capitalize",
				className
			)}
			{...props}
		/>
	)
}

export { Avatar, AvatarImage, AvatarFallback }

"use client";

import { useRef, useState } from "react";
import { IconType } from "react-icons";
import Link from "next/link";



import { ListIcon, LucideIcon } from "lucide-react";
import { AnimatePresence, motion, MotionValue, useMotionValue, useSpring, useTransform } from "motion/react";



import { cn } from "@/lib/utils";



import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";





/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/

// TODO: Improve tooltip component to be use tooltip shadcn

interface Items {
	title: string
	icon: LucideIcon | IconType
	href?: string
	onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

// URL: https://ui.aceternity.com/components/floating-dock
export const FloatingDock = ({
	items,
	desktopClassName,
	mobileClassName
}: {
	items: Items[]
	desktopClassName?: string
	mobileClassName?: string
}) => {
	return (
		<>
			<FloatingDockDesktop items={items} className={desktopClassName} />
			<FloatingDockMobile items={items} className={mobileClassName} />
		</>
	)
}

const FloatingDockMobile = ({
	items,
	className
}: {
	items: Items[]
	className?: string
}) => {
	const [open, setOpen] = useState(false)

	return (
		<div className={cn("relative block md:hidden", className)}>
			<AnimatePresence>
				{open && (
					<motion.div
						layoutId="nav"
						className="absolute inset-x-0 bottom-full mb-2 flex flex-col gap-2"
					>
						{items.map((item, idx) => (
							<motion.div
								key={item.title}
								initial={{ opacity: 0, y: 10 }}
								animate={{
									opacity: 1,
									y: 0
								}}
								exit={{
									opacity: 0,
									y: 10,
									transition: {
										delay: idx * 0.05
									}
								}}
								transition={{ delay: (items.length - 1 - idx) * 0.05 }}
							>
								{item.href && (
									<Link
										href={item.href}
										key={item.title}
										className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 shadow-lg border"
									>
										<item.icon />
									</Link>
								)}
							</motion.div>
						))}
					</motion.div>
				)}
			</AnimatePresence>
			<button
				onClick={() => setOpen(!open)}
				className="flex h-12 w-10 items-center justify-center rounded-full bg-zinc-800 shadow-lg border"
			>
				{/* TODO change icon to be better */}
				<ListIcon />
			</button>
		</div>
	)
}

const FloatingDockDesktop = ({
	items,
	className
}: {
	items: Items[]
	className?: string
}) => {
	const mouseX = useMotionValue(Infinity)

	return (
		<motion.div
			onMouseMove={(e) => mouseX.set(e.pageX)}
			onMouseLeave={() => mouseX.set(Infinity)}
			className={cn(
				"mx-auto hidden max-h-16 p-4 items-end gap-2 rounded-3xl bg-background/25 backdrop-blur-[4px] md:flex shadow-lg border",
				className
			)}
		>
			{items.map((item) => (
				<IconContainer mouseX={mouseX} key={item.title} {...item} />
			))}
		</motion.div>
	)
}

function IconContainer({
	mouseX,
	title,
	icon: Icon,
	href,
	onClick
}: Items & { mouseX: MotionValue }) {
	const ref = useRef<HTMLDivElement>(null)

	const distance = useTransform(mouseX, (val) => {
		const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }

		return val - bounds.x - bounds.width / 2
	})

	const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40])
	const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40])

	const widthTransformIcon = useTransform(
		distance,
		[-150, 0, 150],
		[20, 40, 20]
	)
	const heightTransformIcon = useTransform(
		distance,
		[-150, 0, 150],
		[20, 40, 20]
	)

	const width = useSpring(widthTransform, {
		mass: 0.1,
		stiffness: 150,
		damping: 12
	})
	const height = useSpring(heightTransform, {
		mass: 0.1,
		stiffness: 150,
		damping: 12
	})

	const widthIcon = useSpring(widthTransformIcon, {
		mass: 0.1,
		stiffness: 150,
		damping: 12
	})
	const heightIcon = useSpring(heightTransformIcon, {
		mass: 0.1,
		stiffness: 150,
		damping: 12
	})

	const [hovered, setHovered] = useState(false)

	if (href)
		return (
			<Tooltip>
				<TooltipTrigger>
					<Link href={href} aria-label={title}>
						<motion.div
							ref={ref}
							style={{ width, height }}
							onMouseEnter={() => setHovered(true)}
							onMouseLeave={() => setHovered(false)}
							className="relative flex aspect-square items-center justify-center rounded-full bg-zinc-800 border"
						>
							<motion.div
								style={{ width: widthIcon, height: heightIcon }}
								className="flex items-center justify-center"
							>
								<Icon size={32} />
								<span className="sr-only">{title}</span>
							</motion.div>
						</motion.div>
					</Link>
				</TooltipTrigger>
				<AnimatePresence mode="wait">
					{hovered && (
						<TooltipContent>
							<motion.div
								initial={{ x: 20, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								exit={{ x: -20, opacity: 0 }}
								transition={{
									type: "spring",
									stiffness: 270
								}}
							>
								{title}
							</motion.div>
						</TooltipContent>
					)}
				</AnimatePresence>
			</Tooltip>
		)

	if (onClick)
		return (
			<Tooltip>
				<TooltipTrigger asChild name={title}>
					<button
						onClick={onClick}
						aria-label={title}
						type="button"
						role="button"
					>
						<motion.div
							ref={ref}
							style={{ width, height }}
							onMouseEnter={() => setHovered(true)}
							onMouseLeave={() => setHovered(false)}
							className="relative flex aspect-square items-center justify-center rounded-full bg-zinc-800 border"
						>
							<motion.div
								style={{ width: widthIcon, height: heightIcon }}
								className="flex items-center justify-center"
							>
								<Icon size={32} />
							</motion.div>
						</motion.div>
					</button>
				</TooltipTrigger>
				<AnimatePresence mode="wait" key={title}>
					{hovered && (
						<TooltipContent>
							<motion.div
								initial={{ x: 20, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								exit={{ x: -20, opacity: 0 }}
								transition={{
									type: "spring",
									stiffness: 270
								}}
							>
								{title}
							</motion.div>
						</TooltipContent>
					)}
				</AnimatePresence>
			</Tooltip>
		)
}
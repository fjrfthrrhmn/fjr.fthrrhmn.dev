"use client"

import { AnimatePresence, motion } from "motion/react"

import { ContentType, useSidebarStore } from "@/stores/sidebar-store"

import { DotGrid } from "@/widgets"

import { DashboardData } from "@/data/home"

const Content = () => {
	const isActive = useSidebarStore((state) => state.isActive) as ContentType
	const ActiveComponent = DashboardData[isActive]

	return (
		<div className="col-span-11">
			<AnimatePresence mode="wait">
				{ActiveComponent && (
					<motion.div key={isActive}>
						<ActiveComponent />
					</motion.div>
				)}
			</AnimatePresence>
			<DotGrid />
		</div>
	)
}

export default Content

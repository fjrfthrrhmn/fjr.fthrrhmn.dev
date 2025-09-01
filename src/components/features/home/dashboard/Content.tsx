"use client"

import { AnimatePresence, motion } from "motion/react"

import { ContentType, useSidebarStore } from "@/stores/sidebar-store"

import { DotGrid } from "@/widgets"

import { DashboardData } from "@/data/home"

// TODO Kondisi dari zustand, dapatkan data loading dari global
const Content = () => {
	const isActive = useSidebarStore((state) => state.isActive) as ContentType

	return (
		<div className="lg:col-span-11">
			
			
			<DotGrid />
		</div>
	)
}

export default Content

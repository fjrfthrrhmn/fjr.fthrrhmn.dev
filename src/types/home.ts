import React from "react"
import { IconType } from "react-icons"

export type StackBuiltProps = {
	name: string
	src: string
	url: string
	icon: IconType
	classHover: string
}

export type PhotoProps = { name: string; src: string }

export type ExperienceProps = {
	company: string
	role: string
	logo: string
	startDate: { month: string; year: number }
	endDate: { month: string; year: number } | "Present"
}

export type AboutProps = {
	name: string
	component: React.ComponentType,
	className: string
}

export type SkillProps = {
	name: string
	icon: IconType
	background: string
}

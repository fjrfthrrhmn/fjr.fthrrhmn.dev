"use client"

import dynamic from "next/dynamic"

import { ProfileGithub, StatsGithub } from "./"

const CalendarGithub = dynamic(() => import("./Calendar"), {
	ssr: false
})

const Github = ({ className }: { className?: string }) => {
	return (
		<div
			className={`grid grid-cols-6 gap-4 ${className} transition duration-200 ease-in`}
		>
			<ProfileGithub />
			<StatsGithub />
			<CalendarGithub />
		</div>
	)
}

export default Github

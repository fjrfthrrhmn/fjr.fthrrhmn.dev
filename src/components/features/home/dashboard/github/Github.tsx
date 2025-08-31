"use client"

import dynamic from "next/dynamic"

import { useGithubProfile } from "@/hooks"

import { ProfileGithub, StatsGithub } from "./"

const CalendarGithub = dynamic(() => import("./Calendar"), {
	ssr: false
})

const Github = () => {
	const { data } = useGithubProfile()

	if (!data) return null

	return (
		<div className="grid grid-cols-1 gap-4 w-full">
			<ProfileGithub {...data} />
			<StatsGithub />
			<CalendarGithub />
		</div>
	)
}

export default Github

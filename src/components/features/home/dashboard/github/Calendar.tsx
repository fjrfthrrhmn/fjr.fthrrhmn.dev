"use client"

import React from "react"
import GitHubCalendar from "react-github-calendar"

import { useGithubProfile } from "@/hooks"

import { CardCustom } from "@/components/ui"
import { GithubUtils, GithubConfig } from "../index"


const Calendar = () => {
	const { contributions, isLoading } = useGithubProfile()
	if (isLoading || !contributions) return null

	const contributionCalendar = contributions?.contributionCalendar.weeks || []
	const transformed = GithubUtils?.transformContributions(contributionCalendar)

	return (
		<CardCustom className="lg:col-span-6">
			<GitHubCalendar
				username="dummy"
				{...GithubConfig.calendarConfig}
				transformData={() => transformed}
			/>
		</CardCustom>
	)
}

export default Calendar

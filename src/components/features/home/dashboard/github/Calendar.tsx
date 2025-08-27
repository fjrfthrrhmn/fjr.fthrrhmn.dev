"use client"

import React from "react"
import dynamic from "next/dynamic"

import { useGithubProfile } from "@/hooks"

import { CardCustom } from "@/components/ui"

import { GithubConfig } from "../config"
import { GithubUtils } from "../utils"
import GitHubCalendar from "react-github-calendar"

const Calendar = () => {
	const { contributions, isLoading } = useGithubProfile()
	if (isLoading || !contributions) return null

	const contributionCalendar = contributions?.contributionCalendar.weeks || []
	const transformed = GithubUtils?.transformContributions(contributionCalendar)

	return (
		<CardCustom className="col-span-6">
			<GitHubCalendar
				username="dummy"
				{...GithubConfig.calendarConfig}
				transformData={() => transformed}
			/>
		</CardCustom>
	)
}

export default Calendar

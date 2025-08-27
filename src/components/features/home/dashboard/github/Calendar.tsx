"use client";

import React from "react";
import GitHubCalendar, { type Activity, type Props as ActivityCalendarProps } from "react-github-calendar";



import { useGithubProfile } from "@/hooks";



import { CardCustom } from "@/components/ui";





const calendarConfig: Omit<
	ActivityCalendarProps,
	"transformData" | "username"
> = {
	blockSize: 12,
	blockMargin: 5,
	fontSize: 14,
	colorScheme: "dark",
	hideTotalCount: true,
	theme: { dark: ["#373737", "#065f46", "#059669", "#34d399", "#86efac"] },
	renderBlock: (block, activity) => {
		if (!activity) return block
		const { count, date } = activity
		return React.cloneElement(block, {
			title: `${count} contributions on ${date}`
		})
	}
}

const transformContributions = (
	weeks: typeof data.contributionsCollection.contributionCalendar.weeks
): Activity[] => {
	const allDays = weeks.flatMap((week) => week.contributionDays)
	const maxCount = Math.max(...allDays.map((d) => d.contributionCount), 1)

	const getLevel = (count: number) => {
		if (count === 0) return 0
		if (count <= 0.25 * maxCount) return 1
		if (count <= 0.5 * maxCount) return 2
		if (count <= 0.75 * maxCount) return 3
		return 4
	}

	return allDays.map((day) => ({
		date: day.date,
		count: day.contributionCount,
		level: getLevel(day.contributionCount)
	}))
}

const Calendar = () => {
	const { data, isLoading } = useGithubProfile()
	if (isLoading || !data) return null

	const contributions =
		data.contributionsCollection?.contributionCalendar.weeks || []
	const transformed = transformContributions(contributions)

	return (
		<CardCustom className="col-span-6">
			<GitHubCalendar
				username="dummy"
				{...calendarConfig}
				transformData={() => transformed}
			/>
		</CardCustom>
	)
}

export default Calendar
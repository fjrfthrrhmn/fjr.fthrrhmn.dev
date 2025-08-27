import { Activity } from "react-github-calendar"

import { ContributionCalendar } from "@/types"

// ==========================
// GitHub Utils
// ==========================
export const calculateStreaks = (
	weeks: { contributionDays: { date: string; contributionCount: number }[] }[]
): { currentStreak: number; maxStreak: number } => {
	const days = weeks.flatMap((week) => week.contributionDays)
	let maxStreak = 0
	let currentStreak = 0
	let tempStreak = 0

	for (let i = 0; i < days.length; i++) {
		if (days[i].contributionCount > 0) {
			tempStreak++
			if (tempStreak > maxStreak) maxStreak = tempStreak
		} else {
			tempStreak = 0
		}
	}

	for (let i = days.length - 1; i >= 0; i--) {
		if (days[i].contributionCount > 0) currentStreak++
		else break
	}

	return { currentStreak, maxStreak }
}

export const transformContributions = (
	weeks: ContributionCalendar["weeks"]
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

export const GithubUtils = {
	calculateStreaks,
	transformContributions
}

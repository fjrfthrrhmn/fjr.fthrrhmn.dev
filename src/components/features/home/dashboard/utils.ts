import { Activity } from "react-github-calendar";



import { ContributionCalendar } from "@/types";
import { MonkeyUserType } from "@/types/monkey-types";





type Lang = "en" | "id"

// ==========================
// * GitHub Utils
// ==========================
const calculateStreaks = (
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

const transformContributions = (
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

// ==========================
// * MonkeyType Utils
// ==========================
const bestStats = (
	personalBests: MonkeyUserType["personalBests"],
	timeTyping: MonkeyUserType["typingStats"]["timeTyping"]
) => {
	let bestWPM = 0
	let bestAccuracy = 0

	const categories = [personalBests.time, personalBests.words]

	categories.forEach((group) => {
		Object.values(group).forEach((items) => {
			items.forEach(({ wpm, acc }) => {
				if (wpm > bestWPM) bestWPM = wpm
				if (acc > bestAccuracy) bestAccuracy = acc
			})
		})
	})

	return {
		bestWPM: Math.round(bestWPM),
		bestAccuracy: Math.round(bestAccuracy),
		timeTyping
	}
}

const formatTimeTyping = (seconds: number) => {
	const totalSeconds = Math.floor(seconds)
	const h = Math.floor(totalSeconds / 3600)
	const m = Math.floor((totalSeconds % 3600) / 60)
	const s = totalSeconds % 60

	return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`
}

const bgStreak: Record<number, string> = {
	5: "bg-yellow-500/20 text-yellow-400",
	10: "bg-orange-500/20 text-orange-400",
	20: "bg-red-500/20 text-red-400"
}

const getBgStreak = (streak: number): string => {
	if (streak >= 20) return bgStreak[20]
	if (streak >= 10) return bgStreak[10]
	if (streak >= 5) return bgStreak[5]
	return "bg-gray-500/20 text-gray-400"
}

export const MonkeyTypeUtils = {
	bestStats,
	formatTimeTyping,
	getBgStreak
}

// ==========================
// * Wakatime Utils
// ==========================

const formatRange = (range: string, lang: Lang = "id") => {
	const mapping: Record<Lang, Record<string, string>> = {
		en: {
			last_7_days: "Last 7 days",
			last_30_days: "Last 30 days",
			last_year: "Last year",
			all_time: "All time"
		},
		id: {
			last_7_days: "7 hari terakhir",
			last_30_days: "30 hari terakhir",
			last_year: "1 tahun terakhir",
			all_time: "Sepanjang waktu"
		}
	}

	return mapping[lang][range] || range
}

export const WakatimeUtils = {
	formatRange
}

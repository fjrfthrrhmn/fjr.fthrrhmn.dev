import { IconType } from "react-icons"

import {
	CalendarCheck2,
	Clock,
	Flame,
	FolderGit2,
	GitFork,
	Target,
	Timer,
	Zap
} from "lucide-react"

import { GithubUserType, WakatimeStatsType } from "@/types"

import { MonkeyTypeUtils } from "@/components/features/home/dashboard/utils"

import { formatDate } from "../utils"

type LANG = "en" | "id"
interface GithubStatItem {
	value: number
	label: string
	icon: IconType
}

export function GithubMapStats(
	contributions?: GithubUserType["contributionsCollection"]
): GithubStatItem[] {
	return [
		{
			value: contributions?.totalCommitContributions ?? 0,
			label: "Total Contributions",
			icon: GitFork
		},
		{
			value: contributions?.totalRepositoryContributions ?? 0,
			label: "Repository Contributions",
			icon: FolderGit2
		}
	] as { value: number; label: string; icon: IconType }[]
}

type BestStats = {
	bestWPM: number
	bestAccuracy: number
	timeTyping: number
}

export function MonkeyMapStats(
	{ bestWPM, bestAccuracy, timeTyping }: BestStats,
	lang: LANG = "en"
) {
	const labels: Record<LANG, Record<string, string>> = {
		en: {
			bestWPM: "Best WPM",
			bestAccuracy: "Best Accuracy",
			timeTyping: "Time Typing"
		},
		id: {
			bestWPM: "WPM Terbaik",
			bestAccuracy: "Akurasi Terbaik",
			timeTyping: "Waktu Mengetik"
		}
	}

	return [
		{
			label: labels[lang].bestWPM,
			value: bestWPM ?? 0,
			icon: Zap
		},
		{
			label: labels[lang].bestAccuracy,
			value: bestAccuracy ?? 0,
			icon: Target
		},
		{
			label: labels[lang].timeTyping,
			value: timeTyping ?? 0,
			formatter: MonkeyTypeUtils.formatTimeTyping,
			icon: Clock
		}
	] as {
		label: string
		value: number
		icon: IconType
		formatter?: (v: number) => string
	}[]
}

export function WakaTimeMapStats(value: WakatimeStatsType, lang: LANG = "en") {
	const labels: Record<LANG, Record<string, string>> = {
		en: {
			total: "Total This Week",
			avg: "Avg Daily Coding",
			best: "Best Day",
			all: "All-Time Coding"
		},
		id: {
			total: "Total Minggu Ini",
			avg: "Rata-rata Harian",
			best: "Hari Terbaik",
			all: "Total Sepanjang Waktu"
		}
	}

	return [
		{
			icon: Clock,
			label: labels[lang].total,
			value: value.time.total
		},
		{
			icon: Timer,
			label: labels[lang].avg,
			value: value.time.averageText
		},
		{
			icon: Flame,
			label: labels[lang].best,
			value: `${formatDate(new Date(value.bestDay.date), "d MMM yyyy")} (${value.bestDay.text})`
		},
		{
			icon: CalendarCheck2,
			label: labels[lang].all,
			value: value.allTime.text
		}
	] as {
		icon: IconType
		label: string
		value: string
	}[]
}

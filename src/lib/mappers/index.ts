import { IconType } from "react-icons";



import { Clock, ClockIcon, FolderGit2, GitFork, Target, Zap } from "lucide-react";



import { GithubUserType, WakatimeStatsType } from "@/types";



import { MonkeyTypeUtils } from "@/components/features/home/dashboard/utils";



import { formatDate } from "../utils";


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

export function MonkeyMapStats({
	bestWPM,
	bestAccuracy,
	timeTyping
}: BestStats) {
	return [
		{
			label: "Best WPM",
			value: bestWPM ?? 0,
			icon: Zap
		},
		{
			label: "Best Accuracy",
			value: bestAccuracy ?? 0,
			icon: Target
		},
		{
			label: "Time Typing",
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

export function WakaTimeMapSats({ ...value }: WakatimeStatsType) {
	return [
		// {
		// 	icon: ClockIcon,
		// 	label: "Start Date",
		// 	value: formatDate(new Date(value.time.start))
		// },
		// {
		// 	icon: ClockIcon,
		// 	label: "End Date",
		// 	value: formatDate(new Date(value.time.end))
		// },
		{
			icon: ClockIcon,
			label: "Total This Week",
			value: value.time.total
		},
		{
			icon: ClockIcon,
			label: "Average Daily Coding Time",
			value: value.time.averageText
		},
		{
			icon: ClockIcon,
			label: "Best Day",
			value: `${formatDate(new Date(value.bestDay.date), "d MMM yyyy")} (${value.bestDay.text})`
		},
		{
			icon: ClockIcon,
			label: "All-Time Coding Since Joined",
			value: value.allTime.text
		}
	]
}
import { IconType } from "react-icons"

import { GitCommit, GitFork } from "lucide-react"

import { GithubUserType } from "@/types"

import { MonkeyTypeUtils } from "@/components/features/home/dashboard/utils"

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
			icon: GitCommit
		},
		{
			value: contributions?.totalRepositoryContributions ?? 0,
			label: "Repository Contributions",
			icon: GitFork
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
			value: bestWPM ?? 0
		},
		{
			label: "Best Accuracy",
			value: bestAccuracy ?? 0
		},
		{
			label: "Time Typing",
			value: timeTyping ?? 0,
			formatter: MonkeyTypeUtils.formatTimeTyping
		}
	] as {
		label: string
		value: number
		formatter?: (v: number) => string
	}[]
}

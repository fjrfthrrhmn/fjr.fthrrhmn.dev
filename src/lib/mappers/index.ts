import { IconType } from "react-icons";



import { GitCommit, GitFork } from "lucide-react";



import { GithubUserType } from "@/types";
import { MonkeyUserType } from "@/types/monkey-types";



import { formatSeconds } from "../utils";


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
	]
}

type MonkeyStatItem = MonkeyUserType["typingStats"]
type BestStats = {
	bestWPM: number
	bestAccuracy: number
}

export function MonkeyMapStats(value: MonkeyStatItem, bestStats: BestStats) {
	return [
		{
			label: "Best WPM",
			value: bestStats.bestWPM
		},
		{
			label: "Best Accuracy",
			value: bestStats.bestAccuracy
		},
		{
			label: "Time Typing",
			value: value.timeTyping,
			formatter: formatSeconds
		}
	]
}
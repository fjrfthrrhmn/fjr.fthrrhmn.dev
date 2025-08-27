import React from "react"
import { IconType } from "react-icons"

import { GitCommit, GitFork } from "lucide-react"

import { ContributionsType, GithubUserType } from "@/types"
import { MonkeyUserType } from "@/types/monkey-types"

import { formatSeconds } from "../utils"

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

export function MonkeyMapStats(value: MonkeyStatItem) {
	return [
		{
			label: "Completed Tests",
			value: value.completedTests
		},
		{
			label: "Started Tests",
			value: value.startedTests
		},
		{
			label: "Time Typing",
			value: value.timeTyping,
			formatter: formatSeconds
		}
	]
}

import React from "react"
import { IconType } from "react-icons"

import { GitCommit, GitFork } from "lucide-react"

import { ContributionsType } from "@/types"

interface StatItem {
	value: number
	label: string
	icon: IconType
}

export function mapGithubStats(contributions?: ContributionsType): StatItem[] {
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

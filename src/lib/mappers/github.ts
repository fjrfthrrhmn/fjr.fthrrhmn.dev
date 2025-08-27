import React from "react";
import { IconType } from "react-icons";



import { GitCommit, GitFork } from "lucide-react";



import { ContributionsType } from "@/types";



import { ContentType } from "@/stores/sidebar-store";



import { GithubContent } from "@/components/features/home/dashboard/github";





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

export const mapContentDashboard: Partial<Record<ContentType, React.ComponentType>> = {
	Github: GithubContent
}
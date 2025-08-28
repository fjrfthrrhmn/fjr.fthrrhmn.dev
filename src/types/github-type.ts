export interface GithubType {
	data: {
		viewer: GithubUserType
	}
}

export interface GithubUserType {
	login: string
	name: string
	avatarUrl: string
	bio: string
	url: string
	followers: {
		totalCount: number
	}
	following: {
		totalCount: number
	}
	contributionsCollection: ContributionsType
}

export interface ContributionsType {
	totalCommitContributions: number
	totalPullRequestContributions: number
	totalIssueContributions: number
	totalRepositoryContributions: number
	contributionCalendar: ContributionCalendar
}

export interface ContributionCalendar {
	weeks: {
		contributionDays: {
			date: string
			contributionCount: number
		}[]
	}[]
}

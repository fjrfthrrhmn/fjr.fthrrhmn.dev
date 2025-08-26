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
	followers: {
		totalCount: number
	}
	following: {
		totalCount: number
	}
	contributionsCollection: ContributionsType
}

interface ContributionsType {
	totalCommitContributions: number
	totalPullRequestContributions: number
	totalIssueContributions: number
	totalRepositoryContributions: number
}

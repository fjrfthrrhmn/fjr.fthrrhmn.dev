export const API_ENDPOINTS = {
	github:
		process.env.NEXT_PUBLIC_GITHUB_URL || "https://api.github.com/graphql",
	youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL
}

export const API_KEYS = {
	github: process.env.NEXT_PUBLIC_GITHUB_TOKEN
}

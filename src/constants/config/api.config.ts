export const API_ENDPOINTS = {
	github:
		process.env.NEXT_PUBLIC_GITHUB_URL || "https://api.github.com/graphql",
	monkeyType:
		process.env.NEXT_PUBLIC_MONKEY_TYPE_URL || "https://api.monkeytype.com"
}

export const API_KEYS = {
	github: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
}

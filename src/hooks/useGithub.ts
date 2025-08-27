import { useQuery } from "@tanstack/react-query"

import { GithubType } from "@/types"

import { githubService } from "@/services/github-service"

export const useGithubProfile = () => {
	const { data: response, ...rest } = useQuery<GithubType>({
		queryKey: ["github-profile"],
		queryFn: async () => {
			const response = await githubService.getProfile()
			return response.data
		}
	})

	return {
		response: response,
		data: response?.data?.viewer,
		contributions: response?.data.viewer?.contributionsCollection,
		...rest
	}
}

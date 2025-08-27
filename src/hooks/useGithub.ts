import { useQuery } from "@tanstack/react-query"

import { GithubUserType } from "@/types"

import { githubService } from "@/services/github-service"

export const useGithubProfile = () => {
	const { data, ...rest } = useQuery<GithubUserType>({
		queryKey: ["github-profile"],
		queryFn: async () => {
			const response = await githubService.getProfile()
			return response.data.data.viewer
		}
	})

	return {
		response: data,
		contributions: data?.contributionsCollection,
		...rest
	}
}

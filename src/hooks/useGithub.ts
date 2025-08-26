import { useQuery } from "@tanstack/react-query"

import { GithubUserType } from "@/types"

import { githubService } from "@/services/github-service"

export const useGithubProfile = () => {
	return useQuery<GithubUserType>({
		queryKey: ["github-profile"],
		queryFn: async () => {
			const response = await githubService.getProfile()
			return response.data.data.viewer
		}
	})
}

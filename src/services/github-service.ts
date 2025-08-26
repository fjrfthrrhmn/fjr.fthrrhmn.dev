import { apiHelper } from "@/helpers/api-helper"

import { ApiResponseType, GithubType } from "@/types"
import { API_ENDPOINTS, API_KEYS, GET_PROFILE_GITHUB } from "@/constants"

export const githubService = {
	getProfile: async (): Promise<ApiResponseType<GithubType>> => {
		return apiHelper.post(
			"",
			{ query: GET_PROFILE_GITHUB },
			{
				baseURL: API_ENDPOINTS.github,
				headers: {
					Authorization: `Bearer ${API_KEYS.github}`
				}
			}
		)
	}
}

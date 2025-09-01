import axios from "axios"

import { ApiResponseType, GithubType } from "@/types"
import { API_ENDPOINTS, API_KEYS, GET_PROFILE_GITHUB } from "@/constants"

export const githubService = {
	getProfile: async (): Promise<ApiResponseType<GithubType>> => {
		return axios.post(
			API_ENDPOINTS.github,
			{ query: GET_PROFILE_GITHUB },
			{
				headers: {
					Authorization: `Bearer ${API_KEYS.github}`
				}
			}
		)
	}
}

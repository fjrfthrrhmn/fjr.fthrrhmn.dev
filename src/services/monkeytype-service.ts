import { apiHelper } from "@/helpers/api-helper"

import { ApiResponseType } from "@/types"
import { MonkeyType } from "@/types/monkey-types"
import { API_ENDPOINTS } from "@/constants"

export const monkeyTypeService = {
	getProfile: async (name: string): Promise<ApiResponseType<MonkeyType>> => {
		const URL = `${API_ENDPOINTS.monkeyType}/users/${name}/profile`
		return apiHelper.get(URL)
	}
}

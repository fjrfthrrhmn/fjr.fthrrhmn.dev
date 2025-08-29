import { apiHelper } from "@/helpers/api-helper";



import { ApiResponseType, WakatimeStatsType } from "@/types";
import { API_ENDPOINTS } from "@/constants";





export const wakatimeService = {
	getProfile: async (
		name: string
	): Promise<ApiResponseType<WakatimeStatsType>> => {
		return await apiHelper.get(
			`${API_ENDPOINTS.wakatime}/users/${name}/all_time_since_today`,
			{
				headers: {
					Authorization: `Bearer ${process.env.WAKATIME_API_KEY}`
				}
			}
		)
	}
}
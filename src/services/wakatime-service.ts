import axios from "axios"

import { ApiResponseType, WakatimeStatsType } from "@/types"

export const wakatimeService = {
	getStats: async (): Promise<ApiResponseType<WakatimeStatsType>> =>
		await axios.get("/api/wakatime")
}

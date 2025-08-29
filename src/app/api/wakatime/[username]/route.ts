import { NextRequest } from "next/server";



import axios from "axios";



import { API_ENDPOINTS, API_KEYS } from "@/constants";





export async function GET(_req: NextRequest) {
	try {
		const apiKey = API_KEYS.wakatime
		if (!apiKey) {
			return Response.json(
				{ error: "WAKATIME_API_KEY not set" },
				{ status: 500 }
			)
		}

		// - Weekly Stats (last 7 days)
		const STATS_URL = `${API_ENDPOINTS.wakatime}/users/current/stats?range=last_7_days`
		const statsRes = await axios.get(STATS_URL, {
			headers: { Authorization: `Basic ${apiKey}` }
		})

		// - All Time Coding
		const ALL_TIME_URL = `${API_ENDPOINTS.wakatime}/users/current/all_time_since_today`
		const allTimeRes = await axios.get(ALL_TIME_URL, {
			headers: { Authorization: `Basic ${apiKey}` }
		})

		return Response.json({
			stats: statsRes.data.data,
			allTime: allTimeRes.data.data
		})
	} catch (err: any) {
		console.error("WakaTime API Error:", err.response?.data || err.message)
		return Response.json(
			{ error: err.response?.data || err.message },
			{ status: err.response?.status || 500 }
		)
	}
}
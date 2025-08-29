import { NextRequest } from "next/server"

import axios from "axios"

import { API_ENDPOINTS, API_KEYS } from "@/constants"

export async function GET(_req: NextRequest) {
	try {
		const URL_STATS = `${API_ENDPOINTS.wakatime}/users/current/stats/last_7_days`
		const URL_ALL_TIME = `${API_ENDPOINTS.wakatime}/users/current/all_time_since_today`

		const [statsRes, allTimeRes] = await Promise.all([
			axios.get(URL_STATS, {
				headers: { Authorization: `Basic ${API_KEYS.wakatime}` }
			}),
			axios.get(URL_ALL_TIME, {
				headers: { Authorization: `Basic ${API_KEYS.wakatime}` }
			})
		])

		const stats = statsRes.data.data
		const allTime = allTimeRes.data.data

		return Response.json({
			id: stats.id,
			status: stats.status,
			username: stats.username,
			dailyAverage: stats.daily_average,
			editors: stats.editors,
			languages: stats.languages.slice(0, 4),
			categories: stats.categories,
			bestDay: stats.best_day,
			time: {
				range: stats.range,
				start: stats.start,
				end: stats.end,
				timezone: stats.timezone
			},
			allTime: {
				totalSeconds: allTime.total_seconds,
				text: allTime.text,
				dailyAverage: allTime.daily_average,
				start: allTime.range?.start_date,
				end: allTime.range?.end_date
			}
		})
	} catch (err: any) {
		return Response.json({ error: err.response?.data || err.message })
	}
}

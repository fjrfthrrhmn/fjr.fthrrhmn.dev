import { NextRequest } from "next/server"

import axios from "axios"

import { API_ENDPOINTS, API_KEYS } from "@/constants"

export async function GET(_req: NextRequest) {
	console.log(_req)
	
	try {
		const URL_USERS = `${API_ENDPOINTS.wakatime}/users/current`
		const URL_STATS = `${API_ENDPOINTS.wakatime}/users/current/stats/last_7_days`
		const URL_ALL_TIME = `${API_ENDPOINTS.wakatime}/users/current/all_time_since_today`

		const [statsRes, allTimeRes, usersRes] = await Promise.all([
			axios.get(URL_STATS, {
				headers: { Authorization: `Basic ${API_KEYS.wakatime}` }
			}),
			axios.get(URL_ALL_TIME, {
				headers: { Authorization: `Basic ${API_KEYS.wakatime}` }
			}),
			axios.get(URL_USERS, {
				headers: { Authorization: `Basic ${API_KEYS.wakatime}` }
			})
		])

		const stats = statsRes.data.data
		const allTime = allTimeRes.data.data
		const users = usersRes.data.data

		return Response.json({
			id: stats.id,
			status: stats.status,
			fullName: users.full_name,
			username: users.username,
			city: users.city,
			photo: users.photo,
			profileUrl: users.profile_url,
			dailyAverage: stats.daily_average,
			editors: stats.editors,
			languages: stats.languages.slice(0, 5),
			categories: stats.categories,
			bestDay: stats.best_day,
			time: {
				range: stats.range,
				start: stats.start,
				end: stats.end,
				timezone: stats.timezone,
				total: stats.human_readable_total,
				dailyAverage: stats.daily_average,
				averageText: stats.human_readable_daily_average
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

import { useQuery } from "@tanstack/react-query"

import { WakatimeStatsType } from "@/types"

import { wakatimeService } from "@/services"

export const useWakatime = () => {
	const { data: response, ...rest } = useQuery<WakatimeStatsType>({
		queryKey: ["wakatime-profile"],
		queryFn: async () => {
			const res = await wakatimeService.getStats()
			return res.data
		}
	})

	return {
		response: response,
		editors: response?.editors,
		categories: response?.categories,
		languages: response?.languages,
		...rest
	}
}

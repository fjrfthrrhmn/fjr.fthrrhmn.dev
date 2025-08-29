import { useQuery } from "@tanstack/react-query"

import { wakatimeService } from "@/services/wakatime-service"

export const useWakatime = () => {
	const { data: response, ...rest } = useQuery({
		queryKey: ["Wakatime-profile"],
		queryFn: async () => {
			const res = await wakatimeService.getProfile("jessen")
			return res.data.data
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

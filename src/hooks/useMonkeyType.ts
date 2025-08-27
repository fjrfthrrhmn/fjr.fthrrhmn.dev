import { useQuery } from "@tanstack/react-query"

import { MonkeyType } from "@/types/monkey-types"

import { monkeyTypeService } from "@/services/monkeytype-service"

export const useMonkeyTypeProfile = () => {
	const { data: response, ...rest } = useQuery<MonkeyType>({
		queryKey: ["monkey-type-profile"],
		queryFn: async () => {
			const response = await monkeyTypeService.getProfile("jessenz")
			return response.data
		}
	})

	return {
		response: response,
		data: response?.data,
		personalBests: response?.data?.personalBests,
		stats: response?.data?.typingStats,
		...rest
	}
}

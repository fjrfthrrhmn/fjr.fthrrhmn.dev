"use client"

import { useWakatime } from "@/hooks/useWakatime"

import { StatsWakatime } from "."

const Wakatime = () => {
	const { response } = useWakatime()

	return (
		<>
			<StatsWakatime />
		</>
	)
}

export default Wakatime

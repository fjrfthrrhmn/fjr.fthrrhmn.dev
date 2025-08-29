"use client"

import { useWakatime } from "@/hooks/useWakatime"

import { StatsWakatime } from "."

const Wakatime = () => {
	// - Start Date
	// - End Date
	// - Best Day
	// - Average
	// - Total This Week
	// - All-Time Coding Since Joined
	// - Top Languages
	
	const { response } = useWakatime()
	console.log(response)

	return (
		<>
			<StatsWakatime />
		</>
	)
}

export default Wakatime

"use client"

import { useWakatime } from "@/hooks/useWakatime"

import {
	CategoriesWakatime,
	HeaderWakatime,
	LanguagesWakatime,
	StatsWakatime
} from "."

const Wakatime = () => {
	const { response, categories, languages } = useWakatime()
	if (!response || !languages || !categories) return null

	return (
		<div className="grid grid-cols-1 gap-4">
			<HeaderWakatime {...response} />
			<StatsWakatime data={response} />
			<div className="grid grid-cols-1 lg:grid-cols-8 gap-4">
				<LanguagesWakatime data={languages} />
				<CategoriesWakatime data={categories} />
			</div>
		</div>
	)
}

export default Wakatime

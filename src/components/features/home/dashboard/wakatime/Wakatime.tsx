"use client";

import { useWakatime } from "@/hooks/useWakatime";



import { CategoriesWakatime, LanguagesWakatime, StatsWakatime } from ".";


const Wakatime = () => {
	const { response, categories, languages } = useWakatime()
	if (!response || !languages || !categories) return null

	return (
		<div className="grid grid-cols-1 gap-4">
			<StatsWakatime data={response} />
			<div className="grid grid-cols-8 gap-4">
				<LanguagesWakatime data={languages} />
				<CategoriesWakatime data={categories} />
			</div>
		</div>
	)
}

export default Wakatime
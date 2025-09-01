"use client";

import { useWakatimeProfile } from "@/hooks";



import { CategoriesWakatime, HeaderWakatime, LanguagesWakatime, StatsWakatime } from ".";


const Wakatime = () => {
	const { response, categories, languages } = useWakatimeProfile()

	if (!response || !categories || !languages) return null


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
"use client"

import { useMonkeyTypeProfile } from "@/hooks/useMonkeyType"

import { PersonalBestsMonkeyType, ProfileMonkeyType, StatsMonkeyType } from "."

const MonkeyType = () => {
	const { data } = useMonkeyTypeProfile()

	if (!data) return

	return (
		<div className="grid grid-cols-6 gap-4">
			<ProfileMonkeyType data={data} />
			<StatsMonkeyType
				dataBest={data.personalBests}
				dataTime={data.typingStats.timeTyping}
			/>
			<PersonalBestsMonkeyType data={data.personalBests} />
		</div>
	)
}

export default MonkeyType

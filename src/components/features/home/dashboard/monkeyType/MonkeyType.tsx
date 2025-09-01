"use client"

import { useMonkeyTypeProfile } from "@/hooks"

import { AsyncState } from "@/components/feedback"

import { PersonalBestsMonkeyType, ProfileMonkeyType, StatsMonkeyType } from "."

const MonkeyType = () => {
	const { data, isLoading, isPending, isError } = useMonkeyTypeProfile()

	if(!data) return null
	
	console.log(data)


	return (
		<AsyncState
			isLoading={isLoading || isPending}
			isError={isError}
			isEmpty={!data}
		>
			<div className="grid grid-cols-1 lg:grid-cols-8 gap-4">
				<ProfileMonkeyType profile={data!} />
				<StatsMonkeyType
					dataBest={data!.personalBests}
					dataTime={data!.typingStats.timeTyping}
				/>
				<PersonalBestsMonkeyType data={data!.personalBests} />
			</div>
		</AsyncState>
	)
}

export default MonkeyType

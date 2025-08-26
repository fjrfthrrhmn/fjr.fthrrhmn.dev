"use client"

import { useGithubProfile } from "@/hooks"
import { mapGithubStats } from "@/lib/mappers"
import { calculateStreaks } from "@/lib/utils"

import { CardCustom, Typography } from "@/components/ui"
import { NumberTicker } from "@/components/widgets"

import { StreakCardGithub } from "."

const Stats = () => {
	const { data } = useGithubProfile()
	const contributions = data?.contributionsCollection

	const { currentStreak, maxStreak } = calculateStreaks(
		contributions?.contributionCalendar?.weeks ?? []
	)

	return (
		<div className="col-span-4 grid grid-cols-3 gap-4 items-stretch">
			{mapGithubStats(contributions)?.map((stat, index) => (
				<CardCustom
					key={index}
					className="p-4 flex flex-col items-center justify-center text-center gap-2"
				>
					
					<Typography.Title variant="3/black">
						<NumberTicker value={stat.value} />
					</Typography.Title>
					<Typography.Text variant="xs/semibold" className="text-foreground">
						{stat.label}
					</Typography.Text>
				</CardCustom>
			))}

			{/* Streak */}
			<StreakCardGithub streak={currentStreak} maxStreak={maxStreak} />
		</div>
	)
}

export default Stats

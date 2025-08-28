"use client";

import { SiGithub } from "react-icons/si";



import { useGithubProfile } from "@/hooks";
import { GithubMapStats } from "@/lib/mappers";



import { CardCustom, Typography } from "@/components/ui";
import { NumberTicker } from "@/widgets";



import { StreakCardGithub } from ".";
import { GithubUtils } from "../utils";


const Stats = () => {
	const { contributions } = useGithubProfile()
	const contributionCalendar = contributions?.contributionCalendar.weeks ?? []

	const { currentStreak, maxStreak } =
		GithubUtils.calculateStreaks(contributionCalendar)

	return (
		<div className="col-span-4 grid grid-cols-3 gap-4 items-stretch">
			{GithubMapStats(contributions)?.map((stat, index) => (
				<CardCustom
					key={index}
					icon={stat.icon}
					iconPlacement="bottomRight"
					classNameIcon="rotate-12"
					iconSize={150}
				>
					<div className=" relative z-20 flex p-4 flex-col items-center justify-center text-center gap-2">
						<Typography.Title variant="3/black" className="font-mono">
							<NumberTicker value={stat.value} />
						</Typography.Title>
						<Typography.Text variant="xs/semibold" className="text-foreground">
							{stat.label}
						</Typography.Text>
					</div>
				</CardCustom>
			))}

			{/* Streak */}
			<StreakCardGithub streak={currentStreak} maxStreak={maxStreak} />
		</div>
	)
}

export default Stats
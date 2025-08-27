"use client"

import FireSvg from "@/components/icons/Fire"
import { Typography } from "@/components/ui"
import { NumberTicker } from "@/components/widgets"

interface StreakCardProps {
	streak: number
	maxStreak: number
}

const getGradient = (streak: number) => {
	if (streak >= 20) return "from-yellow-500 via-orange-600 to-red-700"
	if (streak >= 10) return "from-yellow-400 via-orange-400 to-red-500"
	return "from-zinc-700 via-zinc-800 to-zinc-900"
}

const StreakCard = ({ maxStreak, streak }: StreakCardProps) => {
	return (
		<div
			className={`relative overflow-hidden rounded-2xl border-2 p-4 bg-gradient-to-b ${getGradient(
				maxStreak
			)}`}
		>
			<div className="relative z-20 h-full flex flex-col justify-between">
				<div>
					<Typography.Title
						variant="1/black"
						className="font-mono drop-shadow-2xl"
					>
						<NumberTicker value={maxStreak} />
					</Typography.Title>
					<Typography.Text variant="sm/medium" className="text-foreground">
						Max Streak
					</Typography.Text>
				</div>

				{/* <div className="flex items-center gap-2">
					<Typography.Title
						variant="6/black"
						className="font-mono text-background"
					>
						{maxStreak}
					</Typography.Title>
					<Typography.Text
						variant="xs/medium"
						className="text-foreground text-background"
					>
						Max Streak
					</Typography.Text>
				</div> */}
			</div>

			<div className="absolute -bottom-4 -right-9 z-10">
				<FireSvg className="w-32 h-32 drop-shadow-2xl" />
			</div>
			<div className="absolute -bottom-6 -right-12 z-0 opacity-25">
				<FireSvg className="w-44 h-44 blur-sm" />
			</div>
		</div>
	)
}

export default StreakCard

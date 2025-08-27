"use client"

import { MonkeyUserType } from "@/types/monkey-types"

import { MonkeyMapStats } from "@/lib/mappers"

import { CardCustom, Typography } from "@/components/ui"
import { NumberTicker } from "@/components/widgets"

import { MonkeyTypeUtils } from "../utils"

type StatsProps = {
	data: MonkeyUserType
}

const Stats = ({ data }: StatsProps) => {
	const { bestAccuracy, bestWPM } = MonkeyTypeUtils.bestStats(
		data.personalBests
	)

	return (
		<CardCustom className="col-span-4 grid grid-cols-3 gap-4 text-center">
			{MonkeyMapStats(data.typingStats, { bestAccuracy, bestWPM }).map(
				(item) => (
					<div key={item.label}>
						<Typography.Title
							variant="3/black"
							className="font-mono"
							title={String(item.value)}
						>
							<NumberTicker
								value={item.value}
								formatter={item.formatter}
								className="text-teal-400"
							/>
						</Typography.Title>
						<Typography.Text
							variant="xs/normal"
							className="text-foreground mt-2"
						>
							{item.label}
						</Typography.Text>
					</div>
				)
			)}
		</CardCustom>
	)
}

export default Stats

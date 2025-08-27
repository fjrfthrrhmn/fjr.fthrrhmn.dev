"use client"

import { MonkeyUserType } from "@/types/monkey-types"

import { MonkeyMapStats } from "@/lib/mappers"

import { CardCustom, Typography } from "@/components/ui"
import { NumberTicker } from "@/components/widgets"

type StatsProps = {
	data: MonkeyUserType["typingStats"]
}

const Stats = ({ data }: StatsProps) => {
	return (
		<CardCustom className="col-span-4 grid grid-cols-3 gap-4 text-center">
			{MonkeyMapStats(data).map((item) => (
				<div key={item.label}>
					<Typography.Title variant="3/black" className="font-mono ">
						<NumberTicker
							value={item.value}
							formatter={item.formatter}
							className="text-teal-400"
						/>
					</Typography.Title>
					<Typography.Text variant="xs/normal" className="text-foreground mt-2">
						{item.label}
					</Typography.Text>
				</div>
			))}
		</CardCustom>
	)
}

export default Stats

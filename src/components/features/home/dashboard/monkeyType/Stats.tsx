"use client"

import { IconTimeDuration10 } from "@tabler/icons-react"

import { MonkeyUserType } from "@/types/monkey-types"

import { MonkeyMapStats } from "@/lib/mappers"

import { CardCustom, Typography } from "@/components/ui"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/ui"
import { NumberTicker } from "@/widgets"

import { MonkeyTypeUtils } from "../utils"

type StatsProps = {
	dataBest: MonkeyUserType["personalBests"]
	dataTime: MonkeyUserType["typingStats"]["timeTyping"]
}

const Stats = ({ dataBest, dataTime }: StatsProps) => {
	const { ...data } = MonkeyTypeUtils.bestStats(dataBest, dataTime)

	return (
		<CardCustom
			className="col-span-4 p-2"
			classNameContent="grid grid-cols-4 gap-4 text-center items-center justify-center w-full h-full"
		>
			{MonkeyMapStats({ ...data }).map((item, index) => (
				<StatsItem key={index} {...item} />
			))}
		</CardCustom>
	)
}

export default Stats

const StatsItem = (item: {
	label: string
	value: number
	formatter?: (v: number) => string
	icon: any
}) => {
	const isTime = item.label.includes("Time")
	const formatted = item.formatter && item.formatter(item.value)
	const title = isTime
		? `${formatted} ${item.label}`
		: `${item.value} ${item.label}`

	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<div
					className={`${isTime ? "col-span-2" : ""} flex flex-col gap-2 items-center justify-center`}
				>
					<item.icon size={28} className={"text-paragraph"} />
					<Typography.Title
						variant="3/black"
						className="font-mono"
						title={String(title)}
					>
						<NumberTicker
							value={item.value}
							formatter={item.formatter}
							className="text-teal-400"
						/>
					</Typography.Title>
					<Typography.Text variant="xs/normal" className="text-foreground">
						{item.label}
					</Typography.Text>
				</div>
			</TooltipTrigger>
			<TooltipContent>{title}</TooltipContent>
		</Tooltip>
	)
}

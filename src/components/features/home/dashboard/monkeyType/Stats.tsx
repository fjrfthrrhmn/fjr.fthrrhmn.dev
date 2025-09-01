"use client";

import { useLocale } from "next-intl";



import { MonkeyUserType } from "@/types/monkey-types";



import { MonkeyMapStats } from "@/lib/mappers";



import { CardCustom, Typography } from "@/components/ui";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/ui";
import { NumberTicker } from "@/widgets";



import { MonkeyTypeUtils } from "../utils";


type StatsProps = {
	dataBest: MonkeyUserType["personalBests"]
	dataTime: MonkeyUserType["typingStats"]["timeTyping"]
}

const Stats = ({ dataBest, dataTime }: StatsProps) => {
	const lang = useLocale() as "en" | "id"
	const { ...data } = MonkeyTypeUtils.bestStats(dataBest, dataTime)

	return (
		<CardCustom className="lg:col-span-5">
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-4 sm:gap-4">
				{MonkeyMapStats({ ...data }, lang).map((item, index) => (
					<StatsItem key={index} {...item} />
				))}
			</div>
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
	const COLOR = {
		TEXT: "text-amber-400",
	}

	const isTime = item.label.includes("Time")
	const formatted = item.formatter && item.formatter(item.value)
	const title = isTime
		? `${formatted} ${item.label}`
		: `${item.value} ${item.label}`

	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<div
					className={`${isTime ? "lg:col-span-2" : ""} flex flex-col gap-2 items-center justify-center`}
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
							className={COLOR.TEXT}
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
"use client"

import GitHubCalendar, {
	type Props as ActivityCalendarProps
} from "react-github-calendar"

import {
	CardCustom,
	Tooltip,
	TooltipContent,
	TooltipTrigger
} from "@/components/ui"

const calendarConfig: ActivityCalendarProps = {
	username: "fjrfthrrhmn",
	blockSize: 12,
	blockMargin: 5,
	fontSize: 14,
	colorScheme: "dark",
	transformData: (data) => data,
	theme: { dark: ["#373737", "#065f46", "#059669", "#34d399", "#86efac"] },
	renderBlock: (block, activity) => {
		if (!activity) return block

		const { count, date } = activity
		const hasContributions = count > 0

		const label = hasContributions
			? `${count} contributions on ${date}`
			: `No contributions on ${date}`

		return (
			<Tooltip>
				<TooltipTrigger asChild>{block}</TooltipTrigger>
				<TooltipContent>{label}</TooltipContent>
			</Tooltip>
		)
	}
}

const Calendar = () => {
	return (
		<CardCustom className="col-span-6">
			<GitHubCalendar {...calendarConfig} />
		</CardCustom>
	)
}

export default Calendar

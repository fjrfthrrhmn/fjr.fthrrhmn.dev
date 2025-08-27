import React from "react"
import { type Props as ActivityCalendarProps } from "react-github-calendar"

const calendarConfig: Omit<
	ActivityCalendarProps,
	"transformData" | "username"
> = {
	blockSize: 12,
	blockMargin: 5,
	fontSize: 14,
	colorScheme: "dark",
	hideTotalCount: true,
	theme: { dark: ["#373737", "#065f46", "#059669", "#34d399", "#86efac"] },
	renderBlock: (block, activity) => {
		if (!activity) return block
		const { count, date } = activity
		const label =
			count > 0 ? `${count} contributions on ${date}` : `No contributions`

		return React.cloneElement(block, {}, <title>{label}</title>)
	}
}

export const GithubConfig = {
	calendarConfig
}
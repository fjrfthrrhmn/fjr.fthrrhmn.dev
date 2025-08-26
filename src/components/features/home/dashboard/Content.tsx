import { CardCustom } from "@/components/ui"

import { CalendarGithub } from "./github"

const Content = () => {
	return (
		<div className="col-span-11">
			<div className="grid grid-cols-6 gap-4">
				<CardCustom className="col-span-2">Profile</CardCustom>
				<CardCustom className="col-span-4">Something</CardCustom>
				<CalendarGithub />
				{/* Add Something */}
			</div>
		</div>
	)
}

export default Content

import { CardCustom } from "@/components/ui"

import { CalendarGithub, ProfileGithub } from "./github"

const Content = () => {
	return (
		<div className="col-span-11">
			<div className="grid grid-cols-6 gap-4">
				<ProfileGithub />
				<CardCustom className="col-span-4">Something</CardCustom>
				<CalendarGithub />
			</div>
		</div>
	)
}

export default Content

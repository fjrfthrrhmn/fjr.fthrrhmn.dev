import { CalendarGithub, ProfileGithub, StatsGithub } from "./github"

const Content = () => {
	return (
		<div className="col-span-11">
			<div className="grid grid-cols-6 gap-4">
				<ProfileGithub />
				<StatsGithub/>
				<CalendarGithub />
			</div>
		</div>
	)
}

export default Content

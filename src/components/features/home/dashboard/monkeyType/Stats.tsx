import { MonkeyUserType } from "@/types/monkey-types"

import { CardCustom } from "@/components/ui"

type StatsProps = {
	data: MonkeyUserType["typingStats"]
}

const Stats = ({ data }: StatsProps) => {
	return (
		<CardCustom className="col-span-4">
			<div>
				<div>Stats</div>
			</div>
			<div className="grid grid-cols-3 gap-4 text-center">
				<div>
					<p className="text-lg font-bold">{data.completedTests}</p>
					<p className="text-sm text-muted-foreground">Completed Tests</p>
				</div>
				<div>
					<p className="text-lg font-bold">{data.startedTests}</p>
					<p className="text-sm text-muted-foreground">Started Tests</p>
				</div>
				<div>
					<p className="text-lg font-bold">
						{Math.floor(data.timeTyping / 3600)}h
					</p>
					<p className="text-sm text-muted-foreground">Time Typing</p>
				</div>
			</div>
		</CardCustom>
	)
}

export default Stats

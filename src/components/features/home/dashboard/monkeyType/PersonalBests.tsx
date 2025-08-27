import { MonkeyUserType } from "@/types/monkey-types";



import { CardCustom } from "@/components/ui";





type PersonalBestsProps = {
	data: MonkeyUserType['personalBests']
}

const PersonalBests = ({ data }: PersonalBestsProps) => {
	return (
		<div className="col-span-6 grid grid-cols-2 gap-4">
			<CardCustom>
				<div>
					<div>Best Time Tests</div>
				</div>
				<div className="space-y-2">
					{Object.entries(data.time).map(([mode, records]) => (
						<div key={mode} className="flex justify-between text-sm">
							<span>{mode}</span>
							<span>{records[0]?.wpm ?? "-"} WPM</span>
						</div>
					))}
				</div>
			</CardCustom>

			<CardCustom>
				<div>
					<div>Best Word Tests</div>
				</div>
				<div className="space-y-2">
					{Object.entries(data.words).map(([mode, records]) => (
						<div key={mode} className="flex justify-between text-sm">
							<span>{mode}</span>
							<span>{records[0]?.wpm ?? "-"} WPM</span>
						</div>
					))}
				</div>
			</CardCustom>
		</div>
	)
}


export default PersonalBests
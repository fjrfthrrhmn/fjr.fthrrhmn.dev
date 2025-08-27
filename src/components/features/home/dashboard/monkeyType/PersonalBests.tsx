import { MonkeyUserType } from "@/types/monkey-types"

import { formatDate } from "@/lib/utils"

import { CardCustom, Typography } from "@/components/ui"

type PersonalBestsProps = {
	data: MonkeyUserType["personalBests"]
}

type BestField = keyof MonkeyUserType["personalBests"]

// TODO: ADD Tooltip
const PersonalBests = ({ data }: PersonalBestsProps) => {
	return (
		<div className="col-span-6 grid grid-cols-2 gap-4">
			{(Object.keys(data) as BestField[]).map((field) => (
				<CardCustom key={field} className="grid grid-cols-3 gap-4 text-center">
					{Object.entries(data[field])
						.slice(1)
						.map(([mode, records]) => {
							const item = records[0]
							const label = field === "time" ? `${mode}s` : `${mode} words`

							return (
								<div key={`${field}-${mode}`}>
									<Typography.Text variant="xs/normal">{label}</Typography.Text>
									<Typography.Title
										variant="2/black"
										className="font-mono my-4"
									>
										{item.wpm.toFixed()}
									</Typography.Title>
									<Typography.Text variant="xs/normal">
										{formatDate(new Date(item.timestamp), "d MMM yyyy")}
									</Typography.Text>
								</div>
							)
						})}
				</CardCustom>
			))}
		</div>
	)
}

export default PersonalBests

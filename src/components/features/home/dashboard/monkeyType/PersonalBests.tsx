import { ArrowUp } from "lucide-react"

import { MonkeyUserType } from "@/types/monkey-types"

import { formatDate } from "@/lib/utils"

import {
	CardCustom,
	Tooltip,
	TooltipContent,
	TooltipTrigger,
	Typography
} from "@/ui"
import { NumberTicker } from "@/widgets"

type PersonalBestsProps = {
	data: MonkeyUserType["personalBests"]
}

type BestField = keyof MonkeyUserType["personalBests"]

// TODO: ADD Tooltip
const PersonalBests = ({ data }: PersonalBestsProps) => {
	return (
		<div className="col-span-6 grid grid-cols-2 gap-4">
			{(Object.keys(data) as BestField[]).map((field) => (
				<CardCustom
					key={field}
					classNameContent="grid grid-cols-3 gap-4 text-center"
				>
					{Object.entries(data[field])
						.slice(1)
						.map(([mode, records]) => (
							<BestPersonalItem
								key={`${field}-${mode}`}
								field={field}
								mode={mode}
								record={records[0]}
							/>
						))}
				</CardCustom>
			))}

			<div className="bg-zinc-800 rounded-xl border px-4 py-1.5 w-max h-max">
				<small className="flex gap-1 items-end">
					Hover for details
					<ArrowUp size={18} className="animate-bounce" />
				</small>
			</div>
		</div>
	)
}

export default PersonalBests

const BestPersonalItem = ({
	field,
	mode,
	record
}: {
	field: BestField
	mode: string
	record: { wpm: number; timestamp: number }
}) => {
	const label = field === "time" ? `${mode} seconds` : `${mode} words`

	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<div>
					<Typography.Text variant="xs/normal" className="text-foreground">{label}</Typography.Text>
					<Typography.Title variant="2/black">
						<NumberTicker
							value={record.wpm}
							className="font-mono my-4 text-teal-400"
						/>
					</Typography.Title>
					<small>{formatDate(new Date(record.timestamp), "d MMM yyyy")}</small>
				</div>
			</TooltipTrigger>
			<TooltipContent>
				<p>Add to library</p>
			</TooltipContent>
		</Tooltip>
	)
}

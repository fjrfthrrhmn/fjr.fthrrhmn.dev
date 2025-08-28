import { ArrowUp } from "lucide-react";



import { MonkeyUserType, PersonalBestItemType } from "@/types/monkey-types";



import { formatDate } from "@/lib/utils";



import { CardCustom, Tooltip, TooltipContent, TooltipTrigger, Typography } from "@/ui";
import { NumberTicker } from "@/widgets";





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

interface BestPersonalItemProps {
	field: BestField
	mode: string
	record: PersonalBestItemType
}

const BestPersonalItem = ({ field, mode, record }: BestPersonalItemProps) => {
	const label = field === "time" ? `${mode} seconds` : `${mode} words`

	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<div>
					<Typography.Text variant="xs/normal" className="text-foreground">
						{label}
					</Typography.Text>
					<Typography.Title variant="2/black">
						<NumberTicker
							value={record.wpm}
							className="font-mono my-4 text-teal-400"
						/>
					</Typography.Title>
					<small>{formatDate(new Date(record.timestamp), "d MMM yyyy")}</small>
				</div>
			</TooltipTrigger>
			<TooltipContent className="grid grid-cols-2 gap-x-4">
				{[
					{ label: "Wpm", value: record.wpm },
					{ label: "Raw", value: record.raw },
					{ label: "Con", value: record.consistency },
					{ label: "Acc", value: record.acc }
				].map(({ label, value }) => (
					<div key={label} className="w-20 flex items-center justify-between">
						<Typography.Text className="text-background" variant="xs/normal">
							{label}:
						</Typography.Text>
						<Typography.Text className="text-background" variant="xs/normal">{value.toFixed(0)}</Typography.Text>
					</div>
				))}
			</TooltipContent>
		</Tooltip>
	)
}
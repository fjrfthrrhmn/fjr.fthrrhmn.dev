import { useLocale } from "next-intl";



import { ArrowUp } from "lucide-react";



import { MonkeyUserType, PersonalBestItemType } from "@/types";



import { MonkeyMapPersonalBest } from "@/lib/mappers";
import { formatDate } from "@/lib/utils";



import { CardCustom, Tooltip, TooltipContent, TooltipTrigger, Typography } from "@/ui";
import { NumberTicker } from "@/widgets";





type PersonalBestsProps = {
	data: MonkeyUserType["personalBests"]
}

type BestField = keyof MonkeyUserType["personalBests"]

const PersonalBests = ({ data }: PersonalBestsProps) => {
	const lang = useLocale() as "en" | "id"

	return (
		<div className="lg:col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
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

			{/* Information */}
			<div className="bg-zinc-800 rounded-xl border px-4 py-1.5 w-max h-max">
				<small className="flex gap-1 items-end">
					{lang === "en" ? "Hover for details" : "Arahkan kursor untuk detail"}
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
	const COLOR = {
		TEXT: "text-amber-400",
	}

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
							className={`font-mono my-4 ${COLOR.TEXT}`}
						/>
					</Typography.Title>
					<small>{formatDate(new Date(record.timestamp), "d MMM yyyy")}</small>
				</div>
			</TooltipTrigger>

			{/* Content */}
			<TooltipContent className="grid grid-cols-2 gap-x-4">
				{MonkeyMapPersonalBest({ ...record }).map(({ label, value }) => (
					<div key={label} className="w-20 flex items-center justify-between">
						<Typography.Text className="text-background" variant="xs/normal">
							{label}:
						</Typography.Text>
						<Typography.Text className="text-background" variant="xs/normal">
							{value.toFixed(0)}
						</Typography.Text>
					</div>
				))}
			</TooltipContent>
		</Tooltip>
	)
}
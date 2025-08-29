import { WakaTimeMapSats } from "@/lib/mappers"

import { CardCustom, Typography } from "@/components/ui"

const Stats = ({ data }: { data: any }) => {
	return (
		<div className="grid grid-cols-2 gap-4">
			{WakaTimeMapSats({ ...data }).map((item, index) => {
				return (
					<CardCustom key={index} className="p-4">
						<Typography.Text variant="xs/normal" className="flex gap-2 items-center mb-2">
							<item.icon size={20} />
							{item.label}
						</Typography.Text>
						<Typography.Title variant="5/semibold">{item.value}</Typography.Title>
					</CardCustom>
				)
			})}
		</div>
	)
}

export default Stats
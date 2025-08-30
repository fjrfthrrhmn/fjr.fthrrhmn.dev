import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";



import { WakatimeLanguageType } from "@/types";



import { CardCustom, Typography } from "@/components/ui";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";





const Languages = ({ data }: { data: WakatimeLanguageType[] }) => {
	const chartData = data.map((lang) => ({
		name: lang.name,
		value: lang.percent
	}))

	const chartConfig = {
		value: {
			label: "Usage",
			color: "#2dd4bf"
		}
	} satisfies ChartConfig

	return (
		<CardCustom className="col-span-5">
			<div className="flex flex-col mb-6">
				<Typography.Title variant="6/bold">Top Languages</Typography.Title>
				<Typography.Text variant="sm/normal">
					Persentase waktu coding berdasarkan bahasa
				</Typography.Text>
			</div>

			<ChartContainer config={chartConfig} className="w-full h-[200px]">
				<BarChart data={chartData}>
					<CartesianGrid vertical={false} />
					<XAxis
						dataKey="name"
						tickLine={false}
						tickMargin={10}
						axisLine={false}
					/>
					<ChartTooltip cursor={false} content={<ChartTooltipContent />} />
					<Bar dataKey="value" fill="var(--color-value)" radius={8} />
				</BarChart>
			</ChartContainer>
		</CardCustom>
	)
}

export default Languages
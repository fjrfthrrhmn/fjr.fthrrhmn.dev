import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";



import { WakatimeCategoryType } from "@/types";



import { CardCustom, Typography } from "@/components/ui";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";





const Categories = ({ data }: { data: WakatimeCategoryType[] }) => {
	const chartData = data.map((cat) => ({
		name: cat.name,
		value: cat.percent
	}))

	const chartConfig = {
		value: {
			label: "Usage",
			color: "#2dd4bf"
		}
	} satisfies ChartConfig

	return (
		<CardCustom className="col-span-3">
			<div className="flex flex-col mb-6">
				<Typography.Title variant="6/bold">Bar Chart</Typography.Title>
				<Typography.Text variant="sm/normal">Lorem ipsum dolor</Typography.Text>
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

export default Categories
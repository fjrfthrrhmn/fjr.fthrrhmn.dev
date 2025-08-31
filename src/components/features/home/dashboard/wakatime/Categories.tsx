import { useTranslations } from "next-intl"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import { WakatimeCategoryType } from "@/types"

import { CardCustom, Typography } from "@/components/ui"
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent
} from "@/components/ui/chart"

const Categories = ({ data }: { data: WakatimeCategoryType[] }) => {
	const t = useTranslations("Wakatime")

	const chartData = data.map((cat) => ({
		name: cat.name,
		value: cat.percent
	}))

	const chartConfig = {
		value: {
			label: t("tooltip"),
			color: "#2dd4bf"
		}
	} satisfies ChartConfig

	return (
		<CardCustom className="lg:col-span-3">
			<div className="flex flex-col mb-6 h-[130px]">
				<Typography.Title variant="6/bold">
					{t("codingCategories")}
				</Typography.Title>
				<Typography.Text variant="sm/normal">
					{t("codingCategoriesDesc")}
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

export default Categories

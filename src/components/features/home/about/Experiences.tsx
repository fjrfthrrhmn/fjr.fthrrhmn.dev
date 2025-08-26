import Image from "next/image"

import { ExperienceProps } from "@/types"

import { useExpandStore } from "@/stores/expand-store"
import { cn } from "@/lib/utils"

import { Avatar, Title, Typography } from "@/components/ui"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

import { ExperiencesData } from "@/data/home"

const Experiences = () => {
	const expanded = useExpandStore((state) => state.expanded)

	return (
		<>
			<Title text="Experiences" />

			<ScrollArea className={cn(expanded ? "h-[600px]" : "h-[400px]", "mt-6")}>
				{ExperiencesData.map((item, index) => (
					<ExperienceItem key={index} {...item} />
				))}

				<ScrollBar orientation="vertical" />
			</ScrollArea>
		</>
	)
}

export { Experiences }

const ExperienceItem = ({ ...props }: ExperienceProps) => {
	const { company, endDate, logo, role, startDate } = props

	return (
		<div className="w-full flex gap-4 items-center not-first:mt-6">
			<Avatar size="size-10">
				<Image src={logo} alt={company} width={100} height={100} unoptimized />
			</Avatar>

			<div className="flex-1">
				<Typography.Text variant="sm/semibold" className="text-foreground">
					{company}
				</Typography.Text>
				<Typography.Text variant="xs/normal">{role}</Typography.Text>
			</div>

			<Typography.Text variant="xs/normal" className="text-end">
				{formatExperienceDate(startDate, endDate)}
			</Typography.Text>
		</div>
	)
}

const formatExperienceDate = (
	startDate: { month: string; year: number },
	endDate: { month: string; year: number } | "Present"
) => {
	if (endDate === "Present") {
		return (
			<>
				{startDate.month} {startDate.year}
				<br />
				{endDate}
			</>
		)
	}

	return (
		<>
			{startDate.month} {startDate.year} - {endDate.month}
			<br />
			{endDate.year}
		</>
	)
}

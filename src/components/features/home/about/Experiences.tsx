import Image from "next/image";



import { ExperienceProps } from "@/types";



import { useExpandStore } from "@/stores/expand-store";
import { cn } from "@/lib/utils";



import { Avatar, Title, Typography } from "@/components/ui";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";



import { ExperiencesData } from "@/data/home";





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
		<div className="w-full flex flex-col sm:flex-row sm:justify-between gap-2 not-first:mt-6">
			<div className="flex items-center gap-4">
				<Avatar size="size-10">
					<Image
						src={logo}
						alt={company}
						width={100}
						height={100}
						unoptimized
					/>
				</Avatar>

				<div className="flex-1">
					<Typography.Text variant="sm/semibold" className="text-foreground">
						{company}
					</Typography.Text>
					<Typography.Text variant="xs/normal">{role}</Typography.Text>
				</div>
			</div>

			<Typography.Text variant="xs/normal" className="sm:text-end">
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
			<span>
				{startDate.month} {startDate.year}
				<br className="hidden sm:block" />
				{endDate}
			</span>
		)
	}

	return (
		<span>
			{startDate.month} - {endDate.month}
			<br className="hidden sm:block" />{" "}
			{endDate.year}
		</span>
	)
}
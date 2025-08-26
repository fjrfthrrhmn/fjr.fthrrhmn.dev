import Image from "next/image"

import { useExpandStore } from "@/stores/expand-store"
import { cn } from "@/lib/utils"

import { Avatar, Title, Typography } from "@/components/ui"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

const Experiences = () => {
	const expanded = useExpandStore((state) => state.expanded)

	return (
		<>
			<Title text="Experiences" />

			<ScrollArea className={cn(expanded ? "h-[600px]" : "h-[400px]", "mt-6")}>
				{[...Array(8)].map((item) => {
					return <ExperienceItem key={item} />
				})}

				<ScrollBar orientation="vertical" />
			</ScrollArea>
		</>
	)
}

export { Experiences }

const ExperienceItem = () => {
	return (
		<div className="w-full flex gap-4 items-center not-first:mt-6">
			<Avatar size="size-8">
				<Image
					src={
						"https://i.pinimg.com/736x/5e/46/f4/5e46f453dc9073f168464c2563d672a0.jpg"
					}
					alt="experience"
					width={100}
					height={100}
					unoptimized
				/>
			</Avatar>
			<div className="flex-1">
				<Typography.Text variant="sm/semibold" className="text-foreground">
					FathForce
				</Typography.Text>
				<Typography.Text variant="xs/normal">
					FullStack Developer
				</Typography.Text>
			</div>

			<Typography.Text variant="xs/normal" className="text-end">
				Sep - Des <br /> 2025
			</Typography.Text>
		</div>
	)
}

import { ChevronDown } from "lucide-react"

import { useExpandStore } from "@/stores/expand-store"
import { cn } from "@/lib/utils"

import { Button, Title, Typography } from "@/components/ui"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

const TEXTS = [
	"Hey! I’m Akash, a creative 25-year-old who loves building products with code.",
	"I have always been curious about how things work since my childhood. This curiosity led me to the world of programming and computer science. When I was 16, I tried writing a script to automate a repetitive task while creating 3D graphics in a software called Blender. That’s when I learned Python - to automate tasks for saving time, which made me feel like a superhero!",
	"Since then, I have been working on improving my skills in Web development. I decided to dip my feet in web development because I wanted to build products that were easily accessible to anyone on any device. It always motivates me when I hear how my project has helped someone solve their problem."
]

const Profile = () => {
	const expanded = useExpandStore((state) => state.expanded)
	const setExpanded = useExpandStore((state) => state.setExpanded)
	const items = expanded ? TEXTS : TEXTS.slice(0, 2)

	return (
		<>
			<Title text="Profile" />

			<ScrollArea
				className={cn(expanded ? "h-[600px]" : "h-[400px]", "mt-6")}
			>
				<div className="flex flex-col gap-4">
					{items.map((item, i) => (
						<Typography.Text key={i}>{item}</Typography.Text>
					))}
				</div>

				<ScrollBar orientation="vertical" />
			</ScrollArea>

			{!expanded && (
				<Button
					onClick={setExpanded}
					className="w-max mt-4 flex items-center gap-2"
				>
					<span>{expanded ? "Show less" : "Read more"}</span>
					<ChevronDown
						strokeWidth={2.5}
						size={20}
						className={cn("transition-transform", expanded && "rotate-180")}
					/>
				</Button>
			)}
		</>
	)
}

export { Profile }

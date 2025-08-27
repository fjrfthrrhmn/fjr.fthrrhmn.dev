"use client"

import { BotIcon } from "lucide-react"
import { toast } from "sonner"

import { Button, CardCustom, Container, Title } from "@/components/ui"

import { AboutData } from "@/data/home"

const AboutSection = () => {
	return (
		<Container padding="py-32" className="space-y-10">
			<Title
				text="Who am I?"
				variant={"1/extrabold"}
				description="Here’s a peek into my journey, skills, and experiences."
			>
				<Button
					onClick={() =>
						toast.info("Oops! This feature isn’t available yet 🚧")
					}
				>
					<BotIcon />
					Ask AI About Me
				</Button>
			</Title>

			<div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
				{AboutData.map((item) => (
					<CardCustom key={item.name} className={item.className}>
						<item.component />
					</CardCustom>
				))}
			</div>
		</Container>
	)
}

export default AboutSection

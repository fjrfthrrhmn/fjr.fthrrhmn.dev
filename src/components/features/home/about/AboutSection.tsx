"use client"

import { BotIcon } from "lucide-react"
import { toast } from "sonner"

import { Button, CardCustom, Container, Title } from "@/components/ui"

import { Experiences, Profile, Skills,  } from "./index"

export const ABOUT_CARDS = [
	{
		id: "profile",
		span: "lg:col-span-4",
		content: <Profile />
	},
	{
		id: "experiences",
		span: "lg:col-span-3",
		content: <Experiences />
	},
	{
		id: "skills",
		span: "lg:col-span-7",
		content: <Skills />
	}
]

const AboutSection = () => {
	return (
		<Container padding="py-20" className="space-y-10">
			<div className="flex justify-between items-end">
				<Title
					text="Who am I?"
					variant={"1/extrabold"}
					description="Here’s a peek into my journey, skills, and experiences."
				/>

				<Button
					onClick={() =>
						toast.info("Oops! This feature isn’t available yet 🚧")
					}
				>
					<BotIcon />
					Ask AI About Me
				</Button>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
				{ABOUT_CARDS.map(({ id, span, content }) => (
					<CardCustom key={id} className={span}>
						{content}
					</CardCustom>
				))}
			</div>
		</Container>
	)
}

export default AboutSection

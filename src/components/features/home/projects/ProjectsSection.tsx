import Image from "next/image"
import Link from "next/link"

import { ArrowRight } from "lucide-react"

import {
	Button,
	CardCustom,
	Container,
	Title,
	Typography
} from "@/components/ui"

const ProjectsSection = () => {
	return (
		<Container padding="py-20" className="space-y-10">
			<div className="flex items-end justify-between w-full">
				<Title
					text="Projects"
					description="I love building products that solve problems. I take pride in looking at things from end users’ perspectives."
					variant="1/extrabold"
				/>
				<Typography.Text className="flex items-center gap-2 underline underline-offset-8 decoration-teal-400">
					<Link href={"#"}>View all projects</Link>
					<ArrowRight />
				</Typography.Text>
			</div>

			<div className="grid grid-cols-2 gap-6">
				{[...Array(4)].map((item, index) => {
					return (
						<CardCustom key={index} className="group">
							<div className="flex flex-col justify-between mb-6">
								<Typography.Title variant="2/extrabold">UnTab</Typography.Title>

								<div className="flex-1 flex flex-col gap-4 my-6">
									<Typography.Text>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Ipsam quaerat, facere doloribus quae quam odio optio ratione
										placeat veniam architecto.
									</Typography.Text>
									<Typography.Text>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Nobis, aspernatur.
									</Typography.Text>
								</div>

								<div className="flex justify-between">
									<Button>
										Live
										<ArrowRight className="-rotate-45" />
									</Button>
									<Button variant="outline">
										Github <ArrowRight className="-rotate-45" />
									</Button>
								</div>
							</div>

							<div className="relative overflow-hidden rounded-2xl aspect-video object-cover">
								<Image
									src={
										"https://i.pinimg.com/736x/df/c4/af/dfc4af36361640d225bca68e1365d8e1.jpg"
									}
									alt="project"
									width={100}
									height={100}
									className="w-full h-full rounded-2xl object-cover grayscale-100 group-hover:grayscale-0 transition duration-300 ease-linear"
									unoptimized
								/>
							</div>
						</CardCustom>
					)
				})}
			</div>
		</Container>
	)
}

export default ProjectsSection

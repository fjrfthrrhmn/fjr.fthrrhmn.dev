import { LucideArrowRight, LucideSend } from "lucide-react"

import { BuiltWith } from "@/components/shared"
import { Button, Container, Typography } from "@/components/ui"
import { BoxReveal } from "@/components/widgets"

const HeroSection = () => {
	return (
		<Container className="flex min-h-[800px] flex-col">
			<div className="flex flex-1 items-center">
				<div className="space-y-6 max-w-xl">
					<BoxReveal>
						<Typography.Title variant="1/extrabold">
							Hai there, I’m <br />{" "}
							<span
								className="text-transparent bg-clip-text 
								bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-500
               [background-size:200%_200%] animate-[gradient_10s_ease_infinite]"
							>
								Fajar Fathurrahman
							</span>
						</Typography.Title>
					</BoxReveal>
					<BoxReveal>
						<Typography.Text>
							I’m passionate about building innovative products on the web
							keeping good design in mind. I like learning new technologies, and
							contributing to open source.
						</Typography.Text>
					</BoxReveal>

					<BoxReveal>
						<div className="w-full flex flex-col sm:flex-row justify-center gap-2">
							<Button>
								<LucideSend strokeWidth={2.5} />
								Lets Connect
							</Button>
							<Button variant="outline">
								Read More
								<LucideArrowRight />
							</Button>
						</div>
					</BoxReveal>
				</div>
			</div>

			<BuiltWith />
		</Container>
	)
}

export default HeroSection

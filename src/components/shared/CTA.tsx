import { ArrowRight } from "lucide-react"

import { Button, CardCustom, Container, Typography } from "../ui"

const CTA = () => {
	return (
		<Container padding="py-20">
			<CardCustom className="w-full h-max px-12 py-8">
				<div className="grid grid-cols-3 items-center gap-x-10">
					<div className="col-span-2 flex flex-col gap-6 max-w-xl">
						<Typography.Title variant="1/extrabold">
							Let’s get{" "}
							<span
								className="text-transparent bg-clip-text 
								bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-500
               [background-size:200%_200%] animate-[gradient_10s_ease_infinite]"
							>
								in touch
							</span>
						</Typography.Title>
						<Typography.Text>
							I’m open to hearing about new opportunities. Feel free to reach
							out to me if you have a question, or just want to say hi!
						</Typography.Text>
					</div>

					<Button size={"lg"}>
						Start a conversion <ArrowRight strokeWidth={2.5} />
					</Button>
				</div>
			</CardCustom>
		</Container>
	)
}

export default CTA

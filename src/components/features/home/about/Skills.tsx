import { SiJavascript } from "react-icons/si"

import { Title } from "@/components/ui"
import GlassIcon from "@/components/widgets/GlassIcon"

const Skills = () => {
	return (
		<div>
			<Title
				text="My skills"
				description="I have experience in various programming languages and frameworks."
			/>

			<div className="flex justify-start gap-x-6 gap-y-10 flex-wrap mt-6 mb-6">
				{[...Array(20)].map((item) => {
					return (
						<GlassIcon
							name="JavaScript"
							icon={SiJavascript}
							background="bg-[hsla(0,0%,100%,0.15)] backdrop-blur-[0.75em]"
						/>
					)
				})}
			</div>
		</div>
	)
}

export { Skills }

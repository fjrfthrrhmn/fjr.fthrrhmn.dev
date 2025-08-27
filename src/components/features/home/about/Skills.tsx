import { Title } from "@/components/ui"
import { GlassIcon } from "@/widgets"

import { SkillsData } from "@/data/home"

const Skills = () => {
	return (
		<div>
			<Title
				text="My skills"
				description="I have experience in various programming languages and frameworks."
			/>

			<div className="my-10 relative z-10 flex flex-wrap justify-center gap-4 sm:gap-y-10 lg:gap-x-8 lg:gap-y-12 ">
				{SkillsData.map((item, index) => {
					return (
						<GlassIcon
							key={index}
							name={item.name}
							icon={item.icon}
							background={item.background}
						/>
					)
				})}
			</div>
		</div>
	)
}

export { Skills }

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

			<div className="flex justify-start gap-x-8 gap-y-10 flex-wrap mt-6 mb-6">
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

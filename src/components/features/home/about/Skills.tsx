import { useTranslations } from "next-intl"

import { Title } from "@/components/ui"
import { GlassIcon } from "@/widgets"

import { SkillsData } from "@/data/home"

const Skills = () => {
	const t = useTranslations("SkillsSection")

	return (
		<div>
			<Title text={t("title")} description={t("description")} />

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

"use client";

import { useTranslations } from "next-intl";



import { BotIcon } from "lucide-react";
import { toast } from "sonner";



import { Button, CardCustom, Container, Title } from "@/components/ui";



import { AboutData } from "@/data/home";





const AboutSection = () => {
	const t = useTranslations("AboutSection")

	return (
		<Container padding="py-32" className="space-y-10">
			<Title
				text={t("title")}
				variant={"1/extrabold"}
				description={t("description")}
			>
				<Button onClick={() => toast.info(t("descriptionToast"))}>
					<BotIcon />
					{t("buttonOne")}
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
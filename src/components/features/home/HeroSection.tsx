import { useTranslations } from "next-intl";
import Image from "next/image";



import { LucideArrowRight, LucideSend } from "lucide-react";



import { BuiltWith } from "@/shared";
import { Button, Container, Typography } from "@/ui";
import { BoxReveal } from "@/widgets";





const HeroSection = () => {
	const t = useTranslations("HeroSection")

	return (
		<Container className="pt-28">
			<div className="flex-1 grid grid-cols-1 lg:grid-cols-3 items-center gap-6">
				<div className="space-y-6 order-last lg:order-first lg:col-span-2">
					<BoxReveal>
						<Typography.Title variant="1/bold">
							{t("title")}
							<br />{" "}
							<span
								className="text-transparent bg-clip-text 
								bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-500
               [background-size:200%_200%] animate-[gradient_10s_ease_infinite]"
							>
								{t("name")}
							</span>
						</Typography.Title>
					</BoxReveal>
					<BoxReveal>
						<Typography.Text>{t("description")}</Typography.Text>
					</BoxReveal>

					<BoxReveal>
						<div className="w-full flex flex-col sm:flex-row sm:justify-center gap-4">
							<Button>
								<LucideSend strokeWidth={2.5} />
								{t("buttonOne")}
							</Button>
							<Button variant="outline">
								{t("buttonTwo")}
								<LucideArrowRight />
							</Button>
						</div>
					</BoxReveal>
				</div>

				<Image
					src="https://i.pinimg.com/736x/39/86/91/398691f123726a5763e9c47980964fff.jpg"
					alt="Profile"
					width={100}
					height={100}
					className="w-full h-full rounded-xl object-cover aspect-square sm:aspect-video bg-center border-8 border-zinc-50/10"
					priority
				/>
			</div>

			<BuiltWith />
		</Container>
	)
}

export default HeroSection
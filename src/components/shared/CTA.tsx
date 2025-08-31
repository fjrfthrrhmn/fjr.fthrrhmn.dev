import { useTranslations } from "next-intl";



import { MessagesSquare } from "lucide-react";



import { Button, CardCustom, Container, Typography } from "../ui";


const CTA = () => {
	const t = useTranslations("CTA")

	return (
		<Container padding="py-20">
			<CardCustom className="w-full h-max md:px-12 md:py-8">
				<div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-y-4 gap-x-10">
					<div className="lg:col-span-2 flex flex-col gap-6 w-full sm:max-w-xl">
						<Typography.Title variant="1/extrabold">
							{t("title")}{" "}
							<span
								className="text-transparent bg-clip-text 
								bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-500
               [background-size:200%_200%] animate-[gradient_10s_ease_infinite]"
							>
								{t("highlight")}
							</span>
						</Typography.Title>
						<Typography.Text>{t("description")}</Typography.Text>
					</div>

						<Button size={"lg"}>
							<MessagesSquare strokeWidth={2.5} />
							{t("button")}
						</Button>
				</div>
			</CardCustom>
		</Container>
	)
}

export default CTA
import { useTranslations } from "next-intl"

import { Container, Title } from "@/components/ui"

import { Content, Sidebar } from "./index"

const DashboardSection = () => {
	const t = useTranslations("DashboardSection")

	return (
		<Container padding="py-32">
			<Title
				text={t("title")}
				description={t("description")}
				variant="1/extrabold"
			/>

			{/* Sidebar */}
			<div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-4 w-full">
				<Sidebar />
				<Content />
			</div>
		</Container>
	)
}

export default DashboardSection

import { useTranslations } from "next-intl"
import Link from "next/link"

import { ArrowRight } from "lucide-react"

import { Container, Title, Typography } from "@/components/ui"

import { CertificatesList } from "./"

const CertificatesSection = () => {
	const t = useTranslations("CertificatesSection")

	return (
		<Container padding="py-20" className="space-y-10">
			<Title
				text={t("title")}
				description={t("description")}
				variant="1/extrabold"
			>
				{[...Array(4)].length > 4 && (
					<Typography.Text className="flex items-center justify-end gap-2 underline underline-offset-8 decoration-teal-400">
						<Link href={"#"}>{t("buttonAll")}</Link>
						<ArrowRight />
					</Typography.Text>
				)}
			</Title>

			<CertificatesList />
		</Container>
	)
}

export default CertificatesSection

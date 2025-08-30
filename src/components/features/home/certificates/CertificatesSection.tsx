import { Container, Title } from "@/components/ui"

import { CertificatesList } from "./"

const CertificatesSection = () => {
	return (
		<Container padding="py-20" className="space-y-10">
			<Title
				text="Certificates"
				description="I love building products that solve problems. I take pride in looking at things from end users’ perspectives."
				variant="1/extrabold"
			/>

			<CertificatesList />
		</Container>
	)
}

export default CertificatesSection

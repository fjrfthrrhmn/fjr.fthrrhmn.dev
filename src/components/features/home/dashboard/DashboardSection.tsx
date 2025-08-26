import { Container, Title } from "@/components/ui"

import { Content, Sidebar } from "./index"

const DashboardSection = () => {
	return (
		<Container padding="py-32">
			<Title
				text="My Dashboard"
				description="I love building products that solve problems. I take pride in looking at things from end users’ perspectives."
				variant="1/extrabold"
			/>

			{/* Sidebar */}
			<div className="grid grid-cols-12 gap-4 mt-10">
				<Sidebar />
				<Content />
			</div>
		</Container>
	)
}

export default DashboardSection

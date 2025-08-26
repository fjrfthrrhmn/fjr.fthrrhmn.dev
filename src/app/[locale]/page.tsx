"use server"

import {
	AboutSection,
	DashboardSection,
	HeroSection,
	PhotosMarquee,
	ProjectsSection
} from "@/components/features/home"
import CTA from "@/components/shared/CTA"
import { DotPattern } from "@/components/widgets"

export default async function Home() {
	return (
		<main className="bg-zinc-950">
			<div className="bg-background rounded-b-4xl shadow-2xl">
				<div className="absolute top-0 left-0 w-full h-[400px]">
					<DotPattern
						width={12}
						height={12}
						className="[mask-image:radial-gradient(ellipse_at_top_left,white_10%,transparent_80%)]"
					/>
				</div>
				<HeroSection />
				<PhotosMarquee />
				<AboutSection />
				<DashboardSection />
				<ProjectsSection />
				<CTA />
			</div>
		</main>
	)
}

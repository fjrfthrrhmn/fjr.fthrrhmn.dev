'use client'
import {
	IconBriefcase,
	IconCertificate,
	IconDashboard,
	IconFolderCode,
	IconStack,
	IconUser
} from "@tabler/icons-react"

import { FloatingDock } from "@/widgets"

const NAV_LINKS = [
	{
		title: "About",
		icon: IconUser,
		href: "#about"
	},
	{
		title: "Dashboard",
		icon: IconDashboard,
		href: "#dashboard"
	},
	{
		title: "Experiences",
		icon: IconBriefcase,
		href: "#experiences"
	},
	{
		title: "Certificates",
		icon: IconCertificate,
		href: "#certificates"
	},
	{
		title: "Projects",
		icon: IconFolderCode,
		href: "#projects"
	},
	{
		title: "Skills",
		icon: IconStack,
		href: "#skills"
	}
]

const Navigation = () => {
	return (
		<>
			<nav className="fixed bottom-6 z-50 w-full h-max mx-auto">
				<div className="w-full mx-auto flex gap-2 justify-end md:justify-center px-2 sm:px-4 md:w-max">
					<FloatingDock items={NAV_LINKS} />
				</div>
			</nav>
		</>
	)
}

export default Navigation

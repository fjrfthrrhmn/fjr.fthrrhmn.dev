"use client"

import { useSidebarStore } from "@/stores/sidebar-store"

import { CardCustom } from "@/components/ui"

import { SidebarData } from "@/data/home"

const Sidebar = () => {
	const isActive = useSidebarStore((state) => state.isActive)
	const setActive = useSidebarStore((state) => state.setActive)

	return (
		<CardCustom className="w-max lg:w-full h-max">
			<div className="flex lg:flex-col flex-row gap-6 items-center justify-start">
				{SidebarData.map((item) => {
					const isCurrent = isActive === item.name
					const classes = isCurrent ? "" : "text-zinc-600"

					return (
						<button
							key={item.name}
							title={item.name}
							onClick={() => setActive(item.name)}
							aria-label={`toggle-sidebar-${item.name}`}
							disabled={item.disabled}
						>
							<span className="sr-only">{item.name}</span>
							<item.icon size={24} className={classes} />
						</button>
					)
				})}
			</div>
		</CardCustom>
	)
}

export default Sidebar

"use client"

import { useSidebarStore } from "@/stores/sidebar-store"

import { CardCustom } from "@/components/ui"

import { SidebarData } from "@/data/home"

const Sidebar = () => {
	const isActive = useSidebarStore((state) => state.isActive)
	const setActive = useSidebarStore((state) => state.setActive)

	return (
		<CardCustom className="col-span-1 flex flex-col gap-6 items-center justify-start px-4 py-6 w-full h-max">
			{SidebarData.map((item) => {
				const isCurrent = isActive === item.name
				const classes = isCurrent ? "" : "text-zinc-600"

				return (
					<button
						key={item.name}
						title={item.name}
						onClick={() => setActive(item.name)}
						aria-label={`toggle-sidebar-${item.name}`}
					>
						<span className="sr-only">{item.name}</span>
						<item.icon size={24} className={classes} />
					</button>
				)
			})}
		</CardCustom>
	)
}

export default Sidebar

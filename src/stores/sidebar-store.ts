import { create } from "zustand"

export type ContentType = "Github" | "WakaTime" | "MonkeyType"

interface SidebarState {
	isActive: string
	setActive: (name: string) => void
	loading: boolean
	setLoading: (loading: boolean) => void
}

export const useSidebarStore = create<SidebarState>((set) => ({
	isActive: "Github",
	setActive: (name) => set({ isActive: name }),
	loading: true,
	setLoading: (loading) => set({ loading })
}))

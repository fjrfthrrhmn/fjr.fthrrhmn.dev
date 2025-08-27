import { create } from "zustand"

export type ContentType = 'Github' | 'LeetCode' | 'MonkeyType' 

interface SidebarState {
	isActive: string
	setActive: (name: string) => void
}

export const useSidebarStore = create<SidebarState>((set) => ({
	isActive: "Github",
	setActive: (name) => set({ isActive: name })
}))

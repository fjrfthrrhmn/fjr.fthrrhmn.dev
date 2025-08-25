import { create } from "zustand"

interface ExpandState {
	expanded: boolean
	setExpanded: () => void
}

export const useExpandStore = create<ExpandState>((set) => ({
	expanded: false,
	setExpanded: () => set((state) => ({ expanded: !state.expanded }))
}))

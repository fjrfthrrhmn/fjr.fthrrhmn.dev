export type WakatimeStatsType = {
	id: string
	status: string
	username: string
	editors: WakatimeEditorsType[]
	languages: WakatimeLanguageType[]
	categories: WakatimeCategoryType[]
	bestDay: {
		date: string
		total_seconds: number
		text: string
	}
	time: {
		range: string
		start: string
		end: string
		timezone: string
		total: string
		averageDaily: number
		averageText: string
	}
	allTime: {
		totalSeconds: number
		text: string
		dailyAverage: number
		start: string
		end: string
	}
}

export interface WakatimeEditorsType {
	total_seconds: number
	name: string
	percent: number
	digital: string
	decimal: string
	text: string
	hours: number
	minutes: number
}

export interface WakatimeCategoryType {
	name: string
	total_seconds: number
	percent: number
	digital: string
	decimal: string
	text: string
	hours: number
	minutes: number
}

export interface WakatimeLanguageType {
	name: string
	total_seconds: number
	percent: number
	digital: string
	decimal: string
	text: string
	hours: number
	minutes: number
}
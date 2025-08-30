export type WakatimeStatsType = {
	id: string
	status: string
	username: string
	photo: string
	
	fullName: string
	city: WakatimeCityType
	profileUrl: string

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

export interface WakatimeCityType {
	ascii_name: string
	ascii_state: string
	country: string
	country_code: string
	id: string
	name: string
	population: number
	short_title: string
	state: string
	timezone: string
	title: string
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
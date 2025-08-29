export interface WakatimeStatsType {
	data: {
		id: string
		user_id: string
		range: string
		timeout: number
		writes_only: boolean
		holidays: number
		status: string
		daily_average: number
		is_already_updating: boolean
		human_readable_total: string
		days_including_holidays: number
		days_minus_holidays: number
		total_seconds: number
		human_readable_daily_average_including_other_language: string
		categories: WakaCategoryType[]
		human_readable_total_including_other_language: string
		is_stuck: boolean
		percent_calculated: number
		languages: WakaLanguageType[]
		is_up_to_date: boolean
		daily_average_including_other_language: number
		operating_systems: WakaUsageStatType[]
		human_readable_daily_average: string
		is_up_to_date_pending_future: boolean
		editors: WakaUsageStatType[]
		total_seconds_including_other_language: number
		is_cached: boolean
		username: string
		is_including_today: boolean
		human_readable_range: string
		is_coding_activity_visible: boolean
		is_language_usage_visible: boolean
		is_editor_usage_visible: boolean
		is_category_usage_visible: boolean
		is_os_usage_visible: boolean
	}
}

export interface WakaCategoryType {
	name: string
	total_seconds: number
	percent: number
	digital: string
	decimal: string
	text: string
	hours: number
	minutes: number
}

export interface WakaLanguageType {
	name: string
	total_seconds: number
	percent: number
	digital: string
	decimal: string
	text: string
	hours: number
	minutes: number
}

export interface WakaUsageStatType {
	total_seconds: number
	name: string
	percent: number
	digital: string
	decimal: string
	text: string
	hours: number
	minutes: number
}

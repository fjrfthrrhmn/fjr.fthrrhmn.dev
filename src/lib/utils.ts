import { clsx, type ClassValue } from "clsx"
import { format as dateFnsFormat, setDefaultOptions } from "date-fns"
import { enUS, tr } from "date-fns/locale"
import { twMerge } from "tailwind-merge"

import {
	ACCENTS_REGEX,
	APP_CONFIG,
	CHAR_MAP,
	CURRENCY_CONFIG,
	DEFAULT_CURRENCY,
	EDGE_DASHES_REGEX,
	INVALID_CHARS_REGEX,
	MULTIPLE_DASHES_REGEX,
	TURKISH_CHARS_REGEX,
	WHITESPACE_REGEX,
	type CurrencyCode
} from "@/constants"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export const sleep = (ms: number) => {
	return new Promise((resolve) => setTimeout(resolve, ms))
}

export const slugify = (text: string) => {
	return text
		.toLowerCase()
		.normalize("NFD")
		.replace(ACCENTS_REGEX, "")
		.replace(TURKISH_CHARS_REGEX, (c) => CHAR_MAP[c as keyof typeof CHAR_MAP])
		.replace(WHITESPACE_REGEX, "-")
		.replace(INVALID_CHARS_REGEX, "")
		.replace(MULTIPLE_DASHES_REGEX, "-")
		.replace(EDGE_DASHES_REGEX, "")
}

export const formatDate = (
	date: Date,
	format = "d MMMM yyyy",
	locale: "tr" | "en" = APP_CONFIG.DEFAULT_LANGUAGE
) => {
	setDefaultOptions({ locale: locale === "tr" ? tr : enUS })
	return dateFnsFormat(date, format)
}

export const formatCurrency = (
	amount: number,
	currency: CurrencyCode = DEFAULT_CURRENCY
) => {
	const config = CURRENCY_CONFIG[currency]

	return new Intl.NumberFormat(config.locale, {
		style: "currency",
		currency: currency,
		minimumFractionDigits: config.minimumFractionDigits,
		maximumFractionDigits: config.maximumFractionDigits
	}).format(amount)
}

export const calculateStreaks = (
	weeks: { contributionDays: { date: string; contributionCount: number }[] }[]
) => {
	const days = weeks.flatMap((week) => week.contributionDays)
	let maxStreak = 0
	let currentStreak = 0
	let tempStreak = 0

	for (let i = 0; i < days.length; i++) {
		if (days[i].contributionCount > 0) {
			tempStreak++
			if (tempStreak > maxStreak) maxStreak = tempStreak
		} else {
			tempStreak = 0
		}
	}

	// hitung current streak (hari terakhir)
	for (let i = days.length - 1; i >= 0; i--) {
		if (days[i].contributionCount > 0) currentStreak++
		else break
	}

	return { currentStreak, maxStreak }
}
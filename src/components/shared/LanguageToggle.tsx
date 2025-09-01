"use client"

import { useLocale } from "next-intl"
import { usePathname, useRouter } from "next/navigation"

import { Button } from "@/ui"

const LanguageToggle = () => {
	const router = useRouter()
	const pathname = usePathname()
	const locale = useLocale() as "id" | "en"

	const nextLocale = locale === "en" ? "id" : "en"

	const switchLanguage = () => {
		const segments = pathname.split("/")
		const isLocalePrefix = segments[1] === "en" || segments[1] === "id"

		const cleanPath = isLocalePrefix
			? "/" + segments.slice(2).join("/")
			: pathname

		const nextPath = `/${nextLocale}${cleanPath === "/" ? "" : cleanPath}`

		router.replace(nextPath)
	}

	return (
		<Button onClick={switchLanguage}>{locale === "en" ? "ID" : "EN"}</Button>
	)
}

export default LanguageToggle

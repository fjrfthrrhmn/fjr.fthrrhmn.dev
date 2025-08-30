"use client";

import { useLocale } from "next-intl";
import { useParams, usePathname, useRouter } from "next/navigation";



import { Button } from "@/ui";





export const LanguageToggle = () => {
	const router = useRouter()
	const pathname = usePathname()
	const locale = useLocale() as "id" | "en"

	const nextLocale = locale === "en" ? "id" : "en"

	const switchLanguage = () => {
		// hapus prefix locale lama
		const segments = pathname.split("/")
		const isLocalePrefix = segments[1] === "en" || segments[1] === "id"

		const cleanPath = isLocalePrefix
			? "/" + segments.slice(2).join("/") // buang locale prefix
			: pathname

		// build ulang URL dengan nextLocale
		const nextPath = `/${nextLocale}${cleanPath === "/" ? "" : cleanPath}`

		router.replace(nextPath)
	}

	return (
		<Button onClick={switchLanguage}>
			{locale === "en" ? "🇮🇩 ID" : "🇬🇧 EN"}
		</Button>
	)
}
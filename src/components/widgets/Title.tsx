"use client"

import { Balancer } from "react-wrap-balancer"
import { useTranslations } from "next-intl"
import Link from "next/link"

import { Github } from "lucide-react"

import { APP_CONFIG } from "@/constants"

import { Button } from "@/ui"

export function Title() {
	const t = useTranslations("Dashboard")

	return (
		<div className="flex flex-col items-center justify-center gap-6 mt-20">
			<Balancer
				as="h1"
				className="text-2xl lg:text-5xl font-bold text-center text-black dark:text-white"
			>
				{t("title")}
			</Balancer>

			<Balancer as="div">
				<p className="text-center text-base px-3 max-w-3xl">
					{t.rich("description", {
						react: (chunks) => (
							<strong className="font-semibold">{chunks}</strong>
						),
						typescript: (chunks) => (
							<strong className="font-semibold">{chunks}</strong>
						),
						tailwind: (chunks) => (
							<strong className="font-semibold">{chunks}</strong>
						),
						tanstack: (chunks) => (
							<strong className="font-semibold">{chunks}</strong>
						)
					})}
				</p>
			</Balancer>
		</div>
	)
}

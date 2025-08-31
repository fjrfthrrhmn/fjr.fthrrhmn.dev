import { useLocale, useTranslations } from "next-intl"
import Image from "next/image"

import { WakatimeStatsType } from "@/types"

import { formatDate } from "@/lib/utils"

import {
	Avatar,
	AvatarFallback,
	CardCustom,
	Typography
} from "@/components/ui"

import { WakatimeUtils } from "../utils"

type HeaderProps = Pick<
	WakatimeStatsType,
	"username" | "time" | "photo" | "city"
>

const Header = ({ ...props }: HeaderProps) => {
	const t = useTranslations("Wakatime")
	const lang = useLocale() as "en" | "id"

	const { city, photo, time, username } = props

	return (
		<CardCustom>
			<div className="w-full flex flex-col sm:items-center sm:justify-between md:flex-row gap-4">
				<div className="w-full flex flex-col sm:flex-row sm:items-center gap-4">
					<Avatar size="size-12">
						<Image
							src={photo}
							alt="profile"
							width={100}
							height={100}
							unoptimized
						/>
						<AvatarFallback>{username.slice(0, 2)}</AvatarFallback>
					</Avatar>

					<div className="flex flex-col">
						<Typography.Title variant="4/semibold" className="capitalize">
							{username}
						</Typography.Title>
						<Typography.Text variant="xs/normal">
							{t("headerText")} {WakatimeUtils.formatRange(time.range, lang)}.
						</Typography.Text>
					</div>
				</div>

				<div className="flex flex-col sm:items-end w-full">
					<Typography.Title variant="6/semibold">
						{city.short_title}
					</Typography.Title>
					<Typography.Text variant="xs/normal">
						{formatDate(new Date(time.start), "d MMM")}
						{" - "}
						{formatDate(new Date(time.end))}
					</Typography.Text>
				</div>
			</div>
		</CardCustom>
	)
}

export default Header

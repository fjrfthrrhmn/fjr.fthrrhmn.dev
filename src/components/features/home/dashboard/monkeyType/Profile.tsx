import { useLocale } from "next-intl"
import Image from "next/image"

import { Flame } from "lucide-react"

import { MonkeyUserType } from "@/types/monkey-types"

import { formatDate } from "@/lib/utils"

import { Avatar, AvatarFallback, CardCustom, Typography } from "@/components/ui"

export type ProfileProps = {
	data: Pick<
		MonkeyUserType,
		| "uid"
		| "name"
		| "addedAt"
		| "discordAvatar"
		| "discordId"
		| "streak"
		| "maxStreak"
	>
}

const Profile = ({ data }: ProfileProps) => {
	const lang = useLocale() as "en" | "id"

	const SRC_AVATAR = `https://cdn.discordapp.com/avatars/${data.discordId}/${data.discordAvatar}.png`

	const bgStreak: Record<number, string> = {
		5: "bg-yellow-500/20 text-yellow-400",
		10: "bg-orange-500/20 text-orange-400",
		20: "bg-red-500/20 text-red-400"
	}

	const getBgStreak = (streak: number): string => {
		if (streak >= 20) return bgStreak[20]
		if (streak >= 10) return bgStreak[10]
		if (streak >= 5) return bgStreak[5]
		return "bg-gray-500/20 text-gray-400"
	}

	return (
		<CardCustom className="lg:col-span-2 px-4">
			<div className="flex items-center gap-4">
				<Avatar size="size-16">
					<Image
						src={SRC_AVATAR}
						alt="Profile"
						width={100}
						height={100}
						unoptimized
					/>
					<AvatarFallback>{data.name.slice(0, 2)}</AvatarFallback>
				</Avatar>

				<div className="flex flex-col gap-0">
					<Typography.Title variant="6/normal" className="capitalize">
						{data.name}
					</Typography.Title>
					<small>
						{lang === "en" ? "Joined" : "Bergabung"}{" "}
						{formatDate(new Date(data.addedAt), "d MMM yyyy", "id")}
					</small>

					<div
						className={`${getBgStreak(data.maxStreak)} px-2 py-0.5 h-max w-full rounded flex items-center gap-1 mt-2`}
					>
						<Flame size={18} />
						<small>{data.maxStreak} Max Streak</small>
					</div>
				</div>
			</div>

			{/* Progress Bar */}
		</CardCustom>
	)
}
export default Profile

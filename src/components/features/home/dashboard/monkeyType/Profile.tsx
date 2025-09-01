import { useLocale } from "next-intl"
import Image from "next/image"
import Link from "next/link"

import { Flame } from "lucide-react"

import { MonkeyUserType } from "@/types/monkey-types"

import { formatDate } from "@/lib/utils"

import { Avatar, AvatarFallback, CardCustom, Typography } from "@/components/ui"

import { MonkeyTypeUtils } from "../utils"

type ProfileProps = {
	profile: Pick<
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

const Profile = ({ profile }: ProfileProps) => {
	const { name, maxStreak, discordAvatar, discordId, addedAt } = profile
	const lang = useLocale() as "en" | "id"

	const SRC_AVATAR = `https://cdn.discordapp.com/avatars/${discordId}/${discordAvatar}.png`
	const COLOR = {
		TEXT: "text-amber-400",
		UNDERLINE: "decoration-amber-400"
	}

	return (
		<CardCustom className="lg:col-span-3 px-4">
			<div className="flex items-center  gap-4">
				<Avatar size="size-16">
					<Image
						src={SRC_AVATAR}
						alt="Profile"
						width={100}
						height={100}
						unoptimized
					/>
					<AvatarFallback>{profile.name.slice(0, 2)}</AvatarFallback>
				</Avatar>

				<div className="flex flex-col gap-0">
					<Link href={`https://monkeytype.com/profile/${name}`}>
						<Typography.Title
							variant="6/normal"
							className={`capitalize decoration-2 underline underline-offset-4 ${COLOR.UNDERLINE}`}
						>
							{name}
						</Typography.Title>
					</Link>
					<small>
						{lang === "en" ? "Joined" : "Bergabung"}{" "}
						{formatDate(new Date(addedAt), "d MMM yyyy", "id")}
					</small>

					<div
						className={`${MonkeyTypeUtils.getBgStreak(maxStreak)} px-2 py-0.5 h-max w-full rounded flex items-center gap-1 mt-2`}
					>
						<Flame size={18} />
						<small>{profile.maxStreak} Max Streak</small>
					</div>
				</div>
			</div>

			{/* Progress Bar */}
		</CardCustom>
	)
}
export default Profile

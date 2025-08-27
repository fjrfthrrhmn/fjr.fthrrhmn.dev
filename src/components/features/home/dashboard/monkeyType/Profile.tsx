import Image from "next/image"

import { MonkeyUserType } from "@/types/monkey-types"

import { formatDate } from "@/lib/utils"

import { Avatar, CardCustom, Typography } from "@/components/ui"

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
	const SRC_AVATAR =
		`https://cdn.discordapp.com/avatars/${data.discordId}/${data.discordAvatar}.png` ||
		"https://i.pinimg.com/736x/de/a8/68/dea868a8d880e9913c4ebb7a558b475f.jpg"

	return (
		<CardCustom className="col-span-2">
			<div className="flex items-center gap-4">
				<Avatar size="size-16">
					<Image
						src={SRC_AVATAR}
						alt="Profile"
						width={100}
						height={100}
						unoptimized
					/>
				</Avatar>
				<div>
					<Typography.Title variant="6/normal" className="capitalize">{data.name}</Typography.Title>
					<Typography.Text
						variant="xs/normal"
						title={`Joined ${formatDate(new Date(data.addedAt), "d MMM yyyy", "id")}`}
					>
						{formatDate(new Date(data.addedAt), "d MMM yyyy", "id")}
					</Typography.Text>
				</div>
			</div>

			{/* Progress Bar */}
		</CardCustom>
	)
}
export default Profile

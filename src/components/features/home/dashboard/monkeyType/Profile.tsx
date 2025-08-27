import { MonkeyUserType } from "@/types/monkey-types"

import { CardCustom, Typography } from "@/components/ui"

export type ProfileProps = {
	data: Pick<
		MonkeyUserType,
		"uid" | "name" | "addedAt" | "discordAvatar" | "streak" | "maxStreak"
	>
}

const Profile = ({ data }: ProfileProps) => {
	return (
		<CardCustom className="col-span-2">
			<div className="flex items-center gap-3">
				<img
					src={data.discordAvatar}
					alt={data.name}
					className="w-12 h-12 rounded-full"
				/>
				<div>
					<Typography.Title variant="6/normal">{data.name}</Typography.Title>
					<p className="text-sm text-muted-foreground">
						Joined {new Date(data.addedAt).toLocaleDateString()}
					</p>
				</div>
			</div>
			<div>
				<div className="flex justify-between text-sm">
					<span>🔥 Streak: {data.streak}</span>
					<span>Max: {data.maxStreak}</span>
				</div>
			</div>
		</CardCustom>
	)
}
export default Profile

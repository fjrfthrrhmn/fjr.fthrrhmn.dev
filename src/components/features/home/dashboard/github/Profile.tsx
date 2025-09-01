"use client"

import { MdVerified } from "react-icons/md"
import Image from "next/image"
import Link from "next/link"

import { GithubUserType } from "@/types"

import { Avatar, CardCustom, Typography } from "@/components/ui"

type ProfileProps = {
	profile: Pick<
		GithubUserType,
		"name" | "url" | "avatarUrl" | "bio" | "followers" | "following" | "login"
	>
}

const Profile = ({ profile }: ProfileProps) => {
	const { avatarUrl, name, url, bio } = profile
	const COLOR = {
		TEXT: "text-[#34d399]",
		UNDERLINE: "decoration-[#34d399]"
	}

	return (
		<CardCustom className="lg:col-span-2">
			<div className="flex flex-col sm:flex-row lg:flex-col gap-4">
				<Avatar size="size-16">
					<Image
						src={
							avatarUrl ||
							"https://i.pinimg.com/736x/de/a8/68/dea868a8d880e9913c4ebb7a558b475f.jpg"
						}
						alt="Profile"
						width={100}
						height={100}
						unoptimized
					/>
				</Avatar>

				<div className="flex flex-col">
					<div className="flex gap-2 items-center">
						<Link href={url} target="_blank" rel="">
							<Typography.Title
								variant="6/normal"
								className={`capitalize decoration-2 underline underline-offset-4 ${COLOR.UNDERLINE}`}
							>
								{name}
							</Typography.Title>
						</Link>
						<MdVerified className="text-blue-400" size={20} />
					</div>
					<Typography.Text variant="xs/normal">{bio}</Typography.Text>
				</div>
			</div>
		</CardCustom>
	)
}

export default Profile

"use client"

import { MdVerified } from "react-icons/md"
import Image from "next/image"
import Link from "next/link"

import { GithubUserType } from "@/types"

import { Avatar, CardCustom, Typography } from "@/components/ui"

type ProfileProps = Pick<
	GithubUserType,
	"name" | "url" | "avatarUrl" | "bio" | "followers" | "following" | "login"
>

const Profile = ({ ...props }: ProfileProps) => {
	const { avatarUrl, bio, followers, following, login, name, url } = props

	return (
		<CardCustom className="col-span-2">
			<div className="flex flex-col gap-4">
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
						<Typography.Text variant="sm/semibold" className="text-foreground">
							{name}
						</Typography.Text>
						<MdVerified className="text-blue-400" size={20} />
					</div>
					<Link href={url || "#"}>
						<Typography.Text
							variant="xs/normal"
							className="underline underline-offset-4"
						>
							@{login}
						</Typography.Text>
					</Link>
				</div>
			</div>
		</CardCustom>
	)
}

export default Profile

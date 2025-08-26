"use client"

import { MdVerified } from "react-icons/md"
import Image from "next/image"

import { useGithubProfile } from "@/hooks"

import { Avatar, CardCustom, Typography } from "@/components/ui"

// utils/github.ts
export const calculateStreaks = (
	weeks: { contributionDays: { date: string; contributionCount: number }[] }[]
) => {
	const days = weeks.flatMap((week) => week.contributionDays)
	let maxStreak = 0
	let currentStreak = 0
	let tempStreak = 0

	for (let i = 0; i < days.length; i++) {
		if (days[i].contributionCount > 0) {
			tempStreak++
			if (tempStreak > maxStreak) maxStreak = tempStreak
		} else {
			tempStreak = 0
		}
	}

	// hitung current streak (hari terakhir)
	for (let i = days.length - 1; i >= 0; i--) {
		if (days[i].contributionCount > 0) currentStreak++
		else break
	}

	return { currentStreak, maxStreak }
}

const Profile = () => {
	const { data } = useGithubProfile()

	const { currentStreak, maxStreak } = calculateStreaks(
		data?.contributionsCollection?.contributionCalendar?.weeks || []
	)
	console.log(currentStreak, maxStreak)

	return (
		<CardCustom className="col-span-3">
			<div className="flex gap-6">
				<Avatar size="size-16">
					<Image
						src={data?.avatarUrl}
						alt="Profile"
						width={100}
						height={100}
						unoptimized
					/>
				</Avatar>

				<div className="flex flex-col">
					<div className="flex gap-2 items-center">
						<Typography.Title variant="6/bold">{data?.name}</Typography.Title>
						<MdVerified className="text-blue-400" size={20} />
					</div>
					<Typography.Text variant="xs/normal" className="font-mono">
						@{data?.login}
					</Typography.Text>
				</div>
			</div>
		</CardCustom>
	)
}

export default Profile

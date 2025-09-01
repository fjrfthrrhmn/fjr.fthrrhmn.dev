"use client"

import dynamic from "next/dynamic"

import { useSidebarStore } from "@/stores/sidebar-store"
import { useGithubProfile } from "@/hooks"

import { AsyncState, GithubSkeleton } from "@/components/feedback"
import { GithubError } from "@/components/feedback/GithubState"

import { ProfileGithub, StatsGithub } from "./"

const CalendarGithub = dynamic(() => import("./Calendar"), {
	ssr: false
})

const Github = () => {
	const { data, isLoading, isPending, isError, error } = useGithubProfile()

	return (
		<AsyncState
			isLoading={isLoading || isPending}
			isError={isError}
			isEmpty={!data}
			loadingFallback={<GithubSkeleton />}
			errorFallback={<GithubError errorMessage={error?.message} />}
		>
			<div className="grid grid-cols-1 lg:grid-cols-6 gap-4 w-full">
				<ProfileGithub profile={data!} />
				<StatsGithub />
				<CalendarGithub />
			</div>
		</AsyncState>
	)
}

export default Github

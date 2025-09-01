import { AlertCircle } from "lucide-react"

import { CardCustom, Skeleton, Typography } from "@/ui"

const GithubSkeleton = () => {
	return (
		<CardCustom
			classNameContent="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
			className="bg-transparent"
		>
			{[...Array(3)].map((item) => {
				return <Skeleton key={item} className="w-full h-36" />
			})}
			<Skeleton className="w-full h-36 lg:col-span-3" />
		</CardCustom>
	)
}

const GithubError = ({
	errorMessage
}: {
	errorMessage: string | undefined
}) => {
	return (
		<CardCustom classNameContent="flex flex-col items-center justify-center gap-4 py-10 text-center">
			<span className="bg-red-500/15 rounded-full p-2.5">
				<AlertCircle strokeWidth={2.5} size={36} className="text-red-500" />
			</span>
			<div>
				<Typography.Title variant="3/semibold">GitHub Error</Typography.Title>
				<Typography.Text variant="sm/normal" className="mt-2 max-w-md">
					{errorMessage ||
						"Failed to load GitHub data. Please try again later."}
				</Typography.Text>
			</div>
		</CardCustom>
	)
}

export { GithubSkeleton, GithubError }

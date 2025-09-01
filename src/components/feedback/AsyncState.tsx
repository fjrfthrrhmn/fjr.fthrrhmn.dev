type AsyncStateProps = {
	isLoading?: boolean
	isError?: boolean
	isEmpty?: boolean
	loadingFallback?: React.ReactNode
	errorFallback?: React.ReactNode
	emptyFallback?: React.ReactNode
	children: React.ReactNode
}

export const AsyncState = ({
	isLoading,
	isError,
	isEmpty,
	loadingFallback = <div>Loading...</div>,
	errorFallback = <div>Something went wrong.</div>,
	emptyFallback = <div>No data found.</div>,
	children
}: AsyncStateProps) => {
	if (isLoading) return <>{loadingFallback}</>
	if (isError) return <>{errorFallback}</>
	if (isEmpty) return <>{emptyFallback}</>
	return <>{children}</>
}

export const DotGrid = () => {
	const darkGrid =
		"linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)"

	return (
		<>
			<div
				className="absolute inset-0 -z-10"
				style={{
					backgroundSize: "25px 25px",
					backgroundImage: darkGrid
				}}
			/>

			{/* Vignette Mask */}
			<div
				className="pointer-events-none absolute inset-0 bg-background z-[-1]"
				style={{
					maskImage:
						"radial-gradient(ellipse at center, rgba(0,0,0,0.2) 5%, black 100%)",
					WebkitMaskImage:
						"radial-gradient(ellipse at center, rgba(0,0,0,0.2) 5%, black 100%)"
				}}
			/>
		</>
	)
}

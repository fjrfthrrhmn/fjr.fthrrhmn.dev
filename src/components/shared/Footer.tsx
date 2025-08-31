import { Typography } from "../ui"

const Footer = () => {
	return (
		<>
			<footer className="py-16 pb-24 bg-zinc-950">
				<div className="container px-4 grid grid-cols-2 sm:gap-4">
					<Typography.Text variant="md/normal">
						© 2021 – present FjrFthrrhmn.
					</Typography.Text>

					<div className="mt-10 sm:m-0 w-full h-full grid grid-cols-2 lg:flex  gap-4">
						{["Projects", "Blog", "Talks", "Store", "Slides", "Contact"].map(
							(item, index) => {
								return (
									<Typography.Text key={index} variant="md/normal">
										{item}
									</Typography.Text>
								)
							}
						)}
					</div>
				</div>
			</footer>
		</>
	)
}

export default Footer

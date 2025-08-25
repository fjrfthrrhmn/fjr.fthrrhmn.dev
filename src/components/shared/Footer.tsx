import { useTranslations } from "next-intl"

import { Typography } from "../ui"

const Footer = () => {
	const t = useTranslations("Footer")

	return (
		<>
			<footer className="py-12  bg-zinc-950">
				<div className="container grid grid-cols-4">
					<div className="col-span-2">
						<Typography.Text variant="md/normal">
							© 2021 – present Akash Hamirwasia.
						</Typography.Text>
					</div>

					<div className="col-span-2 flex gap-4 justify-between">
						{["Projects", "Blog", "Talks", "Store", "Slides", "Contact"].map(
							(item) => {
								return (
									<Typography.Text variant="md/normal">{item}</Typography.Text>
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

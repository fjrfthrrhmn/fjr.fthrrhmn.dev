import Image from "next/image"

import { CardCustom, Typography } from "@/components/ui"

import { CertificatesData } from "@/data/home"

const CertificatesList = () => {
	// if empty

	return (
		<div className="grid grid-cols-2 gap-6">
			{CertificatesData.map((item, index) => {
				return (
					<CardCustom key={index} className="p-4">
						<div className="relative overflow-hidden rounded-2xl aspect-video object-cover">
							<Image
								src={item.image}
								alt="certificate"
								width={100}
								height={100}
								className="w-full h-full rounded-2xl object-cover "
								unoptimized
							/>
						</div>

						<div className="mt-4 flex flex-col">
							<Typography.Title variant="6/semibold">
								{item.title}
							</Typography.Title>
							<Typography.Text variant="sm/normal">
								{item.type} • {item.date} • {item.no}
							</Typography.Text>
						</div>
					</CardCustom>
				)
			})}
		</div>
	)
}

export default CertificatesList

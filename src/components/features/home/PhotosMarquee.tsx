import Image from "next/image"

import { cn } from "@/lib/utils"

import { Container } from "@/components/ui"
import { Marquee } from "@/widgets"

import { PhotosData } from "@/data/home"

const PhotosMarquee = () => {
	return (
		<Container padding="py-32" container={false}>
			<Marquee className="[--gap:2rem] overflow-clip py-6">
				{PhotosData.map((item, index) => {
					const rotateClass = [
						"rotate-0",
						"rotate-2",
						"-rotate-2",
						"rotate-3",
						"-rotate-3"
					][index % 5]

					return (
						<Image
							key={item.name}
							src={item.src}
							alt={item.name}
							width={400}
							height={400}
							className={cn(
								"w-full h-52 aspect-auto rounded-2xl border-8",
								"hover:scale-110 transition duration-200 ease-in-out hover:rotate-0",
								rotateClass
							)}
							unoptimized
						/>
					)
				})}
			</Marquee>
		</Container>
	)
}

export default PhotosMarquee

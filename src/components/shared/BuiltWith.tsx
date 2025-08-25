import { IconType } from "react-icons";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiVercel } from "react-icons/si";



import { LinkPreview } from "../widgets";


interface StacksBuiltProps {
	name: string
	src: string
	url: string
	icon: IconType
	classHover: string
}

export const STACKS_BUILT: StacksBuiltProps[] = [
	{
		name: "Next.js",
		src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/images/ui/nextjs-icon.svg",
		url: "https://nextjs.org/",
		icon: SiNextdotjs,
		classHover: "group-hover:text-white group-hover:opacity-100"
	},
	{
		name: "TypeScript",
		src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/images/ui/typescript-icon.svg",
		url: "https://www.typescriptlang.org/",
		icon: SiTypescript,
		classHover: "group-hover:text-blue-400 group-hover:opacity-100"
	},
	{
		name: "Tailwind CSS",
		src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/images/ui/tailwind-icon.svg",
		url: "https://tailwindcss.com/",
		icon: SiTailwindcss,
		classHover: "group-hover:text-sky-400 group-hover:opacity-100"
	},

	{
		name: "Vercel",
		src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/images/ui/vercel-icon.svg",
		url: "https://vercel.com/",
		icon: SiVercel,
		classHover: "group-hover:text-white group-hover:opacity-100"
	}
]

const BuiltWith = () => {
	return (
		<div className="flex flex-wrap items-center justify-center gap-2 w-full">
			{STACKS_BUILT.map((item, index) => (
				<div
					key={index}
					className="group p-2.5 rounded-2xl border-4 flex items-center justify-center "
				>
					<LinkPreview url={item.url}>
						<item.icon size={28} className={`opacity-30 ${item.classHover} transition duration-500 ease-in`} />
					</LinkPreview>
				</div>
			))}
		</div>
	)
}

export default BuiltWith
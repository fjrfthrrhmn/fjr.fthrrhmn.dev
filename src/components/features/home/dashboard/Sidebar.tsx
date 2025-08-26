import { SiGithub } from "react-icons/si";



import { CodeIcon, ZapIcon } from "lucide-react";



import { CardCustom } from "@/components/ui";





const items = [
	{
		name: "Github",
		icon: SiGithub
	},
	{
		name: "MonkeyType",
		icon: ZapIcon
	},
	{
		name: "LeetCode",
		icon: CodeIcon
	}
]

const Sidebar = () => {
	const isActive = "Github"

	return (
		<CardCustom className="col-span-1 flex flex-col gap-6 items-center justify-start px-4 py-6 w-full h-max">
			{items.map((item) => {
				const classes = isActive === item.name ? "" : "text-zinc-600"
				return <item.icon key={item.name} size={24} className={classes} />
			})}
		</CardCustom>
	)
}

export default Sidebar
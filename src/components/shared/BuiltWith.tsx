import { LinkPreview } from "@/widgets"

import { StacksBuiltData } from "@/data/home"

const BuiltWith = () => {
	return (
		<div className="mt-20 lg:mt-40 flex flex-wrap items-center justify-center gap-2 w-full">
			{StacksBuiltData.map((item, index) => (
				<div
					key={index}
					className="group p-2.5 rounded-2xl border-4 flex items-center justify-center"
				>
					<LinkPreview url={item.url} name={item.name}>
						<item.icon
							size={28}
							className={`opacity-30 ${item.classHover} transition duration-500 ease-in`}
						/>
					</LinkPreview>
				</div>
			))}
		</div>
	)
}

export default BuiltWith

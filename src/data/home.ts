import { IconType } from "react-icons";
import { SiCss3 as IconCss, SiGithub as IconGithub, SiJavascript as IconJavascript, SiLaravel as IconLaravel, SiMongodb as IconMongodb, SiMysql as IconMysql, SiNextdotjs as IconNextJs, SiNodedotjs as IconNodeJs, SiPhp as IconPhp, SiReact as IconReact, SiTailwindcss as IconTailwindCss, SiTypescript as IconTypescript, SiVercel as IconVercel } from "react-icons/si";
import { TbBrandAstro as IconAstro, TbBrandFramerMotion as IconFramerMotion } from "react-icons/tb";



import { Activity, CodeIcon, ZapIcon } from "lucide-react";



import { AboutProps, ExperienceProps, PhotoProps, SkillProps, StackBuiltProps } from "@/types";



import { ContentType } from "@/stores/sidebar-store";



import { Experiences, Profile, Skills } from "@/components/features/home/about";
import { GithubContent, MonkeyTypeContent } from "@/components/features/home/dashboard";





export const PhotosData: PhotoProps[] = [
	{
		name: "Jack",
		src: "https://avatar.vercel.sh/jack"
	},
	{
		name: "Jill",
		src: "https://avatar.vercel.sh/jill"
	},
	{
		name: "John",
		src: "https://avatar.vercel.sh/john"
	},
	{
		name: "Jane",
		src: "https://avatar.vercel.sh/jane"
	},
	{
		name: "Jenny",
		src: "https://avatar.vercel.sh/jenny"
	},
	{
		name: "James",
		src: "https://avatar.vercel.sh/james"
	}
]

export const StacksBuiltData: StackBuiltProps[] = [
	{
		name: "Next.js",
		src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/images/ui/nextjs-icon.svg",
		url: "https://nextjs.org/",
		icon: IconNextJs,
		classHover: "group-hover:text-white group-hover:opacity-100"
	},
	{
		name: "TypeScript",
		src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/images/ui/typescript-icon.svg",
		url: "https://www.typescriptlang.org/",
		icon: IconTypescript,
		classHover: "group-hover:text-blue-400 group-hover:opacity-100"
	},
	{
		name: "Tailwind CSS",
		src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/images/ui/tailwind-icon.svg",
		url: "https://tailwindcss.com/",
		icon: IconTailwindCss,
		classHover: "group-hover:text-sky-400 group-hover:opacity-100"
	},

	{
		name: "Vercel",
		src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/images/ui/vercel-icon.svg",
		url: "https://vercel.com/",
		icon: IconVercel,
		classHover: "group-hover:text-white group-hover:opacity-100"
	}
]

export const ExperiencesData: ExperienceProps[] = [
	{
		company: "FathForce",
		role: "FullStack Dev",
		logo: "https://i.pinimg.com/736x/5e/46/f4/5e46f453dc9073f168464c2563d672a0.jpg",
		startDate: { month: "Sep", year: 2025 },
		endDate: { month: "Des", year: 2025 }
	},
	{
		company: "TechNova",
		role: "Frontend Engineer",
		logo: "https://avatars.githubusercontent.com/u/14101776?s=200&v=4",
		startDate: { month: "Jan", year: 2024 },
		endDate: "Present"
	},
	{
		company: "Juara Bootcamp",
		role: "FullStack Bootcamp",
		logo: "https://i.pinimg.com/736x/92/5a/49/925a494f1d948db5dd8a8c4b863a6489.jpg",
		startDate: { month: "Jun", year: 2023 },
		endDate: { month: "Aug", year: 2023 }
	},
	{
		company: "InternHub",
		role: "Frontend Intern",
		logo: "https://i.pinimg.com/736x/d9/02/5f/d9025f745376e206500f9b3a7500f241.jpg",
		startDate: { month: "Jan", year: 2023 },
		endDate: { month: "May", year: 2023 }
	},
	{
		company: "Hackathon Winner",
		role: "1st Place Winner",
		logo: "https://i.pinimg.com/1200x/f5/b2/ad/f5b2ad99a341417962385990077705dc.jpg",
		startDate: { month: "Dec", year: 2022 },
		endDate: { month: "Dec", year: 2022 }
	}
]

export const AboutData: AboutProps[] = [
	{
		name: "profile",
		className: "lg:col-span-4",
		component: Profile
	},
	{
		name: "experiences",
		className: "lg:col-span-3",
		component: Experiences
	},
	{
		name: "skills",
		className: "lg:col-span-7",
		component: Skills
	}
]

export const SkillsData: SkillProps[] = [
	{
		name: "CSS",
		icon: IconCss,
		background: "bg-blue-500 " // CSS blue glass
	},
	{
		name: "JavaScript",
		icon: IconJavascript,
		background: "bg-yellow-500 " // JS yellow glass
	},
	{
		name: "React",
		icon: IconReact,
		background: "bg-sky-500 " // React cyan glass
	},
	{
		name: "TypeScript",
		icon: IconTypescript,
		background: "bg-blue-600 " // TS blue glass
	},
	{
		name: "Tailwind CSS",
		icon: IconTailwindCss,
		background: "bg-cyan-400 " // Tailwind cyan glass
	},
	{
		name: "Next.js",
		icon: IconNextJs,
		background: "bg-black " // Next glass
	},
	{
		name: "Node.js",
		icon: IconNodeJs,
		background: "bg-green-600 " // Node glass
	},
	{
		name: "PHP",
		icon: IconPhp,
		background: "bg-indigo-500 " // PHP indigo glass
	},
	{
		name: "MySQL",
		icon: IconMysql,
		background: "bg-blue-700 " // MySQL glass
	},
	{
		name: "MongoDB",
		icon: IconMongodb,
		background: "bg-green-500 " // Mongo glass
	},
	{
		name: "Laravel",
		icon: IconLaravel,
		background: "bg-red-500 " // Laravel glass
	},
	{
		name: "Astro",
		icon: IconAstro,
		background: "bg-purple-600 " // Astro glass
	},
	{
		name: "Framer Motion",
		icon: IconFramerMotion,
		background: "bg-pink-500 " // Framer glass
	},
	{
		name: "Vercel",
		icon: IconVercel,
		background: "bg-black " // Vercel glass
	}
]

export const SidebarData: {
	name: string
	icon: IconType
	disabled?: boolean
}[] = [
	{
		name: "Github",
		icon: IconGithub
	},
	{
		name: "MonkeyType",
		icon: ZapIcon
	},
	{
		name: "WakaTime",
		icon: Activity
	},
]

export const DashboardData: Partial<Record<ContentType, React.ComponentType>> =
	{
		Github: GithubContent,
		MonkeyType: MonkeyTypeContent
	}
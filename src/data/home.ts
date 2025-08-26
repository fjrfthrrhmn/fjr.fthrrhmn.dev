import { SiCss3 as IconCss, SiHtml5 as IconHtml, SiJavascript as IconJavascript, SiLaravel as IconLaravel, SiMongodb as IconMongodb, SiMysql as IconMysql, SiNextdotjs as IconNextJs, SiNodedotjs as IconNodeJs, SiPhp as IconPhp, SiReact as IconReact, SiTailwindcss as IconTailwindCss, SiTypescript as IconTypescript, SiVercel as IconVercel } from "react-icons/si";
import { TbBrandAstro as IconAstro, TbBrandFramerMotion as IconFramerMotion } from "react-icons/tb";



import { ExperienceProps, PhotoProps, SkillProps, StackBuiltProps } from "@/types";





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
		role: "FullStack Developer",
		logo: "https://i.pinimg.com/736x/5e/46/f4/5e46f453dc9073f168464c2563d672a0.jpg",
		startDate: "Sep 2025",
		endDate: "Des 2025"
	},
	{
		company: "TechNova",
		role: "Frontend Engineer",
		logo: "https://avatars.githubusercontent.com/u/14101776?s=200&v=4",
		startDate: "Jan 2024",
		endDate: "Jul 2024"
	},
	{
		company: "Cloudify",
		role: "Backend Engineer",
		logo: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
		startDate: "Aug 2023",
		endDate: "Dec 2023"
	}
]

export const SkillsData: SkillProps[] = [
  {
    name: "CSS",
    icon: IconCss,
    background: "bg-blue-500 ", // CSS blue glass
  },
  {
    name: "JavaScript",
    icon: IconJavascript,
    background: "bg-yellow-500 ", // JS yellow glass
  },
  {
    name: "React",
    icon: IconReact,
    background: "bg-sky-500 ", // React cyan glass
  },
  {
    name: "TypeScript",
    icon: IconTypescript,
    background: "bg-blue-600 ", // TS blue glass
  },
  {
    name: "Tailwind CSS",
    icon: IconTailwindCss,
    background: "bg-cyan-400 ", // Tailwind cyan glass
  },
  {
    name: "Next.js",
    icon: IconNextJs,
    background: "bg-black ", // Next glass
  },
  {
    name: "Node.js",
    icon: IconNodeJs,
    background: "bg-green-600 ", // Node glass
  },
  {
    name: "PHP",
    icon: IconPhp,
    background: "bg-indigo-500 ", // PHP indigo glass
  },
  {
    name: "MySQL",
    icon: IconMysql,
    background: "bg-blue-700 ", // MySQL glass
  },
  {
    name: "MongoDB",
    icon: IconMongodb,
    background: "bg-green-500 ", // Mongo glass
  },
  {
    name: "Laravel",
    icon: IconLaravel,
    background: "bg-red-500 ", // Laravel glass
  },
  {
    name: "Astro",
    icon: IconAstro,
    background: "bg-purple-600 ", // Astro glass
  },
  {
    name: "Framer Motion",
    icon: IconFramerMotion,
    background: "bg-pink-500 ", // Framer glass
  },
  {
    name: "Vercel",
    icon: IconVercel,
    background: "bg-black ", // Vercel glass
  },
]
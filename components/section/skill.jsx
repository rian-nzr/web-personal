import { SiTailwindcss, SiCss3, SiHtml5, SiJavascript, SiTypescript, SiPhp, SiReact, SiNextdotjs, SiVuedotjs, SiBootstrap, SiLaravel, SiCodeigniter } from "react-icons/si"


let data = [
    { id: 3, name: "Html", tag: <SiHtml5 /> },
    { id: 2, name: "css", tag: <SiCss3 /> },
    { id: 4, name: "JavaScript", tag: <SiJavascript /> },
    { id: 5, name: "PHP", tag: <SiPhp /> },
    { id: 6, name: "TypeScript", tag: <SiTypescript /> },
    { id: 9, name: "Tailwindcss", tag: <SiTailwindcss /> },
    { id: 1, name: "Bootstrap", tag: <SiBootstrap /> },
    { id: 7, name: "ReactJs", tag: <SiReact /> },
    { id: 8, name: "NextJS", tag: <SiNextdotjs /> },
    { id: 10, name: "vueJs", tag: <SiVuedotjs /> },
    { id: 11, name: "laravel", tag: <SiLaravel /> },
    { id: 12, name: "codeigniter", tag: <SiCodeigniter /> },
]

export default function Skill() {
    return (
        <div className="max-w-5xl mx-auto my-5">
            <div className="flex flex-col items-center py-14">
                <p className="flex">
                    <span className="px-4 py-2 text-base font-medium rounded-xl dark:text-c-text dark:bg-c-bg-b bg-blue-900 text-white">
                        skills
                    </span>
                </p>
                <h1 className="text-4xl font-bold">Technologies and skills</h1>
            </div>
            <div className="flex flex-wrap justify-center gap-14 text-5xl">
                {data.map((item) => (
                    <>
                        {item.tag}
                    </>
                ))}
            </div>
        </div>
    )
}
import Image from "next/image";

export default function About() {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-3 gap-5 py-10">
                <div className="flex items-center">

                    <div className="bg-rd-500 overflow-hidden rounded-xl flex items-center">
                        <Image src='/images/abouts.png'
                            alt="k"
                            width={500}
                            height={300} />
                    </div>
                </div>
                <div className=" col-span-2 w-11/12 space-y-5 px-10 flex flex-col justify-center">
                    <p className="flex">
                        <span className="px-4 py-2 text-base font-medium rounded-xl dark:text-c-text dark:bg-c-bg-b bg-blue-900 text-white">
                            About Me
                        </span>
                    </p>
                    <h1 className="text-4xl font-bold ">
                        Hello, I'm a frontend developer
                    </h1>
                    <p className="leading-loose text-base">
                        Hello, I'm Rian from Aceh. I have expertise in creating websites using HTML, CSS, and JavaScript. I am highly motivated to develop my skills in Frontend development professionally, and I have mastered several programming languages and frameworks, such as Javascript, PHP, React, and NextJS. So far, I have worked on several projects for both companies and personal use.
                    </p>
                    
                </div>
            </div>
        </div>
    )

}
import Image from "next/image"
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram, AiOutlineDownload } from "react-icons/ai"
import DownloadCv from "../assets/downloadcv"
import ButtonWa from "../assets/buttonwa"


export default function Hero() {
    return (
        <div className="lg:grid lg:grid-cols-3 flex flex-col lg:gap-5 gap-10 pt-8 lg:my-20 my- lg:pb-10 lg:mb-24 mb-10">
            <div className="bg-red-0 flex flex-col gap-3 justify-center order-1 lg:order-none">
                <p className="flex">
                    <span className="px-4 py-2 text-base font-medium rounded-xl dark:text-c-text dark:bg-c-bg-b bg-blue-900 text-white">
                        Hello, I&apos;m a
                    </span>
                </p>
                <h1 className="text-4xl font-semibold dark:text-white text-blue-950">
                    RIAN
                </h1>
                <p className=" dark:text-gray-400 text-gray-600">
                    Front-end developer &sdot; Back-End developer &sdot; Fullstack developer
                </p>
                <div className="text-2xl lg:flex hidden gap-3 dark:text-gray-400 text-gray-600">
                    <a href="https://www.linkedin.com/in/rian-nazar-04322523b/" target="_blank">
                        <AiFillLinkedin />
                    </a>
                    <a href="https://github.com/rian-nzr" target="_blank">
                        <AiFillGithub />
                    </a>
                    <a href="https://www.instagram.com/rian.nazar/" target="_blank">
                        <AiOutlineInstagram />
                    </a>
                </div>
            </div>
            <div className="text-4xl flex lg:hidden gap-3 dark:text-gray-400 justify-center text-gray-600">
                <a href="https://www.linkedin.com/in/rian-nazar-04322523b/" target="_blank">
                    <AiFillLinkedin />
                </a>
                <a href="https://github.com/rian-nzr" target="_blank">
                    <AiFillGithub />
                </a>
                <a href="https://www.instagram.com/rian.nazar/" target="_blank">
                    <AiOutlineInstagram />
                </a>
            </div>
            <div className="flex items-center justify-center">
                <Image
                    src='/images/myavatar.png'
                    alt="my photo"
                    width={1000}
                    height={1000} />
            </div>
            <div className="flex flex-row lg:flex-col justify-center lg:items-end items-center gap-3 order-2 lg:order-none">
                <DownloadCv />

                <ButtonWa />
            </div>
        </div>
    )
}
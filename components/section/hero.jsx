import Image from "next/image"
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram, AiOutlineDownload } from "react-icons/ai"
import { BsWhatsapp } from "react-icons/bs"
import DownloadCv from "../assets/downloadcv"

export default function Hero() {
    return (
        <div className="lg:grid lg:grid-cols-3 flex flex-col lg:gap-5 gap-10 pt-8 lg:my-20 my- lg:pb-10 lg:mb-24 mb-10">
            <div data-aos="fade-right"
                data-aos-duration="800" className="bg-red-0 flex flex-col gap-3 justify-center order-1 lg:order-none">
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
                    <AiFillLinkedin />
                    <AiFillGithub />
                    <AiOutlineInstagram />
                </div>
            </div>
            <div className="text-4xl flex lg:hidden gap-3 dark:text-gray-400 justify-center text-gray-600">
                <AiFillLinkedin />
                <AiFillGithub />
                <AiOutlineInstagram />
            </div>
            <div
                data-aos="fade-down"
                data-aos-duration="800"
                className="flex items-center justify-center">
                <Image
                    src='/images/myavatar.png'
                    alt="my photo"
                    width={1000}
                    height={1000} />
            </div>
            <div
                data-aos="fade-left"
                data-aos-duration="800"
                className="flex flex-row lg:flex-col justify-center lg:items-end items-center gap-3 order-2 lg:order-none">
                <DownloadCv/>
                
                <button className="relative flex flex-col items-center group">
                    <p className="flex items-center gap-2 border-2 dark:border-c-text rounded-lg px-3 py-2 dark:text-c-text cursor-not-allowed  text-base border-blue-900 text-blue-900">
                        <BsWhatsapp />  Let&apos;s talk
                    </p>
                    <div className="absolute bottom-5  flex-col items-center hidden mb-6 group-hover:flex">
                        <span className="relative z-10 p-2 text-xs leading-none text-black whitespace-no-wrap bg-white shadow-lg">not accessible</span>
                        <div className="w-3 h-3 -mt-2 rotate-45 bg-white"></div>
                    </div>

                </button>
            </div>
        </div>
    )
}
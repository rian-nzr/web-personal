import { MdLocationPin, MdLocalPhone, MdOutlineMailOutline } from "react-icons/md"
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai"


export default function Contact() {
    return (
        <>
            <div className="flex flex-col items-center py-14  ">
                <p className="flex">
                    <span className="px-4 py-2 text-base font-medium rounded-xl dark:text-c-text dark:bg-c-bg-b bg-blue-900 text-white">
                        Contact
                    </span>
                </p>
                <h1 className="text-4xl font-bold">Get in touch</h1>
                <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
            </div>
            <div className="grid max grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x lg:mb-20">
                <div className="py-6 md:py-0 md:px-6">

                    <div className="space-y-4 text-lg">
                        <p className="flex items-center gap-2">
                            <MdLocationPin />
                            <span className="text-base">Bireuen, Aceh, Indonesia</span>
                        </p>
                        <p className="flex items-center gap-2">
                            <MdLocalPhone />
                            <span className="text-base">0822 8660 6778</span>
                        </p>
                        <p className="flex items-center gap-2">
                            <MdOutlineMailOutline />
                            <span className="text-base">riannazar03@gmail.com</span>
                        </p>
                    <div className="text-2xl flex gap-3 dark:text-gray-400 text-gray-600">
                        <AiFillLinkedin />
                        <AiFillGithub />
                        <AiOutlineInstagram />
                    </div>
                    </div>
                </div>
                <form className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
                    <label className="block">
                        <span className="mb-1">Full name</span>
                        <input type="text" placeholder="Leroy Jenkins" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800 p-2" />
                    </label>
                    <label className="block">
                        <span className="mb-1">Email address</span>
                        <input type="email" placeholder="leroy@jenkins.com" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800 p-2" />
                    </label>
                    <label className="block">
                        <span className="mb-1">Message</span>
                        <textarea rows="3" className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800 p-2"></textarea>
                    </label>
                    <button className="relative flex flex-col items-center group">
                    <p className="flex items-center gap-2 border-2 dark:border-c-text rounded-lg px-3 py-2 dark:text-c-text cursor-not-allowed  text-base border-blue-900 dark:bg-c-bg-b bg-blue-900 text-white">
                        Submit
                    </p>
                    <div className="absolute bottom-5  flex-col items-center hidden mb-6 group-hover:flex">
                        <span className="relative z-10 p-2 text-xs leading-none text-black whitespace-no-wrap bg-white shadow-lg">not accessible</span>
                        <div className="w-3 h-3 -mt-2 rotate-45 bg-white"></div>
                    </div>

                </button>
                </form>
            </div>

        </>
    )
}
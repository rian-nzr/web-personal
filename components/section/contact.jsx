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
            <div className="grid max grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x mb-20">
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
                <form novalidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
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
                    <button type="button" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-400 dark:text-gray-900 focus:ring-violet-400 hover:ring-violet-400">Submit</button>
                </form>
            </div>

        </>
    )
}
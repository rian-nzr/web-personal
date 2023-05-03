import Image from "next/image"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react";
import { BsSun, BsMoonFill } from "react-icons/bs";




export default function Header() {
    const { systemTheme, theme, setTheme } = useTheme();
    const [drakMode, setDrak] = useState(false);
    useEffect(() => {
        setDrak(true)
    }, []);
    function buttonDrakMode() {
        const currentTheme = theme === "system" ? systemTheme : theme;
        if (!drakMode) return null;
        if (currentTheme === 'dark') {
            return (
                <BsSun className="w-7 h-7 text-yellow-500" role="button" onClick={() => setTheme('light')} />
            )
        } else {
            return (
                <BsMoonFill className="w-7 h-7 text-gray-200" role="button" onClick={() => setTheme('dark')} />
            )
        }

    }

    return (
        <header className="mx-auto container py-4">
            <div className="bg- dark:bg-c-hf bg-blue-950 backdrop-blur- rounded-lg px-3">
                <div className="container flex justify-between h-14 mx-auto">
                    <div className="flex items-center">
                        <div className="bg-white rounded-3xl">

                            <Image
                                src='/images/rlogo.png'
                                alt="logo"
                                width={40}
                                height={40}
                            />
                        </div>
                    </div>
                    <ul className="items-stretch text-white hidden space-x-3 md:flex">
                        <li className="flex">
                            <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1">Home</a>
                        </li>
                        <li className="flex">
                            <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1">About</a>
                        </li>
                        <li className="flex">
                            <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 ">Blog</a>
                        </li>
                        <li className="flex">
                            <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1">Contact</a>
                        </li>
                    </ul>
                    <div className="flex items-center justify-center">
                        {buttonDrakMode()}
                    </div>
                    <button className="flex justify-end p-4 md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>

        </header>
    )
}
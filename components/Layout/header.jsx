import Image from "next/image"
import { useRouter } from "next/router";
import { useTheme } from "next-themes"
import { useState, useEffect } from "react";
import { BsSun, BsMoonFill } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import Link from "next/link";
import { BiMenu, BiHomeAlt } from 'react-icons/bi'

const navs = [
    // { text: 'Home', href: '/' },
    { text: 'Blog', href: '/blog' },
    { text: 'About', href: '/about' },
    { text: 'Contact', href: '/contact' },
]

export default function Header() {
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false)
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
                <BsMoonFill className="w-7 h-7 lg:text-gray-200 text-gray-600" role="button" onClick={() => setTheme('dark')} />
            )
        }
    }

    return (<>

        <header className="container lg:max-w-7xl top-0 backdrop-blur mx-auto lg:pt-5 pt-3 z-40 sticky  transition-all duration-500">
            <div className="mx-auto w-full"></div>
            <div className="bg- dark:bg-c-hf bg-blue-950 backdrop-blur- rounded-xl px-3">
                <div className="container flex justify-between items-center h-14 mx-auto">
                    <div className="flex items-center">
                        <div className="bg-white rounded-3xl">
                            <Link href='/'>
                                <Image
                                    src='/images/rlogo.png'
                                    alt="logo"
                                    width={40}
                                    height={40}
                                />
                            </Link>
                        </div>
                    </div>
                    <ul className="items-stretch text-white hidden space-x-3 md:flex">
                        {navs.map((item) => (
                            <li key={item.href} className="flex">
                                <Link href={item.href}>
                                    <p className={`flex items-center px-4 -mb-1 ${router.pathname == item.href ? 'text-c-text font-medium' : ''}`}>{item.text}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="items-center lg:flex hidden justify-center">
                        {buttonDrakMode()}
                    </div>
                    <button onClick={() => setMenuOpen(!menuOpen)} className="flex justify-end text-4xl md:hidden">
                        <BiMenu />
                    </button>
                </div>
            </div>
        </header>
        <div
            className={`md:mr-auto backdrop-blur-sm text-black 0 h-full lg:hidden w-full lg:w-auto transform transition-all fixed lg:relative right-0 left-0 duration-500 text top-0 flex z-50 ${menuOpen === false &&
                "-translate-x-full lg:-translate-x-0 bg-opacity-0 backdrop-blur-none "
                }`}
        >
            <div className="bg-white w-4/5 overflow-hidden rounded-r-xl font-inter">
                <div className=" overflow-hidden flex items-center justify-between px-2">
                    <div className="flex gap-3">
                        <h1 rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-end text-xl font-bold">
                            Rian
                        </h1>

                        <div className="items-center flex  justify-center">
                            {buttonDrakMode()}
                        </div>
                    </div>
                    <button
                        className="flex flex-col h-12 w-12 rounded justify-center items-center group"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <MdClose className="text-2xl " />
                    </button>
                </div>

                <div className="px-8">
                    <ul className="flex items-start justify-around text-base font-medium flex-col space-y-5  border-b  pb-10 pt-6">
                        <li>
                            <Link
                                href="/"
                                className="flex items-start space-x-2"
                                onClick={() => setOpen(!open)}
                            >
                                <BiHomeAlt className="text-xl" />
                                <p>Home</p>
                            </Link>
                        </li>
                    </ul>

                </div>
                <div className="absolute bottom-5 flex flex-col w-4/5">
                    <p className="py-2 text-sm text-center text-gray-700">
                        Copyright <span className="font-medium">RIAN</span>© {new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </div>
    </>
    )
}
import Footers from "./footer";
import Header from "./header";

export default function Layout({ children }) {
    return (
        <>
            <div className="flex flex-col justify-between min-h-screen bg-gray-50 dark:text-gray-100  dark:bg-c-dark z-20">
                <div className="">
                    <Header />
                    <div className="px-2">
                        {children}
                    </div>
                </div>
                <Footers />
            </div>
            <div className="fixed w-full min-h-screen bg-white z-50 "></div>
        </>
    )
}
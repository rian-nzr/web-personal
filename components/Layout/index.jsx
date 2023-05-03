import Footers from "./footer";
import Header from "./header";

export default function Layout({ children }) {
    return (
        <div className="flex flex-col justify-between min-h-screen">
            <div className="">

                <Header />
                <div className="">

                    {children}
                </div>
            </div>
            <Footers />

        </div>
    )
}
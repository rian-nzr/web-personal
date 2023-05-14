import { data } from "autoprefixer";

export default function Footers() {
    return (
        <footer className="dark:bg-c-hf bg-gray-300">
            <div className="py-4 text-sm text-center">Copyright © Rian · {new Date().getFullYear()}</div>
        </footer>
    )
}
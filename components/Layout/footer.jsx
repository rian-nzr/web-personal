import { data } from "autoprefixer";

export default function Footers() {
    return (
        <footer className="bg-c-hf">
            <div className="py-4 text-sm text-center">Copyright © Rian · {new Date().getFullYear()}</div>
        </footer>
    )
}
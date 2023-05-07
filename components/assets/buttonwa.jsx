import { BsWhatsapp } from "react-icons/bs";


export default function ButtonWa() {
    function wa(){
        const noWa = '+6282286606778';

        const massage ="ٱلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّٰهِ وَبَرَكَاتُهُ";

        const link =`https://wa.me/${noWa}?text=${encodeURIComponent(massage)}`

        window.open(link)
    }
    return (
        <>
            <button onClick={()=> wa()} className="relative flex flex-col items-center group">
                <p className="flex items-center gap-2 border-2 dark:border-c-text rounded-lg px-3 py-2 dark:text-c-text cursor-pointer  text-base border-blue-900 text-blue-900">
                    <BsWhatsapp />  Let&apos;s talk
                </p>
                <div className="absolute bottom-5  flex-col items-center hidden mb-6 group-hover:flex">
                    <span className="relative z-10 p-2 text-xs leading-none text-black whitespace-no-wrap bg-white shadow-lg">not accessible</span>
                    <div className="w-3 h-3 -mt-2 rotate-45 bg-white"></div>
                </div>
            </button>
        </>
    )

}
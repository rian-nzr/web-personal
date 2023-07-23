import { useState } from "react"
import { MdKeyboardArrowDown } from 'react-icons/md'
import Link from "next/link";


export default function ButtonFilter({ data, onclick }) {
    const [open, setOpen] = useState(false);
  
   

    return (
        <>
            <div className="relative inline-block text-left">
                <div>

                    <button onClick={() => setOpen(!open)} type="button" className="w-full flex items-center  border-2 dark:border-c-text rounded-lg px-3 py-2 dark:text-c-text cursor-pointer  text-sm border-blue-900 text-blue-900 justify-center gap-x-1.5    font-semibold  shadow-sm  " id="menu-button" aria-expanded="true" aria-haspopup="true">
                        <p>Filter</p>

                        <MdKeyboardArrowDown className="text-lg" />
                    </button>
                </div>
                {open && (
                    <div className="fixed inset-0 flex justify-center items-center" onClick={() => setOpen(false)} />
                )}
                <div className={`absolute  right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-c-bg-b dark:text-white text-gray-700 ${open === true ? '' : 'hidden'}`}>
                    <div className="py-1" role="none">
                        {
                            data.map((item) => (

                                <p key={item.id} onClick={onclick} className="cursor-pointer block px-4 py-2 text-sm">{item.attributes.title}</p>

                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
import Image from "next/image"
import Link from "next/link"
import getConfig from "next/config"
import { useState } from "react";
import axios, { all } from "axios";


// const data = [1, 2, 3, 4, 5, 6, 7, 8]
export default function Portfolio({ data, category, clik, allClik, select }) {
    const { publicRuntimeConfig } = getConfig();
    console.log(select);
   
    return (
        <div className="py-20">
            <p className="flex">
                <span className="px-4 py-2 text-base font-medium rounded-xl dark:text-c-text dark:bg-c-bg-b bg-blue-900 text-white">
                    portfolio
                </span>
            </p>
            <div className="flex lg:flex-row flex-col gap-3 justify-between items-center">
                <h1 className="text-4xl font-bold">works and projects</h1>
                <div className="flex gap-2 items-center">
                    <button onClick={()=> allClik()} className="relative flex flex-col items-center">
                        <p className={` ${select === null ? "dark:bg-c-bg-b bg-blue-800 text-white  rounded-lg px-3 py-3 dark:text-c-text" :" border-b-2  dark:border-c-text rounded-lg px-3 py-3 dark:text-c-text cursor-pointer  text-base font-medium  border-blue-900 text-blue-900" }flex items-center gap-2 `} >
                            ALL
                        </p>
                    </button>
                    {category.map((item) => (
                        <button key={item.id} className="relative flex flex-col items-center">
                            <p onClick={()=> clik(item.attributes.slug)} className={` ${select === item.attributes.slug ? "dark:bg-c-bg-b bg-blue-800 text-white  rounded-lg px-3 py-3 dark:text-c-text" :"border-b-2  dark:border-c-text text- rounded-lg px-3 py-3 dark:text-c-text cursor-pointer  text-base font-medium  border-blue-900 text-blue-900" }flex items-center gap-2 `}>
                                {item.attributes.title}
                            </p>
                        </button>
                    ))}
                   
                </div>
            </div>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8   my-5 sm:mx-5">
                {
                    data.map((item) => (
                        <div key={item.id} className="h-full">
                            <div className="w-full overflow-hidden p-3 dark:border rounded-xl dark:border-c-border dark:bg-c-bg-b  border-gray-300 shadow-2xl">
                                <div className="flex flex-col gap-5 items-start p-2">
                                    <div className="flex flex-col gap-2">
                                        <Link href={`/portfolio/${item.attributes.slug}`}>   <h2 className="text-2xl  font-semibold">{item.attributes.title}</h2> </Link>
                                        <p className=" dark:text-gray-400 text-sm text-gray-600">
                                            {item.attributes.description.slice(0, 150)} <span className="text-lg"> . . . </span>
                                        </p>

                                    </div>
                                    <div className="flex items-center gap-2">
                                        {item.attributes.portfolio_categories.data.map((alex) => (

                                            <div key={alex.id} className="relative flex flex-col items-center">
                                                <p className="dark:bg-c-bg-b bg-blue-800 text-white  rounded-lg px-2 py-1 dark:text-c-text cursor-not-allowed  text-sm">
                                                    {alex.attributes.title}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="py-3">
                                        {!item.attributes.thumbnail?.data?.attributes?.url ?
                                            <Image
                                                src='/images/gaip.png'
                                                alt="ts"
                                                width={500}
                                                height={300}
                                            />
                                            :
                                            <Image
                                                src={`${publicRuntimeConfig.URLAPI}${item.attributes.thumbnail?.data?.attributes?.url}`}
                                                alt="ts"
                                                width={500}
                                                height={300}
                                            />
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
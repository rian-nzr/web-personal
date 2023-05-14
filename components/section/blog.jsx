import Image from "next/image"


const data = [1, 2, 3, 4, 5, 6, 7, 8]
export default function LBlog() {
    return (
        <div className="py-5">
         
            <div className="flex lg:flex-row flex-col gap-3 justify-between items-center">
                <h1 className="text-4xl font-bold">Blog</h1>
                <div className="flex gap-5 items-center">
                    <button className="relative flex flex-col items-center">
                        <p className="flex items-center gap-2 dark:bg-c-bg-b bg-blue-800 text-white  rounded-lg px-3 py-3 dark:text-c-text cursor-not-allowed  text-base font-medium ">
                            Front End
                        </p>
                    </button>
                    <button className="relative flex flex-col items-center">
                        <p className="flex items-center gap-2 border-2 dark:border-c-text rounded-lg px-3 py-2 dark:text-c-text cursor-not-allowed  text-base font-medium border-blue-900 text-blue-900">
                            Back End
                        </p>
                    </button>
                    <button className="relative flex flex-col items-center">
                        <p className="flex items-center gap-2 border-2 dark:border-c-text rounded-lg px-3 py-2 dark:text-c-text cursor-not-allowed  text-base font-medium border-blue-900 text-blue-900">
                            full stack
                        </p>
                    </button>
                </div>
            </div>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8   my-5 sm:mx-5">
                {
                    data.map((item) => (
                        <div key={item} className="h-full">
                            <div className="w-full overflow-auto p-3 dark:border rounded-xl dark:border-c-border dark:bg-c-bg-b  border-gray-300 shadow-2xl">
                                <div className="flex flex-col gap-5 items-start p-2">
                                    <div className="flex flex-col gap-2">
                                        <h2 className="text-2xl  font-semibold">acehstore.netlify.app</h2>
                                        <p className=" dark:text-gray-400 text-sm text-gray-600">
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit atque impedit doloremque iusto, aliquid ipsum cumque sed saepe praesentium veritatis.
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">

                                        <div className="relative flex flex-col items-center">
                                            <p className="dark:bg-c-bg-b bg-blue-800 text-white  rounded-lg px-2 py-1 dark:text-c-text cursor-not-allowed  text-sm">
                                                React Js
                                            </p>
                                        </div>
                                        <div className="relative flex flex-col items-center">
                                            <p className="dark:bg-c-bg-b bg-blue-800 text-white  rounded-lg px-2 py-1 dark:text-c-text cursor-not-allowed  text-sm">
                                                JavaScript
                                            </p>
                                        </div>
                                    </div>
                                    <div className="py-3">
                                        <Image
                                            src="/images/porfolio.png"
                                            alt="ts"
                                            width={500}
                                            height={300}
                                        />
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
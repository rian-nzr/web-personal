import Image from "next/image"


const data = [1, 2, 3, 4, 5, 6, 7, 8]
export default function LBlog() {
    return (
        <div className="py-5">

            <div className="flex lg:flex-row  gap-3 justify-between items-center">
                <h1 className="text-4xl font-bold">Blog</h1>
                <div className="flex gap-5 items-center">

                    <button className="relative flex flex-col items-center">
                        <p className="flex items-center gap-2 border-2 dark:border-c-text rounded-lg px-3 py-2 dark:text-c-text cursor-not-allowed  text-base font-medium border-blue-900 text-blue-900">
                            Filter
                        </p>
                    </button>

                </div>
            </div>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8   my-5 sm:mx-5">
                {
                    data.map((item) => (
                        <>
                            <article className="flex flex-col rounded-md overflow-hidden dark:bg-gray-900 bg-white shadow-lg">
                                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                    <Image
                                        src="/images/porfolio.png"
                                        alt="ts"
                                        width={500}
                                        height={300}
                                        className="object-cover w-full h-52 dark:bg-gray-500"
                                    />
                                </a>
                                <div className="flex flex-col flex-1 p-6">
                                    <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                                    <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Convenire</a>
                                    <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
                                    <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                        <span>June 1, 2020</span>
                                        <span>2.1K views</span>
                                    </div>
                                </div>
                            </article>
                        </>
                    ))
                }
            </div>
        </div>
    )
}
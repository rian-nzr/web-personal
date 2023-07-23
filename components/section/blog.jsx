import Image from "next/image"
import moment from "moment"
import ButtonFilter from "../assets/buttonfilter"


// const data = [1, 2, 3, 4, 5, 6, 7, 8]
export default function LBlog({ data, dataCat , cklik}) {
    // moment.locale('en');
    return (
        <div className="py-5">

            <div className="flex lg:flex-row  gap-3 justify-between items-center">
                <h1 className="text-4xl font-bold">Blog</h1>
                <div className="flex gap-5 items-center">
                    <ButtonFilter data={dataCat} oncklik={cklik} />
                </div>
            </div>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8   my-5 sm:mx-5">
                {
                    data.map((item) => (
                        <article key={item.id} className="flex flex-col rounded-md overflow-hidden dark:bg-gray-900 bg-white shadow-lg">
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
                                <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">{item.attributes.blog_category?.data?.attributes?.title}</a>
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{item.attributes.title}</h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                    <span>June 1, 2020 {moment(item.attributes.updatedAt).format('d MMM')}</span>

                                </div>
                            </div>
                        </article>

                    ))
                }
            </div>
        </div>
    )
}
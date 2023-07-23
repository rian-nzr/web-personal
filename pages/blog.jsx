import axios from "axios";
import LBlog from "@/components/section/blog";
import Head from "next/head";
import { useState } from "react";


export default function Blog({ blogs, catBlogs }) {
    console.log(catBlogs);
    const [nilai, setNilai] = useState('');
    const [data, setData] =useState([])
    // setData(blogs)
    console.log(data);

    const handleClick = (event) => {
        // const value = event.target.textContent;
        console.log('apam');
        // setNilai(value);
    }

    console.log('nilai :', nilai);
    return (
        <>
            <Head>
                <title>Blog</title>
            </Head>
            <div className="container lg:max-w-7xl mx-auto px-3">
         

                <LBlog data={blogs} dataCat={catBlogs}  cklik={handleClick()} />
             
            </div>
        </>
    )
}

export const getStaticProps = async (ctx) => {
    try {
        const res = await axios.get(process.env.URLAPI + '/api/blogs?populate=*');
        const blogs = res.data.data;
        const resCat = await axios.get(process.env.URLAPI + '/api/blog-categories');
        const catBlogs = resCat.data.data;

        return {
            props: {
                blogs,
                catBlogs
            }
        }
    } catch (error) {
        console.log('error', error);
        return { props: { 
            blogs:[],
            catBlogs:[]
        } }
    }
}
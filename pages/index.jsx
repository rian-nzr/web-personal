import Image from 'next/image'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Hero from '@/components/section/hero'
import About from '@/components/section/about'
import Portfolio from '@/components/section/portfolio'
import Skill from '@/components/section/skill'
import Contact from '@/components/section/contact'
import Testimonial from '@/components/section/testimonial'
import axios from 'axios'
import { useState } from 'react'
import Marquee from '@/components/assets/marque'
// import Skills from '@/components/section/skills'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ initialData, resCat }) {
// console.log('res', res);
  // const [data, setData]= useState()
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [data, setData] = useState(initialData);
  const handleCategoryClick = async (category) => {
   
    try {
        const response = await axios.get(`http://localhost:1337/api/portfolios?populate=*&filters[$and][0][portfolio_categories][slug][$eq]=${category}`); // Ganti URL dengan URL Strapi API yang sesuai
        setData(response.data.data);
        setSelectedCategory(category);
    } catch (error) {
        console.error(error);
    }
};

const handleAllClick = () => {
  setData(initialData)
  setSelectedCategory(null)
}
  // setData(res)
  const texts = ['Hello', 'Bonjour', 'Hola', 'Ciao'];
  const interval = 2000;

  return (
    <>
      <Head>
        <title>Home ~ portfolio </title>
      </Head>
      <main >
        <div className="sm:container lg:max-w-7xl w-full mx-auto px-3">
          <Hero />
          <Marquee texts={texts}  interval={interval}/>
        </div>
        <div className="lg:border-t-[0.5px] dark:border-c-bg-b border-gray-300">
          <div className="container lg:max-w-7xl mx-auto px-3 py-5">
            <About />
            

              <Portfolio data={data} category={resCat} clik={handleCategoryClick} allClik={handleAllClick} select={selectedCategory}/>
        
            <Skill />
          </div>
          <div className="dark:bg-gray-900 bg-gray-300">
            <div className="container lg:max-w-7xl mx-auto">
              <Testimonial />
            </div>
          </div>
          <div className="container lg:max-w-7xl mx-auto px-3 py-5">
            <Contact />
          </div>
        </div>
      </main>
    </>
  )
}

export const getStaticProps = async(ctx)=>{
  try {
    const req = await axios.get(process.env.URLAPI + '/api/portfolios?populate=*');
    const cat = await axios.get(process.env.URLAPI + '/api/portfolio-categories');
    const res = req.data.data;
    const resCat = cat.data.data;

    return{
      props:{
        initialData:res,
        resCat
      }
    }
  } catch (error) {
    console.log('error', error);
    return {props: {
      initialData: [],
      resCat: []
      
    }}
  }
}
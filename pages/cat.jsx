import { useState } from 'react';
import axios from 'axios';

const CategoryComponent = ({ categories, initialData }) => {
    const [data, setData] = useState(initialData);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryClick = async (category) => {
        try {
            const response = await axios.get(`http://localhost:1337/api/blogs?populate=*&filters[$and][0][blog_category][slug][$eq]=${category}`); // Ganti URL dengan URL Strapi API yang sesuai
            setData(response.data.data);
            setSelectedCategory(category);
        } catch (error) {
            console.error(error);
        }
    };
    const handleAllClick = () => {
        setData(initialData)
    }
    console.log(data);
    return (
        <div className='max-w-7xl mx-auto'>
            <ul className='flex  justify-between'>
                <li onClick={()=> handleAllClick()}>all</li>
                {categories.map((category) => (
                    <li
                        key={category.id}
                        onClick={() => handleCategoryClick(category.attributes.slug)}
                        style={{
                            fontWeight: selectedCategory === category.attributes.slug ? 'bold' : 'normal',
                        }}
                    >
                        {category.attributes.title}
                    </li>
                ))}
            </ul>

            <div>
                {data.map((item) => (
                    <div key={item.id}>
                        <h3>{item.attributes.title}</h3>
                        {/* <p>{item.description}</p> */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export async function getStaticProps() {
    try {
        const responseCategories = await axios.get(process.env.URLAPI + '/api/blog-categories'); // Ganti URL dengan URL Strapi API yang sesuai
        const responseItems = await axios.get(process.env.URLAPI + '/api/blogs?populate=*'); // Ganti URL dengan URL Strapi API yang sesuai

        const categories = responseCategories.data.data;
        const items = responseItems.data.data;

        return {
            props: {
                categories,
                initialData: items,
            },
        };
    } catch (error) {
        console.error(error);

        return {
            props: {
                categories: [],
                initialData: [],
            },
        };
    }
}

export default CategoryComponent;

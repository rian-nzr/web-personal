import axios from "axios"

export default function Detail({poft}) {
console.log(poft);
    return (
        <>
            apam
        </>
    )

}

export async function getStaticProps(ctx){
    const {dPortfolio } = ctx.params;
    const res = await axios.get(
        process.env.URLAPI +
          `/api/portfolios?filters[slug][$eq]=${dPortfolio}`
      );

    const poft = res.data.data;

    return{
        props:{
            poft
        }
    }
}
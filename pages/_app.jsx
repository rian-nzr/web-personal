import { ThemeProvider } from 'next-themes';
import '@/styles/globals.css'
import Layout from '@/components/Layout'
import 'aos/dist/aos.css';
import { useEffect } from "react";
import AOS from 'aos';


export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init(
      {
        once: true
      }
    );
  }, [])
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

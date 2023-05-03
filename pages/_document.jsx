import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-gray-50 dark:text-gray-100 dark:bg-c-dark'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
      <Html lang='en'>
        <Head>
            <meta name="description" content="This blog will help you to write code faster and solve some of your problems" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
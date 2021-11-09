import Document, { Html, Head, Main, NextScript } from 'next/document'

class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />
          <link href="/static/favicons/favicon.ico" rel="shortcut icon" />
          <link
            href="/static/favicons/apple-touch-icon-152x152.png"
            rel="apple-touch-icon"
            sizes="152x152"
          />
          <link
            href="/static/favicons/apple-touch-icon-120x120.png"
            rel="apple-touch-icon"
            sizes="120x120"
          />
          <link
            href="/static/favicons/apple-touch-icon-76x76.png"
            rel="apple-touch-icon"
            sizes="76x76"
          />
          <link
            href="/static/favicons/apple-touch-icon.png"
            rel="apple-touch-icon"
          />
          <link
            rel="icon"
            href="/static/favicons/apple-touch-icon.png"
            type="image/x-icon"
          />
          <link
            href="/static/favicons/favicon-32x32.png"
            rel="icon"
            sizes="32x32"
            type="image/png"
          />
          <link
            href="/static/favicons/favicon-16x16.png"
            rel="icon"
            sizes="16x16"
            type="image/png"
          />
          <meta property="og:url" content="https://scribedao.com/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="ScribeDAO" />
          <meta
            property="og:description"
            content="Curating and simplifying the endless stream of crypto content."
          />
          <meta
            property="og:image"
            content="https://scribedao.vercel.app/static/favicons/apple-touch-icon-120x120.png"
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://scribedao.com/" />
          <meta name="twitter:title" content="ScribeDAO" />
          <meta
            name="twitter:description"
            content="Curating and simplifying the endless stream of crypto content."
          />
          <meta
            name="twitter:image"
            content="https://scribedao.vercel.app/static/favicons/apple-touch-icon-120x120.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument

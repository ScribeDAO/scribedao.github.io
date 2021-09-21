import Head from 'next/head'

const siteTitle = 'ScribeDAO'

export default function Layout({ children, title }:{children: React.ReactNode,title?: string}) {
  return (
    <div className="grid grid-rows-3">
      <Head>
      <title>{title ? title : siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="We summarize crypto articles that you don't have time to read entirely." />
      </Head>
      <header>
        ScribeDAO
      </header>
      <main>
        {children}
      </main>
      <footer>
        Footer
      </footer>
    </div>
  )
}

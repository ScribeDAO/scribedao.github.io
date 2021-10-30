import React from 'react'
import Head from 'next/head'

import Navbar from './navbar/'
import Footer from './footer'

export default function Layout({
  children,
  title = 'ScribeDAO'
}: {
  children: React.ReactNode
  title?: string
}) {
  return (
    <div className="grid">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="We summarize crypto articles that you don't have time to read entirely."
        />
      </Head>
      {/* <Navbar /> */}
      <main className="lg:container lg:mx-auto lg:px-20 xl:px-28 px-4 sm:px-8 md:px-18">
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  )
}

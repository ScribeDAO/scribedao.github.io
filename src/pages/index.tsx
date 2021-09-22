import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <Layout>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a>ScribeDAO</a>
        </h1>
      </main>
    </Layout>
  )
}

export default Home

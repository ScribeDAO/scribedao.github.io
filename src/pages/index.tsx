import Layout from '../components/layout'

const Home = () => {
  return (
    <Layout>
      <main className="text-black text-lg mt-8 md:px-10 lg:px-32 2xl:px-64">
        <section>
          <h1 className="text-4xl font-bold">
            What is <span className="text-[#6268dc]">ScribeDAO?</span>
          </h1>
          <p>
            Our mission is to lower the barrier to entry to crypto by making
            information digestible.
          </p>
          We are a community of:
          <ol className="list-decimal ml-8">
            <li>
              Knowledge Seekers - we seek information worthwhile to synthesize.
            </li>
            <li>Scribes - we summarize content discovered.</li>
          </ol>
          <p className="mt-2">
            This dynamic is kept simple as people consume information
            differently. Some are well connected and receive content on a daily
            basis but have no time to digest them. Others are interested in
            specific topics and would like to develop mastery and gain a
            reputation on crypto Twitter.
          </p>
        </section>
        <section>
          <h3 className="text-3xl font-bold">Our Plans?</h3>
          <ul className="list-disc ml-8">
            <li>
              We want to continue providing high quality summaries to more
              people.
            </li>
            <li>
              We want to provide compensation for high-performing Scribes.
            </li>
            <li>
              We want to automate the manual process of assigning content and
              rewarding scribes, as it is currently mostly run-on Notion.
            </li>
          </ul>
        </section>
        <section className="mb-16">
          <h3 className="text-3xl font-bold">Funding</h3>
          <ul className="list-disc ml-8">
            <li>
              As a contributor to ScribeDAO we can negotiate a valued outcome.
            </li>
            <li>
              Contributing through Juicebox returns you equivalent $ERC-20 based
              on a discount rate.
            </li>
            <li>
              $ERC-20 is redeemable from excess funding at a rate based on a
              preset bonding curve.
            </li>
            <li>
              Have the ability to reduce your contribution cost to 0 over time.
            </li>
          </ul>
        </section>
      </main>
    </Layout>
  )
}

export default Home

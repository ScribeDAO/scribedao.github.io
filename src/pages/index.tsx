import Layout from '../components/layout'

const Home = () => {
  return (
    <Layout>
      <main className="text-black text-lg mt-8 md:px-10 lg:px-32 2xl:px-64">
        <section>
          <h1 className="text-4xl font-bold">
            What is <span className="text-[#6268dc]">ScribeDAO&apos;s</span>{' '}
            vision?
          </h1>
          <p>
            ScribeDAO is a learn-to-earn DAO that creates incentive structures
            for motivated Web3 community members to upskill themselves from
            readers of content, to synthesizers of content and ultimately to
            creators of content.
          </p>
        </section>
        <section>
          <h3 className="text-3xl font-bold">Our Plan</h3>
          <ul className="list-disc ml-8">
            <li>
              Make knowledge a public good by making it more accessible and
              distilling it down to bite sized chunks.
            </li>
            <li>
              Develop structured roles that empower users to become better
              learners, proficient writers and establish leadership skills.
            </li>
            <li>Gamify learning and reward all users on their journey.</li>
          </ul>
        </section>
        <section>
          <h3 className="text-3xl font-bold">Our Value</h3>
          <h4 className="font-bold">For readers:</h4>
          <ul className="list-disc ml-8">
            <li>
              The current state of media content is overabundant and fragmented.
              ScribeDAO is a curated list of trending articles, emerging
              projects, ongoing governance and material relating to the
              cryptosphere.
            </li>
            <li>
              ScribeTribes within the DAO enable you to deeper explore areas of
              interest or get exposure to a larger spectrum of information.
            </li>
          </ul>
          <h4 className="font-bold mt-4">For writers:</h4>
          <ul className="list-disc ml-8">
            <li>
              The current state of media content is overabundant and fragmented.
              Our Discord provides a space for collaboration for beginner and
              veteran readers and writers. Future roadmap for framework for
              reading/writing workshops to further sharpen skills.
            </li>
            <li>
              A growing following of 2000+ readers to give exposure to writing
              that’s important to you.
            </li>
            <li>
              Get recognized for your work and develop your own following.
            </li>
          </ul>
          <h4 className="font-bold mt-4">For everyone:</h4>
          <ul className="list-disc ml-8">
            <li>
              ScribeDAO aims to be a place to keep up with the latest trends,
              connect with new people and enable ideation to prosper.
            </li>
          </ul>
        </section>
        <section className="mb-16">
          <h3 className="text-3xl font-bold">Funding</h3>
          <h4 className="text-[#6268dc] hover:opacity-80">
            <a
              href="https://juicebox.money/#/p/scribedao"
              target="_blank"
              rel="noreferrer">
              https://juicebox.money/#/p/scribedao
            </a>
          </h4>
          <ul className="list-disc ml-8">
            <li>
              Contributing through Juicebox returns you equivalent $ERC-20 based
              on a discount rate.
            </li>
            <li>
              $ERC-20 is redeemable from excess funding at a rate based on a
              preset bonding curve.
            </li>
            <li>
              $ERC-20 is redeemable from excess funding at a rate based on a
              preset bonding curve.
            </li>
            <li>
              This gives you the ability to reduce your contribution cost to 0
              over time.
            </li>
          </ul>
          <h4 className="text-[#6268dc] hover:opacity-80">
            <a
              href="https://gitcoin.co/grants/4066/scribedao"
              target="_blank"
              rel="noreferrer">
              https://gitcoin.co/grants/4066/scribedao
            </a>
          </h4>
        </section>
      </main>
    </Layout>
  )
}

export default Home

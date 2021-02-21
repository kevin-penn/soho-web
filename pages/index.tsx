import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="三千神机 - SOHO之家">
    <h1>三千神机</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage

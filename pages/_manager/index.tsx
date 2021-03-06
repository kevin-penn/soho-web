import { GetStaticProps } from 'next'
import { User } from '../../interfaces'
import { sampleUserData } from '../../utils/sample-data'
import Layout from '../../components/Layout'

type Props = {
  items: User[]
}

const WithStaticProps = ({ items }: Props) => (
  <Layout title="系统管理">
    <h1>用户登陆</h1>
    用户名: <input type="text" />
    密码: <input type="password" />
    <button>登陆</button>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: User[] = sampleUserData
  return { props: { items } }
}

export default WithStaticProps

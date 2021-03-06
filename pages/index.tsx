import Layout from '../components/Layout'
import useSWR from 'swr'


const IndexPage = () => {
  
  const { data, error } = useSWR('/api/user')

  if (error) return <div>数据加载错误</div>
  if (!data) return <div>正在加载...</div>
  
  return(
    <Layout title="神迹网">
      <h1>三千神机</h1>
    </Layout>
)}

export default IndexPage

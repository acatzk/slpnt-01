import { NextPage } from 'next'
import Layout from '~/layouts/defaultLayout'

const Index: NextPage<{}> = () => {
  return (
    <Layout>
      <h1 className="font-semibold">Hello</h1>
    </Layout>
  )
}

export default Index

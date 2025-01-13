import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'


const TITLE = "Home Page"

const IndexPage = () => {
  return (
    <Layout pageTitle={TITLE}>
      🌲🌴
    </Layout>
  )
}

export const Head = () => <Seo title={TITLE} />

export default IndexPage

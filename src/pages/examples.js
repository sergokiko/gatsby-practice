import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/examples/Header'
import { graphql } from 'gatsby'

const Examples = (props) => {
  console.log(props)
  return (
    <Layout>
      <Header/>
      <p>this is example</p>
    </Layout>
  )
}
export const data = graphql`
query MyQuery
{
  site {
    siteMetadata {
      title
      description
      author
      person {
        age
        name
      }
      data
    }
  }
}
`
export default Examples

import React from 'react'
import Layout from '../components/Layout'

import classes from '../components/products.module.css'
import Image from 'gatsby-image'
import {Link, graphql, useStaticQuery} from 'gatsby'

const MyComponent = ({data}) => {
  const {allContentfulProduct: { nodes: products } } = data
  return (
    <Layout>
      <section className={classes.page}>
        {products.map(product => {
          return <article key={product.id}>
            <Image fluid={product.image.fluid} alt={product.title}/>
            <h3>{product.title}&#160;<span>{product.price}$</span></h3>
            <Link to={`/products/${product.slug}`}>more details...</Link>
          </article>
        })}
      </section>
    </Layout>
  )
}

export const query = graphql`
{
  allContentfulProduct {
    nodes {
      price
      title
      slug
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      id
    }
  }
}
`

export default MyComponent

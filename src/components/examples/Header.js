import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const getData = graphql`
   query FirstQuery {
      site {
       info: siteMetadata {
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
  `;

const Header = () => {
  const {site:{info:{title, person: { name }}}} = useStaticQuery(getData);

  return (
    <div>
      <h1>this is header</h1>
      <h2>Title: {title}</h2>
      <h2>Name: {name}</h2>
    </div>
  )
}

export default Header

import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import Image from 'gatsby-image'

const getImages = graphql`
{
  fixed: file(relativePath: {eq: "pexels-photo2.jpeg"}) {
    childImageSharp {
      fixed (width:200){
        ...GatsbyImageSharpFixed
      }
    }
  }
  fluid: file(relativePath: {eq: "pexels-photo1.jpeg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
}
`

const Images = () => {
  const data = useStaticQuery(getImages)

  return (
    <div>
      <h1>Hello from images</h1>
      <section>
        <article>
          <h3>fixed image</h3>
          <Image fixed={data.fixed.childImageSharp.fixed}/>
        </article>
        <article>
          <h3>fluid image</h3>
          <Image fluid={data.fluid.childImageSharp.fluid}/>
        </article>
      </section>
    </div>
  )
}

export default Images

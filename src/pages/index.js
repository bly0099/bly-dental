import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

import SEO from "../components/seo"

const Home = ({ data }) => (
  <Layout>
    <SEO />
    <section className="hero">
      <figure>
        <Img
          fluid={data.hero.childImageSharp.fluid}
          alt=""
          style={{ height: "100%" }}
          loading="eager"
          durationFadeIn={100}
        />
      </figure>
      <div className="catch">
        <h1>Bly'</h1>
        <h2>
          <span>R２.11.22 13:00-17:00</span> KICK OFF MEETING!!{" "}
          <a href="https://form.run/@shikaroom-1595489144">→お申し込み</a>
        </h2>
      </div>
    </section>
  </Layout>
)

export const query = graphql`
  query {
    hero: file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default Home

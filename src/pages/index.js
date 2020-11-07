import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

import SEO from "../components/seo"

const Home = ({ data }) => (
  <Layout>
    <SEO
    pagetitle="Bly" 
    pagedesc="ブリー"
    />
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
        <h2 className="kickoff">
          <span>　R2.11.22 13:00-17:00</span>
          <br></br>『KICK OFF MEETING!!』{" "}
          <a href="https://form.run/@shikaroom-1595489144">→お申し込み</a>
          <br></br>
          <span>　後日参加者にアーカイブ配信決定！</span>
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

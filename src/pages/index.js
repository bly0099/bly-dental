import React, { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

import SEO from "../components/seo"

const Home = ({ data }) => {
  const headerRef = useRef(null)
  useEffect(() => {
    gsap.from(headerRef.current, {
      duration: 1,
      ease: "power2",
      x: -50,
      opacity: 0,
      delay: 1,
    })
    // gsap.from("img", { x: "-15%", opacity: 0 });
  }, [headerRef])
  return (
    <Layout>
      <SEO pagetitle="Bly" pagedesc="ブリー" />
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
          <h1 ref={headerRef}>Bly'</h1>
          <div className="flex_box">
            <div class="flex_item">
              <span>　R3.3.7 13:00-16:00</span>
              <h2>『スペシャルニーズ&セルフマネジメント』</h2>
              　アーカイブ配信受付中
              <br></br>　
              <div class="animate-this button">
                <a href="https://form.run/@shikaroom-1594383067">more ＞＞</a>
              </div>
            </div>
            <div class="flex_item">
              <span>　R3.6.6</span>
              <h2>『口腔周囲筋ケア&セルフマネジメント』</h2>
              　準備中
              <br></br>　
              <div class="animate-this button">
                <a href="#">more ＞＞</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

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

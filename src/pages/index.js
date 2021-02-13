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
          {/* <div className="basic">
            <span>　　R3.2.7 13:00-17:00</span>
            <br></br>
            <h2>　『BASIC SEMINER!!』 </h2>
            <a href="https://form.run/@shikaroom-1594383067">
              　　→受付スタート
            </a>
            <br></br>
            <br></br>
          </div> */}
          <div className="flex_box">
            <div class="flex_item">
              <span>　R3.3.7</span>
              <h2>『スペシャルニーズ&セルフマネジメント』</h2>
              　受付スタート
              <br></br>　
              <div class="animate-this button">
                <a href="https://form.run/@shikaroom-1594383067>more ＞＞</a>
              </div>
            </div>
            <div class="flex_item">
              <span>　R3.2.7</span>
              <h2>『歯周治療&インプラント』</h2>
              　アーカイブ配信受付中
              <br></br>　
              <div class="animate-this button">
                <a href="https://form.run/@shikaroom-1595489144">more ＞＞</a>
              </div>
            </div>

            {/* <div class="flex_item">
              <div className="cardimg">
                <img src="/images/card.png" alt="" />
                <div className="carditem">
                  <span>　R2.12.1 </span>
                  <h2>『New!!』</h2>
                  　キックオフ
                  <br></br>
                  　ダイジェスト
                  <br></br>
                  <div class="animate-this button">
                    <a href="https://youtu.be/PdPwlT82u_8">movie ＞＞</a>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          {/* <h2 className="kickoff">
          <span>　R2.11.22 13:00-17:00</span>
          <br></br>『KICK OFF MEETING!!』{" "}
          <a href="https://form.run/@shikaroom-1595489144">→アーカイブお申し込み</a>
          <br></br>
          <span>　後日参加者にアーカイブ配信決定！</span>
        </h2> */}
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

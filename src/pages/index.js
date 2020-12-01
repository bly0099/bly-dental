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
        <div className="basic">
          <span>　　R3.2.7 13:00-17:00</span>
          <br></br>
          <h2>　『BASIC SEMINER!!』{" "}</h2>
            <a href="https://form.run/@shikaroom-1595489144">　　→12月受付スタート</a>
          <br></br>
          <br></br>
        </div> 
        <div className="flex_box">
                <div class="flex_item">
                <span>　R2.11.22 13:00-17:00</span>
                  <h2>
                『KICK OFF MEETING!!』
                </h2>
                　アーカイブ配信受付中
                <br></br>
                　
                
                <div class="animate-this button">
                    <a href="https://form.run/@shikaroom-1595489144">more  ＞＞</a>
                </div>
                </div>
                <div class="flex_item">
                <div className="cardimg">
                  <img src="/images/card.png" alt="" />
                <div className="carditem">
                <span>　R2.12.1 </span>
                <h2>
                『New!!』
                </h2>
                　キックオフ
                <br></br>
                　ダイジェスト
                <br></br>
                <div class="animate-this button">
                    <a href="https://youtu.be/PdPwlT82u_8">movie  ＞＞</a>
                </div>
                </div>
                </div>
                </div>
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

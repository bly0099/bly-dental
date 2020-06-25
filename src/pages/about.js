import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTooth, faCheckSquare } from "@fortawesome/free-solid-svg-icons"

import {
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import SEO from "../components/seo"

export default ({ data, location }) => (
  <Layout>
    <SEO
      pagetitle="Blyについて"
      pagedesc="dental"
      pagepath={location.pathname}
      pageimg={data.about.childImageSharp.original.src}
      pageimgw={data.about.childImageSharp.original.width}
      pageimgh={data.about.childImageSharp.original.height}
    />
    <div className="eyecatch">
      <figure>
        <Img
          fluid={data.about.childImageSharp.fluid}
          alt="dental"
        />
      </figure>
    </div>
    <article className="content">
      <div className="container">
        <h1 className="bar">Bly'について</h1>
        <aside className="info">
          <div className="subtitle">
            <FontAwesomeIcon icon={faTooth} />
            ABOUT Bly'
          </div>
        </aside>
        <div className="postbody">
          <p>
          専門的であり、臨床において即戦力になる歯科衛生士を育成。Bly’のセミナーで感化された歯科衛生士がそれぞれ自分が関わる患者に還元していき、自分の糧にもできる事を目標としている。
          </p>
          <h2>
            <FontAwesomeIcon icon={faCheckSquare} />
            メンバー
          </h2>
          <ul>
            <li>歯科衛生士の母neo<a href="https://twitter.com/">
              <FontAwesomeIcon icon={faTwitter} />
              <span className="sr-only"> Twitter </span>
            </a></li>
            <li>三木　武寛<a href="https://twitter.com/">
              <FontAwesomeIcon icon={faTwitter} />
              <span className="sr-only"> Twitter </span>
            </a></li>
            <li>小川　信<a href="https://twitter.com/">
              <FontAwesomeIcon icon={faTwitter} />
              <span className="sr-only"> Twitter </span>
            </a></li>
            <li>高見澤　亜衣<a href="https://twitter.com/">
              <FontAwesomeIcon icon={faTwitter} />
              <span className="sr-only"> Twitter </span>
            </a></li>
            <li>DH MARIE<a href="https://twitter.com/">
              <FontAwesomeIcon icon={faTwitter} />
              <span className="sr-only"> Twitter </span>
            </a></li>
            <li>高橋　佳奈<a href="https://twitter.com/">
              <FontAwesomeIcon icon={faTwitter} />
              <span className="sr-only"> Twitter </span>
            </a></li>
          </ul>
          <h2>
            <FontAwesomeIcon icon={faCheckSquare} />
            ブリーの活動予定
          </h2>
          <ul>
            <li>R2.8　本格始動。セミナー日時発表。</li>
            <li>R2.11　キックオフミーティング開催。（名古屋）</li>
            <li>R3.1〜計７回のセミナーを開催。（名古屋）</li>
            <li>R4.11　キックオフミーティング開催。（東京）</li>
            <li>R4.1〜計７回のセミナーを開催。（東京）</li>
          </ul>
        </div>
      </div>
    </article>
  </Layout>
)

export const query = graphql`
  query {
    about: file(relativePath: { eq: "about.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid_withWebp
        }
        original {
          src
          height
          width
        }
      }
    }
  }
`

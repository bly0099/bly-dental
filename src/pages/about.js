import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTooth, faCheckSquare } from "@fortawesome/free-solid-svg-icons"

// import { faTwitter } from "@fortawesome/free-brands-svg-icons"
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
        <Img fluid={data.about.childImageSharp.fluid} alt="dental" />
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
            我々Blyʻ（ブリー）は、歯科衛生士がそれぞれの医院で、エースとして働く為の知識・技術・あり
            方をセミナーにて習得して頂く事を目標にした歯科チームです。
          </p>
          <h2>
            <FontAwesomeIcon icon={faCheckSquare} />
            メンバー
          </h2>
          <div className="detail">
            <div className="text">
              <h3>歯科衛生士の母neo＞セルフマネジメント </h3>
              <p>
                矯正・一般歯科にて勤務し、これまでに正社員・パート・単発の勤務形態や産休・育休も経験。
                ブランクへの対応や働く環境に疑問を持つ。
                歯科衛生士の離職を減らし、尚且つ「自分にも医院にもメリットがある」と思える歯科衛生士を
                輩出したいと思い、講師陣をスカウトしてBlyʻを設立。{" "}
              </p>
            </div>
            <figure>
              <img src="/images/neo01.jpg" alt="" />
            </figure>
          </div>
        </div>
        <div className="detail">
          <div className="text">
            <h3>三木　武寛＞障害者歯科・訪問歯科 </h3>
            <p>
              香川県高松市にて、みき歯科三越通りクリニックを開業。
              障がいのある方が不自由無く歯科治療を受けられる世の中（ユニバーサルデザイン）にする為に
              は、アシストやメインテナンスで関わる事が多い歯科衛生士にも、「特別な事は何もない」事を
              伝えていきたいとチーム加入。
            </p>
          </div>
          <figure>
            <img src="/images/miki01.jpg" alt="" />
          </figure>
        </div>
        <div className="detail">
          <div className="text">
            <h3>高見澤　亜衣＞口腔周囲筋ケア </h3>
            <p>
              一般歯科だけでは無く、専門学校の講師、全国でのセミナーの他にエステティシャンとしても働
              く歯科衛生士。
              リコール率100%なのは「患者のニーズに合わせたものを提供できる」から。
              技術は勿論、歯科衛生士としての本質であるサポート力に長けている為、これから頑張ろうと
              思っている歯科衛生士の力になれればとチーム加入。
            </p>
          </div>
          <figure>
            <img src="/images/takamisawa01.jpg" alt="" />
          </figure>
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

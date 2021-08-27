import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faTooth } from "@fortawesome/free-solid-svg-icons"

// import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import SEO from "../components/seo";

export default ({ data, location }) => (
  <Layout>
    <SEO
      pagetitle="Blyについて"
      pagedesc="ブリー"
      pagepath={location.pathname}
      pageimg={data.about.childImageSharp.original.src}
      pageimgw={data.about.childImageSharp.original.width}
      pageimgh={data.about.childImageSharp.original.height}
    />

    <article className="content">
      <div className="container">
        <h1 className="bar">Bly'について</h1>
        <div className="eyecatch">
          <figure>
            <Img fluid={data.about.childImageSharp.fluid} alt="dental" />
          </figure>
        </div>
        {
          /* <aside className="info">
          <div className="subtitle">
            <FontAwesomeIcon icon={faTooth} />
            ABOUT Bly'
          </div>
        </aside> */
        }
        <div className="postbody">
          <p>
            我々Blyʻ（ブリー）は、歯科衛生士がそれぞれの医院で、エースとして働く為の知識・技術・あり
            方をセミナーにて習得して頂く事を目標にした歯科チームです。
          </p>
          {
            /* <aside className="info">
            <div className="subtitle">
              <FontAwesomeIcon icon={faTooth} />
              Bly'　MEMBER
            </div>
            
          </aside> */
          }
          <h1 className="bar">Bly' メンバー</h1>
          <div className="detail">
            <div className="text">
              <h3>
                <a href="https://www.instagram.com/dhnoneo">歯科衛生士の母neo</a>
              </h3>
              <h4>セルフマネジメント</h4>
              <p>
                新卒で矯正専門の歯科医院に就職するが１年で退職。妊娠出産育児のブランク、パートの掛け持ち、パワハラ、ひとり親で正社員など、歯科衛生士の働き方で「不安だと感じる要素」を一通り網羅した経験から、歯科衛生士と人生（生活）のバランスをとり、歯科衛生士の不安を拭い去るためのセルフマネジメントを展開します。{" "}
              </p>
            </div>
            <figure>
              <img src="/images/neo01.png" alt="" />
            </figure>
          </div>
        </div>
        <div className="detail">
          <div className="text">
            <h3>
              <a href="https://www.miki-dmc.com/ ">三木　武寛</a>
            </h3>
            <h4>障害者歯科・訪問歯科</h4>
            <p>
              香川県高松市にてみき歯科三越通りクリニックを開業。一般歯科では今まで難しいとされていた障害者歯科の立役者、誰もが不自由なく歯科医療を受けられる世の中（ユニバーサルデザイン）を実現するべく活動しています。
              訪問歯科にも精通しており、超高齢社会の日本に必須な分野を担当。
            </p>
          </div>
          <figure>
            <img src="/images/miki01.png" alt="" />
          </figure>
        </div>
        <div className="detail">
          <div className="text">
            <h3>
              <a href="https://www.instagram.com/ai.takamy">高見澤　亜衣</a>
            </h3>
            <h4>口腔周囲筋ケア</h4>
            <p>
              一般歯科、歯科衛生士専門学校講師、大学講師、全国でのセミナー、エステティシャンと多岐にわたる活躍を見せる歯科衛生士。歯科衛生士の働き方の可能性を開拓していく姿勢に心打たれる歯科衛生士も多い（私neoもその一人）
              人と真摯に向き合う事を大事にしている為、患者さんだけでなく関わる人たちにもポジティブな影響を与えてくれます。
            </p>
          </div>
          <figure>
            <img src="/images/takamisawa01.png" alt="" />
          </figure>
        </div>
        <div className="detail">
          <div className="text">
            <h3>
              <a href="https://ginzadori-shika.jp/">小川 信</a>
            </h3>
            <h4>インプラント</h4>
            <p>
              埼玉県大宮市にて大宮銀座通り歯科を開業。インプラント治療における知識や技術、歯科衛生士が行うメインテナンスの重要性と具体的な清掃方法は勿論、患者さんへの説明、傾聴の重要性はOHIに関わる歯科衛生士へ確実な意識付けになる事間違いなしです。
              移り変わりの多いインプラントの分野をわかりやすく解説してくれます。
            </p>
          </div>
          <figure>
            <img src="/images/ogawa01.png" alt="" />
          </figure>
        </div>
        <div className="detail">
          <div className="text">
            <h3>
              <a href="https://www.instagram.com/dh.mari.e">MARIE</a>
            </h3>
            <h4>院内管理</h4>
            <p>
              一般歯科にて勤務。オープンスタッフを２度経験し、院内の働く環境全てに精通しています。
              院長からの信頼も厚く、人材育成や現場の回し方、患者さんやスタッフとのコミュニケーションを得意とする一方、アレルギーの知識も豊富の為緊急時の対応など歯科でも起こりうる事例へも対応可能な歯科衛生士です。
              現在持病の療養中にてセミナーは休止していますが、ブログの更新を担当しています。
            </p>
          </div>
          <figure>
            <img src="/images/marie01.png" alt="" />
          </figure>
        </div>
        <div className="detail">
          <div className="text">
            <h3>
              <a href="https://www.yuitopia-dc.com">高橋 佳奈</a>
            </h3>
            <h4>歯周治療</h4>
            <p>
              盛岡市にあるゆいとぴあ歯科医院にて勤務。
              日本歯周病学会認定歯科衛生士であり、ベストハイジニスト賞受賞、論文発表までこなす歯周治療のスペシャリストです。
              患者さんの口腔だけではなく、人生に寄り添う為に患者さんのこれまでの出来事や、資料採得、細やかな説明など、歯科衛生士としてできる事を全力で学びたい方は必見です。
            </p>
          </div>
          <figure>
            <img src="/images/takahashi01.png" alt="" />
          </figure>
        </div>
      </div>
    </article>
  </Layout>
);

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
`;

import React from "react"
import Layout from "../components/layout"

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faTooth } from "@fortawesome/free-solid-svg-icons"

import SEO from "../components/seo"

export default ({ location }) => (
  <Layout>
    <SEO pagetitle="スケジュール" pagepath={location.pathname} />
    <article className="content">
      <div className="container">
        <h1 className="bar">Bly' 活動予定</h1>
        {/* <aside className="info">
        <div className="subtitle">
          <FontAwesomeIcon icon={faTooth} />
          活動予定
        </div>
      </aside> */}
        <ul className="event">
        <li>R2.5　Bly'設立</li>
          <li>R2.8　HP開設</li>
          <li>
            R2.11.22 第一回 キックオフミーティング開催（オンライン）
            {/* <a href="https://form.run/@shikaroom-1595489144">アーカイブ</a> */}
          </li>
          <li>R3.2~10  計６回のセミナーを開催（zoom）</li>
          <li>R3.11.23 第二回 キックオフミーティング開催YouTube公開</li>
          <li>R4.1.30  セルフマネジメント① 講師・歯科衛生士の母neo</li>
          <li>R4.2.13  歯周治療① 講師・高橋佳奈先生</li>

          <li></li>
        </ul>
      </div>
    </article>
  </Layout>
)

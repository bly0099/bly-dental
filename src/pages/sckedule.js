import React from "react"
import Layout from "../components/layout"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTooth } from "@fortawesome/free-solid-svg-icons"

import SEO from "../components/seo"

export default ({ location }) => (
  <Layout>
    <SEO pagetitle="スケジュール" pagepath={location.pathname} />
    <div className="container">
      <aside className="info">
        <div className="subtitle">
          <FontAwesomeIcon icon={faTooth} />
          活動予定 Bly'
        </div>
      </aside>
      <ul>
        <li>R2.8　本格始動。セミナー日時発表。</li>
        <li>R2.11　キックオフミーティング開催。（名古屋）</li>
        <li>R3.1〜計７回のセミナーを開催。（名古屋）</li>
        <li>R4.11　キックオフミーティング開催。（東京）</li>
        <li>R4.1〜計７回のセミナーを開催。（東京）</li>
      </ul>
    </div>
  </Layout>
)

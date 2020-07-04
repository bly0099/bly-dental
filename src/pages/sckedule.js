import React from "react"
import Layout from "../components/layout"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons"

import SEO from "../components/seo"

export default ({ location }) => (
  <Layout>
    <SEO 
    pagetitle="スケジュール" pagepath={location.pathname}
    />
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
  </Layout>
)
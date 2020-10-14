import React from "react";
import Layout from "../components/layout";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faTooth } from "@fortawesome/free-solid-svg-icons"

import SEO from "../components/seo";

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
            R2.11.22 キックオフミーティング(zoom)　　
            <a href="https://form.run/@shikaroom-1595489144">お申し込み</a>
          </li>
          <li>R3.1~10 計６回のセミナーを開催（オンライン）</li>
        </ul>
      </div>
    </article>
  </Layout>
);

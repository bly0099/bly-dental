import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";

import SEO from "../components/seo";

const Home = ({ data }) => {
  const headerRef = useRef(null);
  useEffect(() => {
    gsap.from(headerRef.current, {
      duration: 1,
      ease: "power2",
      x: -50,
      opacity: 0,
      delay: 1,
    });
    // gsap.from("img", { x: "-15%", opacity: 0 });
  }, [headerRef]);
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
          <div className="arrow_box">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfMUFcWJiTDqDdEskP0QfeqKWvV57qNvLNY1uFoTVLlQth9aw/viewform">
            <p>
              ベーシックセミナー
            </p>
            <p>お申し込みはこちら＞＞</p>
            </a>
          </div>
          <img ref={headerRef} src="/images/toplogo.png" alt="" />
          <h1>重宝されるベテラン歯科衛生士になるために</h1>
          <h5>Bly'は歯科衛生士と人生の充実をコンセプトにしています。</h5>
        </div>
      </section>
    </Layout>
  );
};

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
`;

export default Home;

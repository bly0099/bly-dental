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
          <h1 ref={headerRef}>Bly'</h1>
          <h2>重宝されるベテラン歯科衛生士になるために</h2>
          <div className="flex_box">
            <div class="flex_item">
              <span>R3</span>
              <h2>『 Bly' ベーシックセミナー 』</h2>
              各種受付中
              <br></br>
              <br></br>
              <div class="animate-this button">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfMUFcWJiTDqDdEskP0QfeqKWvV57qNvLNY1uFoTVLlQth9aw/viewform?usp=sf_link"
                >
                  more ＞＞
                </a>
              </div>
            </div>
            <div class="flex_item">
              <span>R3</span>
              <h2>『Bly' Basic Seminar』</h2>
              受講生の感想
              <br></br>
              <br></br>
              <div class="animate-this button">
                <a href="https://bly-basic-seminar.studio.site">more ＞＞</a>
              </div>
            </div>
          </div>
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

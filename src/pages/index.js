import React from "react";
import styled from "styled-components";

import Seo from "../components/Seo";
import Layout from "../components/Layout";
import HomeHero from "../components/HomeHero";
import Features from "../components/features";
import About from "../components/About";
import WatchVideo from "../components/WatchVideo";
import BestSkills from "../components/BestSkills";
import BestServices from "../components/BestServices";
import PlansAndPricing from "../components/PlansAndPricing";
import OurPortfolio from "../components/OurPortfolio";
import LetsTalk from "../components/LetsTalk";

import { theme } from "../utils/theme";

const Section = styled.div`
  text-align: center;
  background-color: ${theme.black};
  @media screen and (max-width: 768px) {
    padding: 0rem 0.5rem;
  }
  overflow-x: hidden;
`;

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title='Home' description='Welcome to GatsbyJs v1' />
        <Section className='section'>
          <HomeHero />
          <Features />
          <About />
          <WatchVideo />
          <BestSkills />
          <BestServices />
          <PlansAndPricing />
          <OurPortfolio />
          <LetsTalk />
        </Section>
      </Layout>
    );
  }
}

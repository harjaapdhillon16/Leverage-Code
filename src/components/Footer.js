import React from "react";
import styled from "styled-components";

import { theme } from "../utils/theme";

import SocialIcons from "./SocialIcons";

const FooterStyling = styled.footer`
  background-color: ${theme.cardBackgroundColor};
  .headingRed {
    display: inline-block;
    background: linear-gradient(
      90deg,
      ${theme.mainBrandColor} 0%,
      ${theme.lightRed} 52%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 900;
    padding-bottom: 1rem;
  }
  .subtitle {
    color: ${theme.textColorLite} !important;
  }
  .title {
    color: ${theme.white} !important;
  }
  button {
    border-width: 0px;
    background-color: ${theme.lightRed} !important;
    width: 85%;
    height: 3rem;
  }
  .redLink {
    transform: translateY(-1rem);
    :hover {
      color: ${theme.lightRed} !important;
    }
  }
  .paddingBottom {
    padding-bottom: 2rem;
  }
  .textCard {
    padding: 0.4rem 0.6rem;
    background-color: transparent;
    font-weight: 200;
    border: 1px solid ${theme.textColorLite};
    color: ${theme.textColorLite} !important;
    margin: 0.2rem 0.2rem;
    display: inline-block;
    :hover {
      color: ${theme.lightRed} !important;
      border-color: ${theme.lightRed} !important;
    }
  }
  .miniIcon {
    padding-right: 0.5rem;
  }
  .redText {
    :hover {
      span {
        color: ${theme.lightRed} !important;
      }
      color: ${theme.lightRed} !important;
    }
  }
`;

const PopularTags = [
  "Mobile",
  "Development",
  "Technology",
  "App",
  "Education",
  "Business",
  "Health",
  "Insdustry",
];

const Footer = () => {
  return (
    <FooterStyling className='footer'>
      <section className='section'>
        <div className='container has-text-centered'>
          <div className='columns '>
            <div className='column is-3 has-text-left'>
              <h1 className='title is-3 headingRed'>Leverage.</h1>
              <h1 className='subtitle is-6 '>
                Build an amazing website. Impress your customers.
              </h1>
              <h1 className='subtitle is-6 '>
                Follow us on social media to stay on top of news.
              </h1>
              <div className='columns'>
                <div className='column is-7'>
                  <SocialIcons footer={true} />
                </div>
              </div>
            </div>
            <div className='column is-3 has-text-left'>
              <h1 className='title is-4'>Get In Touch</h1>7
              <h1 className='subtitle is-6 redText'>
                <span className='icon is-size-6 miniIcon'>
                  <i className='fas fa-phone' />
                </span>
                +91 8146 902 219
              </h1>
              <h1 className='subtitle is-6 redText'>
                <span className='icon is-size-6 miniIcon'>
                  <i className='far fa-envelope' />
                </span>
                hello@business.com
              </h1>
              <h1 className='subtitle is-6 redText'>
                <span className='icon is-size-6 miniIcon'>
                  <i className='fas fa-map-marker-alt' />
                </span>
                Office, 123
              </h1>
              <button className='button is-primary'>SEND A MESSAGE</button>
            </div>
            <div className='column is-3 has-text-left'>
              <h1 className='title is-4 paddingBottom'>Our Services</h1>
              <h1 className='subtitle is-6 redLink'>Website Development</h1>
              <h1 className='subtitle is-6 redLink'>Building Applications</h1>
              <h1 className='subtitle is-6 redLink'>SEO & Digital Marketing</h1>
              <h1 className='subtitle is-6 redLink'>Branding and Identity</h1>
              <h1 className='subtitle is-6 redLink'>Digital Images & Videos</h1>
            </div>
            <div className='column is-3 has-text-left'>
              <h1 className='title is-3'>Popular Tags</h1>
              {PopularTags.map((tags) => (
                <h1 className='title is-6 card textCard'>{tags}</h1>
              ))}
            </div>
          </div>
        </div>
      </section>
    </FooterStyling>
  );
};
export default Footer;

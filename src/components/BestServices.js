import React from "react";
import styled from "styled-components";

import { theme } from "../utils/theme";

const Container = styled.section`
  .headingWhite {
    color: ${theme.white} !important;
  }
  .alignRight {
    text-align: right;
  }
  .subHeading {
    color: ${theme.textColorLite} !important;
  }
  button {
    background-color: ${theme.lightRed} !important;
    color: ${theme.white};
    border-width: 0px;
    border-radius: 5px;
    height: 3rem;
    padding: 0rem 2rem;
    span {
      color: ${theme.white};
      padding: 1rem;
      padding-right: 1.3rem;
    }
  }
  .card {
    background-color: ${theme.cardBackgroundColor} !important;
    padding: 2.5rem 2rem;
    transition: 0.3s;
    :hover {
      transform: translateY(-0.5rem);
      background: linear-gradient(
        90deg,
        ${theme.mainBrandColor} 0%,
        ${theme.lightRed} 52%
      );
      .headingIcon {
        color: ${theme.white} !important;
      }
      h1 {
        color: ${theme.white} !important;
      }
    }
  }
  .headingIcon {
    color: ${theme.lightRed} !important;
    margin-bottom: 2rem;
  }
  padding-bottom: 0rem;
`;

const subtitle = "Lorem ipsum dolor sit amet consectetur adipiscing elit.";

const Data = [
  { title: "Digital Marketing", subtitle: `${subtitle}`, icon: "" },
  { title: "Trade Shows", subtitle: `${subtitle}`, icon: "" },
  { title: "Branding", subtitle: `${subtitle}`, icon: "" },
  { title: "Content Creation", subtitle: `${subtitle}`, icon: "" },
  { title: "Graphic Design", subtitle: `${subtitle}`, icon: "" },
  { title: "Media Buying", subtitle: `${subtitle}`, icon: "" },
];

const BestServices = () => {
  return (
    <Container className='section'>
      <div className='has-text-left container'>
        <h1 className='title is-2 headingWhite'>Best Services</h1>
        <div className='columns is-vcentered'>
          <div className='column is-10'>
            <h1 className='subtitle is-6 subHeading'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h1>
          </div>
          <div className='column is-2 alignRight'>
            <button className='button'>
              <span className='icon is-size-5'>
                <i className='far fa-comment-alt' />
              </span>
              Contact Us
            </button>
          </div>
        </div>
        <div className='columns is-multiline'>
          {Data.map((item) => (
            <div className='column is-4'>
              <div className='card has-text-centered'>
                <span className='icon is-size-1 headingIcon'>
                  <i className='far fa-arrow-alt-circle-right' />
                </span>
                <h1 className='title is-4 headingWhite'>{item.title}</h1>
                <h1 className='title is-6 subHeading'>{item.subtitle}</h1>
                <span className='icon is-size-3'>
                  <i className='far fa-arrow-alt-circle-right' />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
export default BestServices;

import React from "react";
import styled from "styled-components";

import { theme } from "../utils/theme";

const Container = styled.div`
  section {
    padding-top: 1rem;
  }
  .alignRight {
    text-align: right;
  }
  .redButton {
    background-color: ${theme.lightRed} !important;
    border-width: 0px;
    color: ${theme.white};
    height: 3rem;
    font-size: 18px;
    padding: 0rem 2rem;
    span {
      color: ${theme.white};
      padding: 1rem;
      padding-right: 1.3rem;
    }
  }
  .card {
    background-color: ${theme.cardBackgroundColor};
    padding: 2rem 2rem;
    transition: 0.3s;
    :hover {
      h1 {
        color: ${theme.white} !important;
      }
      background-color: ${theme.lightRed};
      transform: translateY(-0.5rem);
    }
  }
`;

const Subtitle = " Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

const Data = [
  {
    title: "Imaginary Art",
    link: "https://leverage.codings.dev/assets/images/work-1.jpg",
    subtitle: Subtitle,
  },
  {
    title: "Creative Wall",
    link: "https://leverage.codings.dev/assets/images/work-2.jpg",
    subtitle: Subtitle,
  },
  {
    title: "Share Design",
    link: "https://leverage.codings.dev/assets/images/work-3.jpg",
    subtitle: Subtitle,
  },
];

const OurPortfolio = () => {
  return (
    <Container className='has-text-left container'>
      <section className='section'>
        <h1 className='title is-2 has-text-white'>Our Portfolio</h1>
        <div className='columns is-vcentered'>
          <div className='column is-9'>
            <h1 className='title is-5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h1>
          </div>
          <div className='column is-3 alignRight'>
            <button className='button redButton'>
              <span className='icon is-size-5'>
                <i className='far fa-comment-alt' />
              </span>
              CONTACT US
            </button>
          </div>
        </div>
        <div className='columns'>
          {Data.map((item) => (
            <div className='column is-4 has-text-centered'>
              <div className='card'>
                <h1 className='title is-5 has-text-white'>{item.title}</h1>
                <h1 className='title is-6 has-text-grey has-text-weight-light'>
                  {item.subtitle}
                </h1>
                <img src={item.link} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};
export default OurPortfolio;

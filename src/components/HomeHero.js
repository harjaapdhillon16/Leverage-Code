import React from "react";
import styled from "styled-components";

import { Base64Data } from "./ImageDataBase64";
import { theme } from "../utils/theme";

const Container = styled.div`
  max-height: 90vh;
  .title {
    padding-top: 5rem;
    font-size: 540%;
    font-family: "Gilroy", sans-serif;
    font-weight: 900;
    line-height: 7rem;
    letter-spacing: -1px;
    @media screen and (max-width: 768px) {
      padding-top: 0rem;
      font-size: 300%;
      line-height: 100%;
      margin-top: -55%;
      transform: translateY(20rem);
      font-weight: 900;
      text-align: center;
      @media screen and (min-width: 426px) {
        transform: translateY(30rem);
        font-size: 400%;
      }
      @media screen and (min-width: 552px) {
        transform: translateY(40rem);
      }
    }
    display: inline-block;
    background: radial-gradient(${theme.primaryColor}, ${theme.lightRed});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  overflow: hidden;
  .subtitle {
    color: ${theme.textColorLite} !important;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  button {
    background-color: transparent !important;
    border: 2px solid ${theme.lightRed} !important;
    color: ${theme.white};
    padding: 0rem 2rem;
    height: 2.5rem;
    span {
      padding-right: 1rem;
    }
    :hover {
      color: ${theme.white};
      background: radial-gradient(${theme.primaryColor}, ${theme.lightRed});
    }
    @media screen and (max-width: 786px) {
      display: none;
    }
  }
`;

const HomeHero = () => {
  return (
    <div className='container'>
      <Container className='columns is-centered'>
        <div className='column is-8 has-text-left'>
          <h1 className='title is-1'>
            WE CREATE <br /> DIGITAL ARTS.
          </h1>
          <h1 className='subtitle is-5'>
            Here you can choose a beautiful photo and briefly describe your idea
            of ​​innovation.
          </h1>
          <button className='button'>
            <span className='icon'>
              <i className='fas fa-coffee' />
            </span>
            Get Started
          </button>
        </div>
        <div className='column is-4'>
          <img src={Base64Data} />
        </div>
      </Container>
    </div>
  );
};
export default HomeHero;

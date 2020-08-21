import React from "react";
import styled from "styled-components";

import { theme } from "../utils/theme";

const Container = styled.div`
  input {
    background-color: ${theme.black};
    height: 3rem;
    margin-top: 1.2rem;
    border-color: ${theme.cardBackgroundColor};
    border-width: 2px;
  }
  ::placeholder {
    color: ${theme.white} !important;
  }
  button {
    margin-top: 1rem;
    padding: 0rem 2rem;
    height: 2.8rem;
    background-color: ${theme.lightRed};
    border-width: 0px;
    font-size: 18px;
    color: ${theme.white};
    border-radius: 3px;
    .buttonIcon {
      padding-left: 1rem;
    }
  }
`;

const LetsTalk = () => {
  return (
    <Container className='container has-text-left'>
      <section className='section'>
        <div className='columns'>
          <div className='column is-6'>
            <h1 className='title is-1 has-text-white'>Let's Talk?</h1>
            <h1 className='title is-6 has-text-grey has-text-weight-light'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              congue lectus augue. Sed pharetra ornare vulputate.
            </h1>
            <input className='input' type='text' placeholder='Name' />
            <input className='input' type='text' placeholder='Email' />
            <input className='input' type='text' placeholder='Phone' />
            <button className='button'>
              Next
              <span className='icon is-size-5 buttonIcon'>
                <i className='far fa-arrow-alt-circle-right' />
              </span>
            </button>
          </div>
          <div className='column is-6'>
            <img src='https://leverage.codings.dev/assets/images/about-2.jpg' />
          </div>
        </div>
      </section>
    </Container>
  );
};
export default LetsTalk;

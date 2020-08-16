import React from "react";
import styled from "styled-components";

import { theme } from "../utils/theme";

const Container = styled.div`
  h1 {
    color: ${theme.white};
    padding-top: 1rem;
  }
  span {
    color: ${theme.lightRed} !important;
  }
  .subtitle {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`;

const Features = () => {
  return (
    <section className='section'>
      <Container className='columns has-text-centered'>
        <div className='column is-4'>
          <span className='icon is-size-1'>
            <i className='fas fa-camera' />
          </span>
          <h1 className='title is-4'>Image Capture</h1>
          <h2 className='title is-5'>
            Lorem ipsum dolor sit amet as consectetur adipiscing elit praesent
            diam lacus, dapibus sed imper.
          </h2>
        </div>
        <div className='column is-4'>
          <span className='icon is-size-1'>
            <i className='far fa-edit' />
          </span>
          <h1 className='title is-4'>Customization</h1>
          <h2 className='title is-5'>
            Lorem ipsum dolor sit amet as consectetur adipiscing elit praesent
            diam lacus, dapibus sed imper.
          </h2>
        </div>
        <div className='column is-4'>
          <span className='icon is-size-1'>
            <i className='fas fa-lock' />
          </span>
          <h1 className='title is-4'>Data Security</h1>
          <h2 className='title is-5'>
            Lorem ipsum dolor sit amet as consectetur adipiscing elit praesent
            diam lacus, dapibus sed imper.
          </h2>
        </div>
      </Container>
    </section>
  );
};
export default Features;

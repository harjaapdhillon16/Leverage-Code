import React from "react";
import styled from "styled-components";

import { theme } from "../utils/theme";

const Container = styled.div`
  padding-top: 1rem;
  .title {
    color: ${theme.white};
  }
  .subtitle {
    color: ${theme.textColorLite} !important;
  }
`;

const BestSkills = () => {
  return (
    <Container className='columns is-centered is-multiline'>
      <div className='column is-8'>
        <h1 className='title is-1'>Our Best Skills</h1>
        <h1 className='subtitle is-6'>
          Lorem ipsum dolor sit amet consectetur adipiscing elit nullam placerat
          est quis lorem tristique aliquet cras quis tristique felis vitae
          eleifend sapien.
        </h1>
      </div>
      <div className='column is-12'>
        <div className='columns'>
          <div className='column is-3'>
            <h1 className='subtitle is-4 has-text-weight-bold'>42%</h1>
            <h1 className='title is-3'>Marketing</h1>
          </div>
          <div className='column is-3'>
            <h1 className='subtitle is-4 has-text-weight-bold'>60%</h1>
            <h1 className='title is-3'>Branding</h1>
          </div>
          <div className='column is-3'>
            <h1 className='subtitle is-4 has-text-weight-bold'>84%</h1>
            <h1 className='title is-3'>Web Design</h1>
          </div>
          <div className='column is-3'>
            <h1 className='subtitle is-4 has-text-weight-bold'>100%</h1>
            <h1 className='title is-3'>WordPress</h1>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default BestSkills;

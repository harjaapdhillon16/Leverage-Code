import React from "react";
import styled from "styled-components";

import { theme } from "../utils/theme";

const Container = styled.div`
  .title {
    color: ${theme.white} !important;
    padding-bottom: 1rem;
  }
  .subtitle {
    color: ${theme.textColorLite} !important;
  }
  .icon {
    color: ${theme.primaryColor} !important;
  }
`;

const About = () => {
  return (
    <div className='container'>
      <Container className='columns has-text-left is-vcentered'>
        <div className='column is-6'>
          <h1 className='title is-1'>About Us</h1>
          <h1 className='subtitle is-6'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            diam lacus, dapibus sed imperdiet consectetur.
          </h1>
          <div className='columns is-multiline'>
            <div className='column is-12'>
              <div className='columns is-vcentered has-text-centered'>
                <div className='column is-2'>
                  <span className='icon is-size-1'>
                    <i className='fas fa-th-large' />
                  </span>
                </div>
                <div className='column is-10 has-text-left'>
                  <h1 className='title is-4'>Design</h1>
                  <h1 className='subtitle is-6'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </h1>
                </div>
              </div>
            </div>
            <div className='column is-12'>
              <div className='columns is-vcentered has-text-centered'>
                <div className='column is-2'>
                  <span className='icon is-size-1'>
                    <i className='fas fa-fire' />
                  </span>
                </div>
                <div className='column is-10 has-text-left'>
                  <h1 className='title is-4'>Branding</h1>
                  <h1 className='subtitle is-6'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='column is-6'>
          <img src='images/about.jpg' />
        </div>
      </Container>
    </div>
  );
};
export default About;

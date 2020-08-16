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

const WatchVideo = () => {
  return (
    <Container className='columns is-centered'>
      <div className='column is-8'>
        <h1 className='title is-1'>Watch the Video</h1>
        <h1 className='subtitle is-6'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet
          ligula nec leo elementum semper. Mauris aliquet egestas metus, id
          pellentesque mauris tincidunt.
        </h1>
        <img src='https://leverage.codings.dev/assets/images/news-4.jpg' />
      </div>
    </Container>
  );
};
export default WatchVideo;

import React from "react";
import styled from "styled-components";

import { theme } from "../utils/theme";

const Container = styled.div`
  span {
    color: ${theme.white};
    padding: 0rem 1rem;
    :hover {
      color: ${theme.lightRed};
    }
  }
`;
const Icons = [
  {
    icon: "fab fa-facebook-f",
  },
  {
    icon: "fab fa-instagram",
  },
  {
    icon: "fab fa-twitter",
  },
];

const SocialIcons = () => {
  return (
    <Container className='columns'>
      {Icons.map((item) => (
        <div className='column is-4'>
          <span className='icon is-size-5'>
            <i className={item.icon} />
          </span>
        </div>
      ))}
    </Container>
  );
};
export default SocialIcons;

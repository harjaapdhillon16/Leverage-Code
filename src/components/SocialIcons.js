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
  .footerIcon {
    color: ${theme.lightRed};
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

const Icons2 = [
  {
    icon: "fab fa-facebook-f",
  },
  {
    icon: "fab fa-instagram",
  },
  {
    icon: "fab fa-twitter",
  },
  {
    icon: "fab fa-linkedin-in",
  },
];

const SocialIcons = ({ footer }) => {
  return (
    <Container className='columns is-mobile'>
      {footer
        ? Icons2.map((item) => (
            <div className='column is-3'>
              <span className='icon is-size-5 footerIcon'>
                <i className={item.icon} />
              </span>
            </div>
          ))
        : Icons.map((item) => (
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

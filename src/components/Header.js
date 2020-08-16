/* eslint global-require: 0 */

import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { theme } from "../utils/theme";

import SocialIcons from "./SocialIcons";

const Section = styled.section`
  background-color: ${theme.black};
  padding: 1rem 1.5rem;
  font-family: ${(props) => props.theme.primaryFontFamily};
  .navbar {
    background-color: ${theme.black};
  }
  .navbar-brand {
    margin-right: 20px;
    .title {
      color: ${theme.white} !important;
      padding-top: 0.7rem;
    }
    span {
      color: ${theme.primaryColor};
    }
  }
  .navbar-menu {
    @media screen and (max-width: 600px) {
      position: absolute;
      width: 100%;
      transition: 0.6s;
      background-color: ${theme.black};
    }
  }
  .navbar-item {
    font-weight: 600;
    font-size: 1rem;
    padding: 0rem 1rem;
    color: ${(props) => props.theme.white};
    :hover {
      color: ${theme.lightRed};
      background-color: transparent;
    }
  }
  .navbar-burger {
    background-color: #1c1323;
    color: #fff;
    opacity: 0.6;
    border-radius: 4px;
  }
  .navbar-menu {
    background-color: ${theme.black};
  }
  .button-gradient {
    color: ${theme.white};
    border: 2px solid ${theme.lightRed};
    padding: 0.5rem 1.5rem;
    transition: 0.2s;
    span {
      padding-right: 1rem;
    }
    font-weight: 200;
    :hover {
      background-color: ${theme.primaryColor};
      color: ${theme.white};
    }
  }
`;

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };
  }

  handleMobileMenu() {
    const { isActive } = this.state;

    this.setState({
      isActive: !isActive,
    });
  }

  render() {
    const { isActive } = this.state;

    return (
      <Section className='section'>
        <div className='container'>
          <nav
            className='navbar'
            role='navigation'
            aria-label='main navigation'
          >
            <div className='navbar-brand'>
              <Link to='/'>
                <h1 className='title is-4 has-text-weight-bold'>
                  Leverage<span>.</span>
                </h1>
              </Link>
              <a
                href='#'
                role='button'
                className={
                  isActive
                    ? "navbar-burger burger mobile is-active"
                    : "navbar-burger burger mobile"
                }
                aria-label='menu'
                aria-expanded='false'
                data-target='navbarBasicExample'
                onClick={() => this.handleMobileMenu()}
              >
                <span aria-hidden='true' />
                <span aria-hidden='true' />
                <span aria-hidden='true' />
              </a>
            </div>
            <div className={isActive ? "navbar-menu is-active" : "navbar-menu"}>
              <div className='navbar-end'>
                <Link to='/' className='navbar-item'>
                  Home
                </Link>
                <Link to='/about' className='navbar-item'>
                  About
                </Link>
                <Link to='/news' className='navbar-item'>
                  Services
                </Link>
                <Link to='/contact' className='navbar-item'>
                  Pricing
                </Link>
                <Link to='/contact' className='navbar-item'>
                  Portfolio
                </Link>
                <Link to='/contact' className='navbar-item'>
                  Team
                </Link>
                <div className='navbar-item'>
                  <SocialIcons />
                </div>
                <div className='navbar-item'>
                  <a className='button-gradient'>
                    <span className='icon'>
                      <i className='fas fa-rocket' />
                    </span>
                    BUY NOW
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </Section>
    );
  }
}

import React from "react";
import styled from "styled-components";

import { theme } from "../utils/theme";

const Container = styled.div`
  padding-top: 1rem;
  .headingText {
    color: ${theme.white};
  }
  .subtitle {
    color: ${theme.textColorLite} !important;
  }
  span {
    color: ${theme.white};
  }
  .paddingTop {
    padding-top: 1rem;
  }
  .card {
    padding: 2rem 0rem;
    background-color: ${theme.cardBackgroundColor};
    border-radius: 5px;
    margin: 0.5rem;
    .greyIcon {
      color: ${theme.textColorLite} !important;
    }
    .bottomButton {
      background-color: ${theme.lightRed} !important;
      color: ${theme.white};
      height: 3rem;
      padding: 0rem 2rem;
      border-width: 0px;
      .buttonIcon {
        padding-right: 1rem;
      }
    }

    .underLineWithMargin {
      border: 0px solid ${theme.textColorLite};
      border-bottom-width: 2px;
    }
    .marginTop {
      padding-top: 0.4rem;
    }
    .title {
      color: ${theme.white};
    }
    .topIcon {
      padding-bottom: 1rem;
      color: ${theme.lightRed} !important;
    }
    .topButton {
      background-color: transparent;
      width: 90%;
      border-radius: 40px;
      color: ${theme.lightRed} !important;
      font-size: 40px;
      height: 4rem;
      font-weight: bold;
    }
    .alignRight {
      text-align: right;
    }
    transition: 0.2s;
    :hover {
      transform: translateY(-0.5rem);
      button {
        color: ${theme.white} !important;
      }
      background-color: ${theme.lightRed};
      span {
        color: ${theme.white} !important;
      }
      h1 {
        color: ${theme.white} !important;
      }
    }
    .mobilePad {
      @media screen and (max-width: 768px) {
        margin-left: 1rem;
        margin-right: 1rem;
      }
    }
  }
`;

const Data = [
  {
    heading: "Essential",
    headingIcon: "fas fa-shopping-cart",
    price: 129,
    points: [
      { text: "3 GB Pictures", icon: true },
      { text: "Secure Online Transfer", icon: true },
      { text: "Unlimited Styles", icon: true },
      { text: "Customer Service", icon: true },
      { text: " Manual Backup", icon: false },
    ],
  },
  {
    heading: "Standard",
    headingIcon: "fas fa-fire",
    price: 199,
    points: [
      { text: "3 GB Pictures", icon: true },
      { text: "Secure Online Transfer", icon: true },
      { text: "Unlimited Styles", icon: false },
      { text: "Customer Service", icon: false },
      { text: " Manual Backup", icon: false },
    ],
  },
  {
    heading: "Premium",
    headingIcon: "far fa-gem",
    price: 299,
    points: [
      { text: "3 GB Pictures", icon: true },
      { text: "Secure Online Transfer", icon: true },
      { text: "Unlimited Styles", icon: true },
      { text: "Customer Service", icon: true },
      { text: " Manual Backup", icon: true },
    ],
  },
];

const PlansAndPricing = () => {
  return (
    <section className='section'>
      <Container className='columns is-centered is-multiline'>
        <div className='column is-8'>
          <h1 className='title is-1 headingText'>Plans and Pricing</h1>
          <h1 className='subtitle is-6'>
            Lorem ipsum dolor sit amet consectetur adipiscing elit nullam
            placerat est quis lorem tristique aliquet cras quis tristique felis
            vitae eleifend sapien.
          </h1>
        </div>
        <div className='column is-10'>
          <div className='columns is-centered'>
            {Data.map((item) => (
              <div className='column is-4 has-text-centered card'>
                <span className='icon is-size-2 topIcon'>
                  <i className={item.headingIcon} />
                </span>
                <h1 className='title is-3 paddingTop'>{item.heading}</h1>
                <button className='button is-large topButton'>
                  $ {item.price}
                </button>
                <div className='columns is-centered paddingTop mobilePad'>
                  <div className='column is-10'>
                    {item.points.map((data) => (
                      <div className='columns is-vcentered is-mobile underLineWithMargin'>
                        <div className='column is-10 has-text-left'>
                          <h1 className='subtitle is-6'>{data.text}</h1>
                        </div>
                        <div className='column is-2 alignRight'>
                          <span className='icon is-size-5 marginTop greyIcon'>
                            {data.icon ? (
                              <i className='far fa-check-circle' />
                            ) : (
                              <i className='far fa-times-circle' />
                            )}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <button className='button bottomButton'>
                  <span className='icon is-size-5 buttonIcon'>
                    <i className='far fa-arrow-alt-circle-right' />
                  </span>
                  Thing Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PlansAndPricing;

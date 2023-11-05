import React from "react";
import styled, { css } from "styled-components";

type Props = {};

const RugbyStandee = (props: Props) => {
  return (
    <Container>
      <img className="rugby" src="/static/rugby.png" alt="rugby" />
      <WrapIconPlus src="/static/plus.svg" alt="plus" width={15} height={15} />
      <WrapIconPlusSecond
        src="/static/plus.svg"
        alt="plus"
        width={15}
        height={15}
      />
      <HrTop />
    </Container>
  );
};

export default RugbyStandee;

const Container = styled.div`
  position: absolute;
  z-index: 10;
  left: 175px;
  top: 0;
  width: 678px;
  height: 950px;
  .rugby {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 10;
  }
  ${({ theme }) => css`
    @media (min-width: ${theme?.screen?.tablet}px) and (max-width: ${theme
        ?.screen?.desktop - 1}px) {
      width: 518px;
      height: 699px;
      top: 50px;
      left: -160px;
    }
    @media (max-width: ${theme?.screen?.tablet - 1}px) {
      width: 200px;
      height: 281px;
      top: 70px;
      left: 50%;
      transform: translate(-50%);
    }
  `}
`;

const WrapIconPlus = styled.img`
  position: absolute;
  left: 44%;
  top: -10px;
  display: none;
  ${({ theme }) => css`
    @media (min-width: ${theme?.screen?.tablet}px) and (max-width: ${theme
        ?.screen?.desktop - 1}px) {
      display: initial;
    }
    @media (min-width: ${theme?.screen?.mobile}px) and (max-width: ${theme
        ?.screen?.tablet - 1}px) {
      display: initial;
      left: 10%;
      top: 8%;
    }
  `}
`;

const WrapIconPlusSecond = styled(WrapIconPlus)`
  left: 40%;
  top: -20px;
  opacity: 0.3;
  ${({ theme }) => css`
    @media (min-width: ${theme?.screen?.mobile}px) and (max-width: ${theme
        ?.screen?.tablet - 1}px) {
      display: initial;
      left: 2%;
      top: 4%;
    }
  `}
`;

const HrTop = styled.hr`
  z-index: 1;
  position: absolute;
  top: 90px;
  right: 70px;
  width: 217px;
  height: 5px;
  background-color: #936eea;
  border: none;
  transform: rotate(310deg);
  display: none;
  ${({ theme }) => css`
    @media (min-width: ${theme?.screen?.tablet}px) and (max-width: ${theme
        ?.screen?.desktop - 1}px) {
      display: initial;
    }
    @media (max-width: ${theme?.screen?.tablet - 1}px) {
      display: initial;
      height: 3px;
      top: 112px;
      right: -15%;
      width: 300px;
    }
  `}
`;

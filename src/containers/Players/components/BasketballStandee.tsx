import React from "react";
import styled, { css } from "styled-components";

type Props = {};

const BasketballStandee = (props: Props) => {
  return (
    <Container>
      <img
        className="basketball"
        src="/static/basketball.png"
        alt="basketball"
      />
      <WrapIconPlus src="/static/plus.svg" alt="plus" width={15} height={15} />
      <WrapIconPlusSecond
        src="/static/plus.svg"
        alt="plus"
        width={15}
        height={15}
      />
      <WrapIconPlusThree
        src="/static/plus.svg"
        alt="plus"
        width={15}
        height={15}
      />
      <HrTop />
      <HrTwo />
    </Container>
  );
};

export default BasketballStandee;

const Container = styled.div`
  position: absolute;
  right: 125px;
  top: -130px;
  width: 991px;
  height: 815px;
  .basketball {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 10;
  }
  ${({ theme }) => css`
    @media (min-width: ${theme?.screen?.tablet}px) and (max-width: ${theme
        ?.screen?.desktop - 1}px) {
      width: 691px;
      height: 568px;
      top: -10px;
      right: -244px;
    }
    @media (max-width: ${theme?.screen?.tablet - 1}px) {
      width: 302px;
      height: 249px;
      left: 2px;
      right: unset;
      top: 12%;
    }
  `}
`;

const WrapIconPlus = styled.img`
  position: absolute;
  left: 30%;
  top: 18%;
  opacity: 0.3;
  ${({ theme }) => css`
    @media (max-width: ${theme?.screen?.tablet - 1}px) {
      top: 5%;
      left: 24%;
      opacity: 1;
    }
  `}
`;

const WrapIconPlusSecond = styled(WrapIconPlus)`
  left: 28%;
  top: 16%;
  opacity: 1;
  ${({ theme }) => css`
    @media (max-width: ${theme?.screen?.tablet - 1}px) {
      top: 0%;
      left: 20%;
      opacity: 0.3;
    }
  `}
`;

const WrapIconPlusThree = styled(WrapIconPlus)`
  left: unset;
  right: 18%;
  top: 48%;
  opacity: 1;
  ${({ theme }) => css`
    @media (max-width: ${theme?.screen?.tablet - 1}px) {
      right: 8%;
      top: 64%;
    }
  `}
`;

const HrTop = styled.hr`
  z-index: 1;
  position: absolute;
  top: 30%;
  right: 0%;
  width: 400px;
  height: 5px;
  background-color: #936eea;
  border: none;
  transform: rotate(310deg);
  margin: 0;
  ${({ theme }) => css`
    @media (min-width: ${theme?.screen?.tablet}px) and (max-width: ${theme
        ?.screen?.desktop - 1}px) {
      top: 20%;
    }
    @media (max-width: ${theme?.screen?.tablet - 1}px) {
      width: 120px;
      height: 3px;
      right: 2%;
    }
  `}
`;

const HrTwo = styled(HrTop)`
  top: unset;
  right: unset;
  bottom: 30%;
  left: 15%;
  ${({ theme }) => css`
    @media (min-width: ${theme?.screen?.tablet}px) and (max-width: ${theme
        ?.screen?.desktop - 1}px) {
      bottom: 48%;
      left: 15%;
    }
  `}
`;

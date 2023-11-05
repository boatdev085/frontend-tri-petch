import styled, { css } from "styled-components";

export const variantsMapping = {
  h1: "h1",
  h2: "h2",
  body: "div",
  span: "span",
};

export interface TypographyProps {
  children: React.ReactNode | React.ReactNode[];
  variant?: keyof typeof variantsMapping;
  className?: string;
  color?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  className,
  ...prop
}) => {
  const mappingTag = (
    variant ? variantsMapping[variant] : variantsMapping["body"]
  ) as any;

  return (
    <StyledDynamicComponent
      {...prop}
      as={mappingTag}
      className={`${className} typography--variant-${
        variant || "body"
      } variant-${variant || "body"}`}
    >
      {children}
    </StyledDynamicComponent>
  );
};

export default styled(Typography)``;

interface StyledDynamicComponentProps {
  color?: string;
  translate?: string;
}
const StyledDynamicComponent = styled.div<StyledDynamicComponentProps>`
  position: relative;
  color: #000;
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0;
  font-style: normal;
  font-weight: 400;
  &.typography--variant-h1 {
    font-size: 90px;
    line-height: normal;
    ${({ theme }) => css`
      @media (min-width: ${theme?.screen?.mobile}px) and (max-width: ${theme
          ?.screen?.tablet - 1}px) {
        font-size: 50px;
      }
    `}
  }

  &.typography--variant-h2 {
    font-size: 36px;
    line-height: normal;
    letter-spacing: 1.5px;
    ${({ theme }) => css`
      @media (min-width: ${theme?.screen?.mobile}px) and (max-width: ${theme
          ?.screen?.tablet - 1}px) {
        font-size: 28px;
      }
    `}
  }

  &.variant-body {
    font-size: 20px;
    line-height: 28px;
    ${({ theme }) => css`
      @media (min-width: ${theme?.screen?.tablet}px) and (max-width: ${theme
          ?.screen?.desktop - 1}px) {
        font-size: 18px;
      }
      @media (min-width: ${theme?.screen?.mobile}px) and (max-width: ${theme
          ?.screen?.tablet - 1}px) {
        font-size: 15px;
      }
    `}
  }

  &.variant-span {
    font-size: 18px;
    line-height: normal;
    ${({ theme }) => css`
      @media (min-width: ${theme?.screen?.mobile}px) and (max-width: ${theme
          ?.screen?.tablet - 1}px) {
        font-size: 14px;
      }
    `}
  }
`;

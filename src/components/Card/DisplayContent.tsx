import styled, { css } from "styled-components";
import Typography from "../Typography";

type Props = {
  title: string;
  description: string;
  runningNumber: number;
  runningNumberColor?: string;
  borderRunningNumberColor?: string;
  descriptionColor?: string;
};

const DisplayContent = (props: Props) => {
  const {
    title,
    description,
    runningNumberColor,
    borderRunningNumberColor,
    runningNumber,
    descriptionColor,
  } = props;
  return (
    <Container>
      <Typography>
        <WrapRunningNumber>
          <Typography variant="span" style={{ color: runningNumberColor }}>
            {runningNumber.toString().padStart(2, "0")}
          </Typography>
          <HrInRunningNumber style={{ background: borderRunningNumberColor }} />
        </WrapRunningNumber>
        <Typography variant="h2" style={{ color: "#C2C2C2" }}>
          {title}
        </Typography>
      </Typography>
      <Typography variant="body" style={{ color: descriptionColor }}>
        {description}
      </Typography>
    </Container>
  );
};

export default DisplayContent;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 31px;

  ${({ theme }) => css`
    @media (min-width: ${theme?.screen?.tablet}px) and (max-width: ${theme
        ?.screen?.desktop - 1}px) {
      font-size: 21px;
    }
    @media (min-width: ${theme?.screen?.mobile}px) and (max-width: ${theme
        ?.screen?.tablet - 1}px) {
      font-size: 20px;
    }
  `}
`;

const WrapRunningNumber = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const HrInRunningNumber = styled.hr`
  margin: 0;
  height: 5px;
  width: 100%;
  border-radius: 2.5px;
  background: #603ebe;
  border: none;
`;

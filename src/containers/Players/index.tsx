import styled, { css } from "styled-components";
import Typography from "../../components/Typography";
import DisplayContent from "../../components/Card/DisplayContent";
import BasketballStandee from "./components/BasketballStandee";
import Carousel from "../../components/Carousel";

const PlayerConfig = [
  {
    title: "CONNECTION",
    description: `Connect with talented athlete directly, you can watch their 
      skills through video showreels directly from Surface 1.`,
    background: "#fff",
  },
  {
    title: "COLLABORATION",
    description: `Work with recruiter to increase your chances of finding
     talented athlete.`,
    background: "#F5F4F9",
  },
  {
    title: "GROWTH",
    description: `Save your time, recruit proper athlets for your team.`,
    background: "#090C35",
    runningNumberColor: "#8F6BE8",
    borderRunningNumberColor: "#fff",
    descriptionColor: "#fff",
  },
];
const PlayerPage = () => {
  return (
    <Container>
      <BasketballStandee />
      <WrapTitle>
        <Typography variant="h1" style={{ color: "#E7E7E7", marginBottom: 6 }}>
          PLAYERS
        </Typography>
      </WrapTitle>
      <Carousel>
        {PlayerConfig.map((c, i) => (
          <WrapContentCard key={c.title} style={{ background: c.background }}>
            <DisplayContent
              title={c.title}
              description={c.description}
              runningNumberColor={c.runningNumberColor}
              descriptionColor={c.descriptionColor}
              borderRunningNumberColor={c.borderRunningNumberColor}
              runningNumber={i + 1}
            />
          </WrapContentCard>
        ))}
      </Carousel>
    </Container>
  );
};

export default PlayerPage;

const Container = styled.div`
  position: relative;
  margin-top: 124px;
  ${({ theme }) => css`
    @media (min-width: ${theme?.screen?.tablet}px) and (max-width: ${theme
        ?.screen?.desktop - 1}px) {
      margin-top: 52px;
      overflow: hidden;
    }
    @media (min-width: ${theme?.screen?.mobile}px) and (max-width: ${theme
        ?.screen?.tablet - 1}px) {
      margin-top: 19px;
    }
  `}
`;

const WrapTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 321px;
  > * {
    flex: 0.5;
  }
  ${({ theme }) => css`
    @media (min-width: ${theme?.screen?.tablet}px) and (max-width: ${theme
        ?.screen?.desktop - 1}px) {
      padding-left: 30px;
      > * {
        flex: 0.6;
      }
    }
    @media (min-width: ${theme?.screen?.mobile}px) and (max-width: ${theme
        ?.screen?.tablet - 1}px) {
      padding-left: 18px;
      padding-bottom: 237px;
      > * {
        flex: 1;
        height: 100%;
      }
    }
  `}
`;

const WrapContentCard = styled(WrapTitle)`
  padding: 53px 0px 56px 321px;
  &:last-child {
    padding: 80px 0px 98px 321px;
  }
  ${({ theme }) => css`
    @media (min-width: ${theme?.screen?.tablet}px) and (max-width: ${theme
        ?.screen?.desktop - 1}px) {
      padding: 30px;
      &:last-child {
        padding: 30px 30px 72px 30px;
      }
    }
    @media (min-width: ${theme?.screen?.mobile}px) and (max-width: ${theme
        ?.screen?.tablet - 1}px) {
      padding: 72px 18px 77px 18px;
      flex: 0 0 90%;

      &:last-child {
        padding: 72px 18px 77px 18px;
        flex: 0 0 90%;
      }
    }
  `}
`;

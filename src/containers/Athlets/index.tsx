import styled, { css } from "styled-components";
import Typography from "../../components/Typography";
import DisplayContent from "../../components/Card/DisplayContent";
import RugbyStandee from "./components/RugbyStandee";
import Carousel from "../../components/Carousel";

const AthletConfig = [
  {
    title: "CONNECTION",
    description:
      "Connect with coaches directly, you can ping coaches to view profile.",
    background: "#fff",
  },
  {
    title: "COLLABORATION",
    description:
      "Work with other student athletes to  increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.",
    background: "#F5F4F9",
  },
  {
    title: "GROWTH",
    description:
      "Resources and tools for you to get better as a student Athelte.\nAccess to training classes, tutor sessions, etc ",
    background: "#5E3DB3",
    borderRunningNumberColor: "#fff",
    descriptionColor: "#fff",
  },
];
const AthletsPage = () => {
  return (
    <Container>
      <RugbyStandee />
      <WrapTitle>
        <Typography variant="h1" style={{ color: "#E7E7E7", marginBottom: 6 }}>
          ATHLETS
        </Typography>
      </WrapTitle>
      <Carousel>
        {AthletConfig.map((c, i) => (
          <WrapContentCard key={c.title} style={{ background: c.background }}>
            <DisplayContent
              title={c.title}
              description={c.description}
              borderRunningNumberColor={c.borderRunningNumberColor}
              descriptionColor={c.descriptionColor}
              runningNumber={i + 1}
            />
          </WrapContentCard>
        ))}
      </Carousel>
    </Container>
  );
};

export default AthletsPage;

const Container = styled.div`
  position: relative;
  margin-top: 24px;
  ${({ theme }) => css`
    @media (min-width: ${theme?.screen?.tablet}px) and (max-width: ${theme
        ?.screen?.desktop - 1}px) {
      margin-top: 87px;
    }
    @media (min-width: ${theme?.screen?.mobile}px) and (max-width: ${theme
        ?.screen?.tablet - 1}px) {
      margin-top: 0;
    }
  `}
`;

const WrapTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 195px;
  > * {
    flex: 0.5;
  }
  ${({ theme }) => css`
    @media (min-width: ${theme?.screen?.tablet}px) and (max-width: ${theme
        ?.screen?.desktop - 1}px) {
      padding-right: 30px;
      > * {
        flex: 0.6;
      }
    }
    @media (min-width: ${theme?.screen?.mobile}px) and (max-width: ${theme
        ?.screen?.tablet - 1}px) {
      padding-right: 0;
      padding-left: 18px;
      padding-bottom: 230px;
      > * {
        flex: 1;
        height: 100%;
      }
    }
  `}
`;

const WrapContentCard = styled(WrapTitle)`
  padding: 53px 195px 56px 0;
  &:last-child {
    padding: 80px 195px 98px 0;
  }
  ${({ theme }) => css`
    @media (min-width: ${theme?.screen?.tablet}px) and (max-width: ${theme
        ?.screen?.desktop - 1}px) {
      padding: 30px 30px 30px 0;
      &:last-child {
        padding: 30px 30px 58px 0;
      }
    }
    @media (min-width: ${theme?.screen?.mobile}px) and (max-width: ${theme
        ?.screen?.tablet - 1}px) {
      padding: 72px 18px 69px 18px;
      flex: 0 0 90%;
      &:last-child {
        padding: 72px 18px 69px 18px;
        flex: 0 0 90%;
      }
    }
  `}
`;

import React, { useEffect, useRef, useState } from "react";
import { css, styled } from "styled-components";

type Props = {
  children: React.ReactNode[];
};

const Carousel: React.FC<Props> = (props: Props) => {
  const refCarousel = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [defaultWidthCarousel, setDefaultWidthCarousel] = useState(0);

  const minSwipeDistance = 50;

  const onTouchStart = (e: any) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: any) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe || isRightSwipe) {
      if (isLeftSwipe) {
        if (currentIndex >= props.children?.length) {
          return;
        }
        refCarousel.current?.scroll({
          left: defaultWidthCarousel * currentIndex,
          behavior: "smooth",
        });
        setCurrentIndex(currentIndex + 1);
      } else {
        const newCurrentIndex = currentIndex - 1;
        if (newCurrentIndex < 1) {
          setCurrentIndex(1);
          refCarousel.current?.scroll({
            left: 0,
            behavior: "smooth",
          });
          return;
        }
        refCarousel.current?.scroll({
          left: defaultWidthCarousel * (newCurrentIndex - 1),
          behavior: "smooth",
        });
        setCurrentIndex(newCurrentIndex);
      }
    }
  };

  useEffect(() => {
    setDefaultWidthCarousel(window.screen.width);
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <Container
        ref={refCarousel}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {props.children}
      </Container>
      <ContainerBullet>
        {props.children?.map((c, i) => (
          <div
            key={i}
            style={{
              background: currentIndex === i + 1 ? "#5C3CAF" : "#D8D8D8",
            }}
          />
        ))}
      </ContainerBullet>
    </div>
  );
};

export default Carousel;

const Container = styled.div`
  position: relative;
  ${({ theme }) => css`
    @media (min-width: ${theme?.screen?.mobile}px) and (max-width: ${theme
        ?.screen?.tablet - 1}px) {
      display: flex;
      justify-content: flex-start;
      overflow-x: hidden;
    }
  `}
`;

const ContainerBullet = styled.div`
  position: absolute;
  left: 0;
  bottom: 30px;
  width: 100%;
  height: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  div {
    width: 10px;
    height: 10px;
    border-radius: 10px;
    transition: all 200ms;
  }
`;

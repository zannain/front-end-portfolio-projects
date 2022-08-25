import styled from 'styled-components/macro';
import graphic from "~/images/pattern-graphic-design.svg";
import illustrations from "~/images/pattern-illustrations.svg";
import motion from "~/images/pattern-motion-graphics.svg";
import photography from "~/images/pattern-photography.svg";
import ui from "~/images/pattern-ui-ux.svg";
import app from "~/images/pattern-apps.svg";
import { QUERIES } from "~/utilities/breakpoints";
const CardWrapper = styled.div`
  & {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "graphic graphic"
      "ui apps"
      "illustrations illustrations"
      "photo photo"
      "motion motion";
    height: 100%;
    justify-content: center;

    @media ${QUERIES.tabletAndUp} {
      grid-template-areas:
        "graphic graphic ui apps"
        "graphic graphic illustrations illustrations"
        "photo photo motion motion";
      grid-template-rows: repeat(auto-fit, minmax(150px, 1fr));

      grid-template-columns: repeat(4, 1fr);
    }
  }
`;
export const Card = styled.div`
& {

  overflow: hidden;
  position: relative;
  height: 225px;
  border-radius: 25px;
  padding: var(--spacing);
  margin: var(--spacing);
  display: flex;
  align-items: end;
  color: var(--light-cream);
  font-size: var(--text-xs);
  will-change: transform;
  &.graphic {
    grid-area: graphic;
  }
  &.ui {
    grid-area: ui;
  }
  &.apps {
    grid-area: apps;
  }
  &.illustrations {
    grid-area: illustrations;
  }
  &.photo {
    grid-area: photo;
  }
  &.motion {
    grid-area: motion;
  }
  img {
    align-self: start;
    width: auto;
    height: 50%;
    position: sticky;
    top: -1px;
    right: 0;
  }
  & {
    @media ${QUERIES.tabletAndUp} {
      &.graphic {
        grid-column-start: 1;
          grid-column-end: span 2;
          grid-row-start: 1;
          grid-row-end: span 2;
      }
    }
  }
`;
function Cards() {
  return (
    <CardWrapper>
      <Card className="galactic-blue graphic">
        Graphic Design
        <img src={graphic} />
      </Card>
      <Card className="summer-yellow ui">
        UI/UX
        <img src={ui} />
      </Card>
      <Card className="pink apps">
        Apps
        <img src={app} />
      </Card>
      <Card className="light-red illustrations">
        Illustrations
        <img src={illustrations} />
      </Card>
      <Card className="cyan photo">
        Photography
        <img src={photography} />
      </Card>
      <Card className="dark-purple motion">
        Motion Graphics
        <img src={motion} />
      </Card>
    </CardWrapper>
  );
}

export default Cards;

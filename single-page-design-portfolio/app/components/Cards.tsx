import {
    PatternMotionGraphics,
    PatternGraphicDesign,
    PatternIllustrations,
    PatternPhotography,
    PatternApps,
    PatternUiUx,
  } from "~/components/icons";
import styled from "styled-components";
const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    "graphic graphic"
    "ui apps"
    "illustrations illustrations"
    "photo photo"
    "motion motion";
  height: 100%;
  justify-content: center;
`;
const Card = styled.div`
  position: relative;
  height: 225px;
  padding: var(--spacing);
  margin: var(--spacing);
  display: flex;
  align-items: end;
  color: var(--light-cream);
  font-size: var(--text-xs);

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
  svg {
    position: absolute;
    top: 0;
    right: 0;
  }
`;
function Cards() {
  return (
    <CardWrapper>
          <Card className="galactic-blue graphic">
            Graphic Design
            <PatternGraphicDesign />
          </Card>
          <Card className="summer-yellow ui">
            UI/UX
            <PatternUiUx />
          </Card>
          <Card className="pink apps">
            Apps
            <PatternApps />
          </Card>
          <Card className="light-red illustrations">
            Illustrations
            <PatternIllustrations />
          </Card>
          <Card className="cyan photo">
            Photography
            <PatternPhotography />
          </Card>
          <Card className="dark-purple motion">
            Motion Graphics
            <PatternMotionGraphics />
          </Card>
        </CardWrapper>
  )
}

export default Cards
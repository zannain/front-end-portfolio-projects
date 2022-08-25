import styled from 'styled-components/macro';
import slide1 from "~/images/image-slide-1.jpg";
import slide2 from "~/images/image-slide-2.jpg";
import slide3 from "~/images/image-slide-3.jpg";
import slide4 from "~/images/image-slide-4.jpg";
import slide5 from "~/images/image-slide-5.jpg";
import rightArrow from "~/images/icon-arrow-right.svg";
import leftArrow from "~/images/icon-arrow-left.svg";
import Spacer from "./Spacer";

const ImageListStyles = styled.div`
  display: grid;
  grid-template-columns:repeat(2, minmax(0 1fr));
  gap: var(--spacing);
  h3 {
    font-size: var(--font-md);
    justify-self: center;
  }
  .image-container {
    overflow: auto;
  }
  .image-container > .image-list {
    display: flex;
    gap: calc(var(--base) * 2);
    max-width: 100%;
    overflow: auto;
  }
`;
const SlideshowNav = styled.div`
  display: flex;
    width: 100%;
    justify-content: center;
  .imageContainer {
    flex: 1;
    display: flex;
    justify-content: center;
    gap: var(--space);
    padding: 20px;
  }
  .imageContainer img {
    background: var(--black);
    border-radius: 50px;
    width: 10%;
    aspect-ratio: 3 / 2;
    object-fit: cover;
  }

`;

function ImageList() {
  return (
    <>
      <ImageListStyles>
        <h3 className="heading-sm">My Work</h3>
        <div className="image-container">
          <div className="image-list">
            <img src={slide1} alt="" />
            <img src={slide2} alt="" />
            <img src={slide3} alt="" />
            <img src={slide4} alt="" />
            <img src={slide5} alt="" />
          </div>
        </div>
      </ImageListStyles>
      <SlideshowNav>
        <div className="imageContainer">
          <img  src={leftArrow} alt="" />
          <Spacer size="64" />
          <img  src={rightArrow} alt="" />
        </div>
      </SlideshowNav>
    </>
  );
}

export default ImageList;

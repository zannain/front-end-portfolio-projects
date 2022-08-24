import styled from "styled-components";
import slide1 from "~/images/image-slide-1.jpg"
import slide2 from "~/images/image-slide-2.jpg"
import slide3 from "~/images/image-slide-3.jpg"
import slide4 from "~/images/image-slide-4.jpg"
import slide5 from "~/images/image-slide-5.jpg"

const ImageListStyles = styled.div`
  display: grid;
  grid-template-columns: . repeat(2, minmax(0 1fr));
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

`

function ImageList() {
  return (
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
  )
}

export default ImageList
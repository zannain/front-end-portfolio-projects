import styled from 'styled-components';
import amy from "~/images/image-amy.webp";
import Button  from "./Button";
const HeadshotWrapper = styled.div`
  width: 350px;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;

  .byline {
    min-width: 350px;
    text-align: center;
    font-size: var(--font-sm);
    margin: 16px auto 32px auto;
    font-size: var(--font-sm);
  }
  .intro {
    font-size: var(--font-base);
    font-weight: var(--fw-500);
    line-height: var(--line-height-xs);
    padding: var(--spacing);

  }
  .image-container {
    flex: 0 1 150px;
    padding: 32px;
    margin-left: auto;
    margin-right: auto;
    width: 75%;
  }

`;
function Headshot() {
  return (
    <HeadshotWrapper>
    <div className="image-container">
      <img src={amy} alt="WebP rules." />
    </div>
    <p className="byline">
      I’m Amy, and I’d love to work on your next project
    </p>
    <p className="intro">
      I love working with others to create beautiful design solutions. I’ve
      designed everything from brand illustrations to complete mobile apps.
      I’m also handy with a camera!
    </p>
    <Button variant="danger" size="md">Free Consultation</Button>
  </HeadshotWrapper>
  )
}

export default Headshot
import styled from 'styled-components';
import Cards from "./Cards";
const BannerStyles = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    align-self: center;
    text-align: center;
    font-size: var(--font-md);
  }
  p {
    padding: 10px;
    text-align: center;
  }
`;
const Banner = () => {
  return (
    <BannerStyles>
    <h3>Design solutions made easy</h3>
    <p>
      With over ten years of experience in various design disciplines, I’m
      your one-stop shop for your design needs.
    </p>
    <Cards />
  </BannerStyles>
  )
}

export default Banner
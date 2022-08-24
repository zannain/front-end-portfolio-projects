import type { LinksFunction } from "@remix-run/node";
import amy from "~/images/image-amy.webp";

import stylesUrl from "~/styles/index.css";
import resetStylesUrl from "~/styles/reset.css";
import styled from "styled-components";
import TopMenu from "~/components/TopMenu";
import { SecondaryButton } from "~/components/Button";
import Cards from "~/components/Cards";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: resetStylesUrl },
    { rel: "stylesheet", href: stylesUrl },
  ];
};
const Headshot = styled.div`
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
    font-size: var(--font-xs);
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
const Banner = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    text-align: center;
    font-size: var(--heading-md);
  }
`;

export default function Index() {
  return (
    <>
      <TopMenu></TopMenu>
      <Banner>
        <h3>Design solutions made easy</h3>
        <p>
          With over ten years of experience in various design disciplines, I’m
          your one-stop shop for your design needs.
        </p>
        <Cards />
      </Banner>
      <Headshot>
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
        <SecondaryButton buttonText="Free Consultation"></SecondaryButton>
      </Headshot>
      <TopMenu></TopMenu>
    </>
  );
}

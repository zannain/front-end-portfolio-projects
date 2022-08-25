import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/index.css";
import resetStylesUrl from "~/styles/reset.css";
import TopMenu from "~/components/TopMenu";
import Headshot from "~/components/Headshot";
import Spacer from "~/components/Spacer";
import ImageList from "~/components/ImageList";
import Contact from "~/components/Contact";
import Banner from "~/components/Banner";
import styled from 'styled-components';
import {QUERIES} from "~/utilities/breakpoints"
export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: resetStylesUrl },
    { rel: "stylesheet", href: stylesUrl },
  ];
};
const HomeStyles = styled.div`
  display: grid;
  grid-gap: var(--spacing);

`;
export default function Index() {
  return (
    <HomeStyles>

      <div className="header">
        <TopMenu />
      </div>
      <div className="main">
        <Banner />
        <Headshot />
        <Spacer size={32} />
        <ImageList />
        <Spacer size={32} />
        <Contact />
      </div>
      <div className="footer">
        <TopMenu />
      </div>
      </HomeStyles>
  );
}

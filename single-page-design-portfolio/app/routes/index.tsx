import type { LinksFunction } from "@remix-run/node";
import Button from "~/components/Button";
import { Logo, PatternMotionGraphics, PatternGraphicDesign, PatternIllustrations, PatternPhotography, PatternApps, PatternUiUx } from "~/components/icons";
import stylesUrl from "~/styles/index.css";
import buttonStylesUrl from "~/styles/button.css";
import resetStylesUrl from "~/styles/reset.css";
import logoStylesUrl from "~/styles/logo.css";
export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: resetStylesUrl },
    { rel: "stylesheet", href: stylesUrl },
    { rel: "stylesheet", href: logoStylesUrl },
    { rel: "stylesheet", href: buttonStylesUrl },
  ];
};

export default function Index() {
  return (
    <>
      <div className="container">
        <div className="logo-wrapper">
          <Logo />
        </div>
        <div className="button-wrapper">
          <Button buttonText="Free Consultation" />
        </div>
      </div>
      <div className="landing">
        <h3 className="heading-md">Design solutions made easy</h3>
        <p className="text-xs spacing">
          With over ten years of experience in various design disciplines, I’m
          your one-stop shop for your design needs.
        </p>
        <div className="card-wrapper spacing">
          <div className="card galactic-blue text-xs">
            Graphic Design
            <PatternGraphicDesign />
          </div>
          <div className="card summer-yellow text-xs">
            UI/UX
            <PatternUiUx />
          </div>
          <div className="card pink text-xs">
            Apps
            <PatternApps />
          </div>
          <div className="card light-red text-xs">
            Illustrations
            <PatternIllustrations />
          </div>
          <div className="card cyan text-xs">
            Photography
            <PatternPhotography />
          </div>
          <div className="card dark-purple text-xs">
            Motion Graphics
            <PatternMotionGraphics />
          </div>
        </div>
      </div>
    </>
  );
}

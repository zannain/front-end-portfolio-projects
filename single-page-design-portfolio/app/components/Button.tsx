import styled from 'styled-components';
import {SIZES} from "~/utilities/constants";

type ButtonPropTypes = {
  variant: string;
  size: string;
  children: any
}
const Button = ({ variant, size, children }: ButtonPropTypes) => {
  const styles = SIZES[size];

  let Component;

  switch (variant) {
    case "primary":
      Component = PrimaryButton;
      break;
    case "secondary":
      Component = SecondaryButton;
      break;
    case "black":
      Component = BlackButton;
      break;
    case "danger":
      Component = DangerButton;
      break;
    default:
      throw new Error(`Unrecognized Button variant: ${variant}`);
  }
  return <Component style={styles}>{children}</Component>;

}

export default Button
const ButtonBase = styled.button`
    max-width: 228px;
    min-width: 180px;
    height: 50px;
    border: none;
    text-align: center;
    text-decoration: none;
    padding: 10px 20px;
    color: var(--light-cream);
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 40px;

`;

const PrimaryButton = styled(ButtonBase)`
    background-color: var(--galactic-blue);
`;
const SecondaryButton = styled(ButtonBase)`
    background-color: var(--summer-yellow);
`;
const BlackButton = styled(ButtonBase)`
    background-color: var(--black);
`;
const DangerButton = styled(ButtonBase)`
    background-color: var(--light-red);
`;



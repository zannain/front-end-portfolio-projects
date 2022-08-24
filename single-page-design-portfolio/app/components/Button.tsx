import styled from "styled-components";
import PropTypes, { InferProps } from 'prop-types';
const BaseButton = styled.button`
  & {
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
    font-weight: var(--fw-500);
  }
`;

const Primary = styled(BaseButton)`
  & {
    background-color: var(--galactic-blue);
  }
`;
const Secondary = styled(BaseButton)`
  & {
    background-color: var(--summer-yellow);
  }
`;
const Black = styled(BaseButton)`
  & {
    background-color: var(--black);
  }
`;
const Danger = styled(BaseButton)`
  & {
    background-color: var(--light-red);
  }
`;
function PrimaryButton({ buttonText }: InferProps<typeof PrimaryButton.propTypes>) { return <Primary>{buttonText}</Primary>; };
const SecondaryButton = ({ buttonText }: InferProps<typeof PrimaryButton.propTypes>) => <Secondary>{buttonText}</Secondary>;
const BlackButton = ({ buttonText }: InferProps<typeof PrimaryButton.propTypes>) => <Black>{buttonText}</Black>;
const DangerButton = ({ buttonText }: InferProps<typeof PrimaryButton.propTypes>) => <Danger>{buttonText}</Danger>;

PrimaryButton.propTypes = {
  buttonText: PropTypes.string
}
export { PrimaryButton, SecondaryButton, BlackButton, DangerButton };

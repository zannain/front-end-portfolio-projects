import styled from "styled-components";
import { DangerButton } from "./Button";
import { Card } from "./Cards";

const ContactStyles = styled(Card)`
  & {
    background-color: var(--black);
    display: flex;
    flex-direction: column;
    gap: var(--spacing);
    align-items: center;
    min-height: fit-content;
    min-width: 350px;
    height: 30%;
  }
  p {
    margin-right: auto;
    align-self: center;
    margin-left: auto;
  }
`;
function Contact() {
  return (
    <ContactStyles>
      <h3>Book a call with me</h3>
      <p>
        I’d love to have a chat to see how I can help you. The best first step
        is for us to discuss your project during a free consultation. Then we
        can move forward from there.
      </p>
      <DangerButton buttonText="Free Consultation"></DangerButton>
    </ContactStyles>
  );
}

export default Contact;

import styled from 'styled-components';
import  Button  from "./Button";
import { Card } from "./Cards";
import Spacer from "~/components/Spacer";

const ContactStyles = styled(Card)`
  & {
    background-color: var(--black);
    display: flex;
    flex-direction: column;
    gap: var(--spacing);
    align-items: center;
    min-width: 350px;
    max-height: 350px;
    height: fit-content;
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
      <Button variant="danger" size="md">Free Consultation</Button>
      <Spacer axis="horizontal" size={16} />

    </ContactStyles>
  );
}

export default Contact;

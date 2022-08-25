import styled from 'styled-components';
import Button from './Button';
import logo  from '~/images/logo.svg';

const Container = styled.div`
  margin: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
function TopMenu() {
  return (
    <Container>
    <div className="logo-wrapper">
      <img src={logo} />
    </div>
    <div className="button-wrapper">
    <Button variant="danger" size="md">Free Consultation</Button>
    </div>
  </Container>
  )
}

export default TopMenu
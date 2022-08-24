import React from 'react'
import styled from 'styled-components';
import {BlackButton} from './Button';
import { Logo } from './icons';

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
      <Logo />
    </div>
    <div className="button-wrapper">
      <BlackButton buttonText="Free Consultation"></BlackButton>
    </div>
  </Container>
  )
}

export default TopMenu
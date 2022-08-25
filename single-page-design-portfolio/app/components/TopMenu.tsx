import React from 'react'
import styled from 'styled-components/macro';
import {BlackButton} from './Button';
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
      <BlackButton buttonText="Free Consultation"></BlackButton>
    </div>
  </Container>
  )
}

export default TopMenu
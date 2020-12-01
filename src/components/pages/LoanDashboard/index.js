import React from 'react';
import styled from 'styled-components';
import Header from '../../organisms/Header';
import InstallmentCard from '../../organisms/InstallmentsCard';
import LoansimulatorCard from '../../organisms/LoanSimulatorCard';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const LoanDashboard = () => {
  return (
    <>
      <Header />
      <Container>
        <InstallmentCard />
        <LoansimulatorCard />
      </Container>
    </>
  );
};

export default LoanDashboard;

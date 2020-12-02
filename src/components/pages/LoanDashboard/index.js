import React from 'react';
import styled from 'styled-components';
import Header from '../../organisms/Header';
import InstallmentCard from '../../organisms/InstallmentsCard';
import LoansimulatorCard from '../../organisms/LoanSimulatorCard';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 500px) {
    margin-top: 200px;
  }
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

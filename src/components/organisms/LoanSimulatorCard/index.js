import React from 'react';
import styled from 'styled-components';
import SimpleCard from '../../atoms/SimpleCard';
import LoanSimulatorForm from '../LoanSimulatorForm';

const Card = styled(SimpleCard)`
  color: ${(props) => props.theme.colors.fontColor};
  margin: 40px;
  flex-direction: column;
  align-items: center;
  width: 500px;
  padding: 20px 20px 20px 20px;

  h1 {
    margin-top: 20px;
  }
`;

const LoanSimulatorCard = () => {
  return (
    <Card>
      <h1>Simular Novo Emprestimo</h1>
      <LoanSimulatorForm />
    </Card>
  );
};

export default LoanSimulatorCard;

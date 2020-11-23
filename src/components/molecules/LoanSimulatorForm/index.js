import React from 'react';
import Input from '../../atoms/input';
import Button from '../../atoms/Button';
import styled from 'styled-components';

const StyledForm = styled.form`
  margin-top: 40px;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const LoanSimulatorForm = () => {
  return (
    <StyledForm>
      <Input placeholder="Valor a ser emprestado" />
      <Input placeholder="taxa de juros" />
      <Input placeholder="total de parcelas" />
      <Button>Simular</Button>
    </StyledForm>
  );
};
export default LoanSimulatorForm;

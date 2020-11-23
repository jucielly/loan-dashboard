import React from 'react';
import Button from '../../atoms/Button';
import styled from 'styled-components';
import TextField from '../../molecules/TextField';

const StyledForm = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

const LoanSimulatorForm = () => {
  return (
    <StyledForm>
      <TextField label="Valor do emprestimo" name="loan" />
      <TextField label="Taxa de Juros" name="taxes" />
      <TextField label="Total de Parcelas" name="installments" />
      <Button>Simular</Button>
    </StyledForm>
  );
};
export default LoanSimulatorForm;

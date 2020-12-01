import React, { useState } from 'react';
import Button from '../../atoms/Button';
import styled from 'styled-components';
import TextField from '../../molecules/TextField';
import SimulationModal from '../../organisms/SimulationModal';

const StyledForm = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

const LoanSimulatorForm = () => {
  const [open, setOpen] = useState(false);

  const openModal = (event) => {
    event.preventDefault();
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };
  return (
    <>
      <SimulationModal open={open} onClose={handleCloseModal} />
      <StyledForm>
        <TextField label="Valor do emprestimo" name="loan" />
        <TextField label="Taxa de Juros" name="taxes" />
        <TextField label="Total de Parcelas" name="installments" />
        <Button onClick={openModal}>Simular</Button>
      </StyledForm>
    </>
  );
};
export default LoanSimulatorForm;

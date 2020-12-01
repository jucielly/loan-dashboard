import React, { useState } from 'react';
import Button from '../../atoms/Button';
import styled from 'styled-components';
import TextField from '../../molecules/TextField';
import SimulationModal from '../../organisms/SimulationModal';
import { useForm } from 'react-hook-form';

const StyledForm = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

const LoanSimulatorForm = () => {
  const [open, setOpen] = useState(false);
  const [simulation, setSimulation] = useState();
  const { register, handleSubmit } = useForm();

  const onSubmit = (formValues) => {
    const loanValue = +formValues.loanValue;
    const monthlyInterest = +formValues.monthlyInterest;
    const numberOfInstallments = +formValues.numberOfInstallments;
    const interest = loanValue * (monthlyInterest / 100);
    const total = loanValue + interest;
    const installmentValue = total / numberOfInstallments;
    console.log('oi', total);

    setSimulation({
      loanValue,
      monthlyInterest,
      numberOfInstallments,
      installmentValue,
    });
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };
  return (
    <>
      <SimulationModal
        open={open}
        onClose={handleCloseModal}
        simulation={simulation}
      />
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Valor do emprestimo"
          name="loanValue"
          inputRef={register}
        />
        <TextField
          label="Taxa de Juros"
          name="monthlyInterest"
          inputRef={register}
        />
        <TextField
          label="Total de Parcelas"
          name="numberOfInstallments"
          inputRef={register}
        />
        <Button type="submit">Simular</Button>
      </StyledForm>
    </>
  );
};

export default LoanSimulatorForm;

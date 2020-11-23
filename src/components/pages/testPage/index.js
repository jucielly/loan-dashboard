import React from 'react';
import SimpleCard from '../../atoms/SimpleCard';
import Button from '../../atoms/Button';
import Input from '../../atoms/input';
import styled from 'styled-components';
import Avatar from '../../atoms/Avatar';
import ValueCard from '../../molecules/ValueCard';
import { GiReceiveMoney } from 'react-icons/gi';
import InstallmentListItem from '../../molecules/InstallmentLIstItem';
import LoanSimulatorForm from '../../molecules/LoanSimulatorForm';

const Test = () => {
  return (
    <>
      <CardTeste>
        <h1>Atom Test Card</h1>
        <Input placeholder="Taxa de Juros" />
        <Input placeholder="Taxa de Juros" />
        <Button>Quero esse</Button>
      </CardTeste>
      <Avatar />
      <ValueCard
        title="Total Emprestimo"
        icon={<GiReceiveMoney />}
        value={`R$ ${2500}`}
      />
      <InstallmentListItem value={`R$ ${500}`} date="17/10/20" />
      <InstallmentListItem value={`R$ ${500}`} date="17/10/20" />
      <InstallmentListItem value={`R$ ${500}`} date="17/10/20" />
      <LoanSimulatorForm />
    </>
  );
};

export default Test;

const CardTeste = styled(SimpleCard)`
  h1 {
    margin-bottom: 100px;
    color: ${(props) => props.theme.colors.fontColor};
  }

  width: 400px;
  height: 400px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

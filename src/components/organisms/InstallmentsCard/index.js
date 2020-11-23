import React from 'react';
import InstallmentList from '../InstallmentList';
import SimpleCard from '../../atoms/SimpleCard';
import styled from 'styled-components';

const Card = styled(SimpleCard)`
  color: ${(props) => props.theme.colors.fontColor};
  margin: 40px;
  flex-direction: column;
  align-items: center;
  height: 450px;
  width: 500px;

  h1 {
    margin-top: 20px;
  }
`;

const InstallmentsCard = () => {
  return (
    <Card>
      <h1>Parcelas Restantes</h1>
      <InstallmentList />
    </Card>
  );
};
export default InstallmentsCard;

import React from 'react';
import styled from 'styled-components';
import ValueCard from '../../molecules/ValueCard';
import Avatar from '../../atoms/Avatar';
import { GiReceiveMoney, GiPayMoney, GiMoneyStack } from 'react-icons/gi';

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 200px;
  padding: 20px;
  color: ${(props) => props.theme.colors.defaultWhite};
  background-color: ${(props) => props.theme.colors.secondary};
  margin-bottom: 60px;

  h1 {
    flex-grow: 1;
  }
`;
const CardContainer = styled.div`
  position: absolute;
  margin-top: 70px;
  display: flex;
  justify-content: space-around;
`;

const Header = () => {
  return (
    <Container>
      <h1>Meus Emprestimos</h1>
      <Avatar />
      <CardContainer>
        <ValueCard
          title="Recebido"
          value={`R$ ${2000}`}
          icon={<GiReceiveMoney />}
        />
        <ValueCard title="Pago" value={`R$ ${2000}`} icon={<GiPayMoney />} />
        <ValueCard
          title="A Pagar"
          value={`R$ ${2000}`}
          icon={<GiMoneyStack />}
        />
      </CardContainer>
    </Container>
  );
};

export default Header;

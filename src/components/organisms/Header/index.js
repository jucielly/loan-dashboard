import React from 'react';
import styled from 'styled-components';
import ValueCard from '../../molecules/ValueCard';
import Avatar from '../../atoms/Avatar';
import { GiReceiveMoney, GiPayMoney, GiMoneyStack } from 'react-icons/gi';
import formatBRLMoney from '../../../utils/formatMoney';
import { useLoan } from '../../../providers/LoanProvider';

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
  const { overview, loading } = useLoan();

  const { amountTaken, amountPayd } = overview;

  const toPayOff = amountTaken - amountPayd;
  return (
    <Container>
      <h1>Meus Emprestimos</h1>
      <Avatar />
      <CardContainer>
        <ValueCard
          title="Recebido"
          value={formatBRLMoney(amountTaken)}
          icon={<GiReceiveMoney />}
          loading={loading}
        />
        <ValueCard
          title="Pago"
          value={formatBRLMoney(amountPayd)}
          icon={<GiPayMoney />}
          loading={loading}
        />
        <ValueCard
          title="A Pagar"
          value={formatBRLMoney(toPayOff)}
          icon={<GiMoneyStack />}
          loading={loading}
        />
      </CardContainer>
    </Container>
  );
};

export default Header;

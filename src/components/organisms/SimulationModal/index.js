import React from 'react';
import BaseModal from '../../molecules/BaseModal';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import formatBRLMoney from '../../../utils/formatMoney';

const Container = styled.div`
  display: flex;
  width: 70%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p {
    font-size: ${(props) => props.theme.fonts.fontSizes.mediumSmall};
  }

  @media (max-width: 500px) {
    p {
      text-align: center;
    }
  }
`;

const SimulationModal = ({ open, onClose, simulation = {} }) => {
  const {
    loanValue,
    numberOfInstallments,
    installmentValue,
    monthlyInterest,
  } = simulation;
  return (
    <BaseModal
      title="Novo Empréstimo"
      titleSize="medium"
      open={open}
      onClose={onClose}
    >
      <Container>
        <p>O valor do seu empréstimo é de {formatBRLMoney(loanValue)}</p>
        <p>
          Em {numberOfInstallments} parcelas de{' '}
          {formatBRLMoney(installmentValue)}
        </p>
        <p>juros fixos de {monthlyInterest}% aos mês</p>
      </Container>
    </BaseModal>
  );
};

SimulationModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  simulation: PropTypes.number.isRequired,
};

export default SimulationModal;

import React from 'react';
import BaseModal from '../../molecules/BaseModal';
import PropTypes from 'prop-types';
import formatBRLMoney from '../../../utils/formatMoney';
import { Container } from './style';

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

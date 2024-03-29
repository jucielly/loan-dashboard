import React from 'react';
import Button from '../../atoms/Button';
import BaseModal from '../../molecules/BaseModal';
import PropTypes from 'prop-types';
import { Container } from './style';

const AntecipateModal = ({ open, onClose, installment, payInstallment }) => {
  return (
    <BaseModal
      title={`Gostaria de antecipar a parcela de ${installment?.dueDate} no valor de ${installment?.formatedValue}`}
      open={open}
      onClose={onClose}
    >
      <Container>
        <Button color="success" onClick={payInstallment}>
          Sim
        </Button>
        <Button color="danger" onClick={onClose}>
          Não
        </Button>
      </Container>
    </BaseModal>
  );
};

AntecipateModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  installment: PropTypes.object.isRequired,
  payInstallment: PropTypes.func.isRequired,
};

export default AntecipateModal;

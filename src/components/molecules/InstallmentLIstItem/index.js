import React from 'react';
import PropTypes from 'prop-types';
import formatBRLMoney from '../../../utils/formatMoney';
import Label from '../../atoms/Label';
import { AnticipateButton, StyledValueCard } from './style';

const InstallmentListItem = ({ installment, onAntecipate }) => {
  const { value, dueDate } = installment;
  const formatedValue = formatBRLMoney(value);
  return (
    <StyledValueCard>
      <span className="value">{formatedValue}</span>
      <span className="date">{dueDate}</span>
      {!installment.payd && (
        <AnticipateButton color="terciary" onClick={onAntecipate}>
          Antecipar
        </AnticipateButton>
      )}
      {installment.payd && <Label color="success">Parcela paga</Label>}
    </StyledValueCard>
  );
};

InstallmentListItem.propTypes = {
  installment: PropTypes.object.isRequired,
  onAntecipate: PropTypes.func.isRequired,
};

export default InstallmentListItem;

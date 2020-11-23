import React from 'react';
import InstallmentListItem from '../../molecules/InstallmentLIstItem';
import PropTypes from 'prop-types';
import { useLoan } from '../../../providers/LoanProvider';

const InstallmentList = () => {
  const { overview } = useLoan();
  const installments = overview.installments || [];
  return (
    <ul>
      {installments.map((installment, key) => {
        return <InstallmentListItem key={key} installment={installment} />;
      })}
    </ul>
  );
};

InstallmentList.propTypes = {
  installments: PropTypes.array.isRequired,
};

export default InstallmentList;

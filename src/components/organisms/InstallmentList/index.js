import React from 'react';
import InstallmentListItem from '../../molecules/InstallmentLIstItem';
import PropTypes from 'prop-types';
import { useLoan } from '../../../providers/LoanProvider';
import LoadingSpinner from '../../atoms/LoadingSpinner';

const InstallmentList = () => {
  const { overview, loading } = useLoan();
  const installments = overview.installments || [];

  if (loading) {
    return <LoadingSpinner />;
  } else {
    return (
      <ul>
        {installments.map((installment, key) => {
          return <InstallmentListItem key={key} installment={installment} />;
        })}
      </ul>
    );
  }
};

InstallmentList.propTypes = {
  installments: PropTypes.array.isRequired,
};

export default InstallmentList;

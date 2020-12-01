import React, { useState } from 'react';
import InstallmentListItem from '../../molecules/InstallmentLIstItem';
import AntecipateModal from '../../organisms/AntecipateModal';
import PropTypes from 'prop-types';
import { useLoan } from '../../../providers/LoanProvider';
import LoadingSpinner from '../../atoms/LoadingSpinner';

const InstallmentList = () => {
  const [open, setOpen] = useState(false);
  const [installment, setInstalment] = useState();
  const { overview, loading } = useLoan();
  const installments = overview.installments || [];

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleAntecipate = (installment) => () => {
    setInstalment(installment);
    setOpen(true);
  };

  if (loading) {
    return <LoadingSpinner />;
  } else {
    return (
      <>
        <AntecipateModal
          open={open}
          onClose={handleCloseModal}
          installment={installment}
        />
        <ul>
          {installments.map((installment, key) => {
            return (
              <InstallmentListItem
                key={key}
                installment={installment}
                onAntecipate={handleAntecipate(installment)}
              />
            );
          })}
        </ul>
      </>
    );
  }
};

InstallmentList.propTypes = {
  installments: PropTypes.array.isRequired,
};

export default InstallmentList;

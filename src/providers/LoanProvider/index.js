import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { LoanService } from '../../services/loanService';

const loanContext = createContext({ overview: {}, loading: false });
export const useLoan = () => useContext(loanContext);

const LoanProvider = ({ children }) => {
  const [overview, setOverview] = useState({});
  const [loading, setLoading] = useState(false);

  const updateOverview = (overview) => {
    const amountPayd = overview.installments.reduce((previous, installment) => {
      if (installment.payd) {
        return previous + installment.value;
      } else {
        return previous;
      }
    }, 0);

    const toBePayd = overview.amountTaken - amountPayd;
    setOverview({
      ...overview,
      amountPayd,
      toBePayd,
    });
  };

  const payInstallment = (installment) => {
    const { dueDate } = installment;
    const updatedInstallments = overview.installments.map((installment) => ({
      ...installment,
      payd: installment.dueDate === dueDate ? true : installment.payd,
    }));
    updateOverview({ ...overview, installments: updatedInstallments });
  };

  useEffect(() => {
    setLoading(true);
    LoanService.getOverview()
      .then((data) => {
        updateOverview(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <loanContext.Provider value={{ overview, loading, payInstallment }}>
      {children}
    </loanContext.Provider>
  );
};

LoanProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default LoanProvider;

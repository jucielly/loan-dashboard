import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { LoanService } from '../../services/loanService';

const loanContext = createContext({ overview: {} });
export const useLoan = () => useContext(loanContext);

const LoanProvider = ({ children }) => {
  const [overview, setOverview] = useState({});

  useEffect(() => {
    LoanService.getOverview().then((data) => setOverview(data));
  }, []);
  return (
    <loanContext.Provider value={{ overview }}>{children}</loanContext.Provider>
  );
};

LoanProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default LoanProvider;

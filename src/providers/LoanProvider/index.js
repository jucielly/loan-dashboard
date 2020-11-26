import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { LoanService } from '../../services/loanService';

const loanContext = createContext({ overview: {}, loading: false });
export const useLoan = () => useContext(loanContext);

const LoanProvider = ({ children }) => {
  const [overview, setOverview] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    LoanService.getOverview()
      .then((data) => setOverview(data))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <loanContext.Provider value={{ overview, loading }}>
      {children}
    </loanContext.Provider>
  );
};

LoanProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default LoanProvider;

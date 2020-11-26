import React from 'react';
import LoanDashboard from './components/pages/LoanDashboard';
import Theme from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import LoanProvider from './providers/LoanProvider';

const App = () => {
  return (
    <Theme>
      <GlobalStyle />
      <LoanProvider>
        <LoanDashboard />
      </LoanProvider>
    </Theme>
  );
};

export default App;

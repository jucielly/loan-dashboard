import React from 'react';
import LoanDashboard from './components/pages/LoanDashboard';
import Theme from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';

const App = () => {
  return (
    <Theme>
      <GlobalStyle />
      <LoanDashboard />
    </Theme>
  );
};

export default App;

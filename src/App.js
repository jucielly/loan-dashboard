import React from 'react';
import Test from './components/pages/testPage';
import Theme from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';

const App = () => {
  return (
    <Theme>
      <GlobalStyle />
      <Test />
    </Theme>
  );
};

export default App;

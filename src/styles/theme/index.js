import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#DE0C4B',
    secondary: '#323B69',
    terciary: '#2684FF',
    defaultWhite: '#ffff',
    fontColor: '#000B3C',
    helper: '#CDCDCD',
  },
  fonts: {
    default: 'Catamaran, sans-serif',
    fontSizes: {
      small: '1em',
      medium: '2em',
      large: '3em',
    },
  },
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

Theme.propTypes = {
  children: PropTypes.element.isRequired,
};
export default Theme;

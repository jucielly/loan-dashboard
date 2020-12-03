import React from 'react';
import Input from '../../atoms/input';
import PropTypes from 'prop-types';
import { Container } from './style';

const TextField = ({ label, name, inputRef, error, type }) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <Input name={name} ref={inputRef} type={type} />
      {error && <p>{error}</p>}
    </Container>
  );
};

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  inputRef: PropTypes.func.isRequired,
  error: PropTypes.string,
  type: PropTypes.string,
};

export default TextField;

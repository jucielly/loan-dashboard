import React from 'react';
import Input from '../../atoms/input';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken } from 'polished';

const Container = styled.fieldset`
  display: flex;
  flex-direction: column;
  color: ${(props) => darken(0.4, props.theme.colors.helper)};
  p {
    color: ${(props) => props.theme.colors.danger};
    margin: 0;
    padding: 0;
  }
`;

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

import React from 'react';
import Input from '../../atoms/input';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken } from 'polished';

const Container = styled.fieldset`
  display: flex;
  flex-direction: column;
  color: ${(props) => darken(0.4, props.theme.colors.helper)};
`;

const TextField = ({ label, name, inputRef }) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <Input name={name} ref={inputRef} />
    </Container>
  );
};

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  inputRef: PropTypes.func.isRequired,
};

export default TextField;

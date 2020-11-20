import styled from 'styled-components';

const Input = styled.input`
  color: ${(props) => props.theme.colors.fontColor};
  text-align: center;
  width: 70%;
  height: 30px;
  border-radius: 20px;
  border: 1px solid ${(props) => props.theme.colors.secondary};
  transition: 0.3s;

  & + input {
    margin: 20px;
  }

  &:focus {
    border: 1px solid ${(props) => props.theme.colors.terciary};
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.helper};
  }

  &:hover {
    border: 1px solid ${(props) => props.theme.colors.helper};
    cursor: pointer;
  }
`;

export default Input;

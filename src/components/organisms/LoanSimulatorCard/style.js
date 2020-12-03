import styled from 'styled-components';
import SimpleCard from '../../atoms/SimpleCard';

export const Card = styled(SimpleCard)`
  color: ${(props) => props.theme.colors.fontColor};
  margin: 40px;
  flex-direction: column;
  align-items: center;
  width: 500px;
  padding: 20px 20px 20px 20px;

  h1 {
    margin-top: 20px;
  }

  @media (max-width: 500px) {
    width: 350px;
  }
`;

import styled from 'styled-components';

const SimpleCard = styled.div`
  display: flex;
  height: 200px;
  width: 300px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.defaultWhite};
  box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 20px;
  margin: 50px;
`;

export default SimpleCard;

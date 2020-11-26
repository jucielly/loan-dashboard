import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken } from 'polished';
import formatBRLMoney from '../../../utils/formatMoney';
import Button from '../../atoms/Button';

const StyledValueCard = styled.div`
  padding: 10px;
  padding-bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 1px solid ${(props) => darken(0.2, props.theme.colors.helper)};
  width: 300px;
  height: 45px;
  transition: 0.3s;
  .value {
    color: ${(props) => props.theme.colors.primary};
  }

  &:hover {
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    cursor: pointer;
  }
`;

const AnticipateButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.sucess};
  &:hover {
    background-color: ${(props) => darken(0.2, props.theme.colors.sucess)};
  }
  width: 30%;
  height: 30px;

  margin-bottom: 5px;
`;

const InstallmentListItem = ({ installment }) => {
  const { value, dueDate } = installment;
  const formatedValue = formatBRLMoney(value);
  return (
    <StyledValueCard>
      <span className="value">{formatedValue}</span>
      <span className="date">{dueDate}</span>
      <AnticipateButton>Antecipar</AnticipateButton>
    </StyledValueCard>
  );
};

InstallmentListItem.propTypes = {
  installment: PropTypes.object.isRequired,
};

export default InstallmentListItem;

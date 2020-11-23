import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SimpleCard from '../../atoms/SimpleCard';

const StyledValueCard = styled(SimpleCard)`
  padding: 30px;
  display: flex;
  color: ${(props) => props.theme.colors.fontColor};
  height: 150px;
  width: 400px;
  justify-content: space-between;
  align-items: center;
  margin: 20px;

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    span {
      color: ${(props) => props.theme.colors.primary};
      font-size: ${(props) => props.theme.fonts.fontSizes.medium};
    }
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.colors.helper};
    font-size: 80px;
  }
`;

const ValueCard = ({ title, icon, value }) => {
  return (
    <StyledValueCard>
      <div className="container">
        <h1>{title}</h1>
        <span>{value}</span>
      </div>
      <div className="icon">{icon}</div>
    </StyledValueCard>
  );
};

ValueCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element,
  value: PropTypes?.number.isRequired,
};

export default ValueCard;

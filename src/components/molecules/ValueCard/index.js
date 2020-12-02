import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import { StyledValueCard } from './style';

const ValueCard = ({ title, icon, value, loading }) => {
  return (
    <StyledValueCard>
      <div className="container">
        <h1>{title}</h1>
        <span className="value">
          {loading ? <Skeleton height={25} /> : value}
        </span>
      </div>
      <div className="icon">{icon}</div>
    </StyledValueCard>
  );
};

ValueCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element,
  value: PropTypes.number.isRequired,
  loading: PropTypes.bool,
};

export default ValueCard;

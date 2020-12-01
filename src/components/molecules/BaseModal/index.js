import React from 'react';
import styled from 'styled-components';
import SimpleCard from '../../atoms/SimpleCard';
import PropTypes from 'prop-types';

const Modal = styled(SimpleCard)`
  color: ${(props) => props.theme.colors.fontColor};
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 600px;
  z-index: 900;
  display: ${(props) => (props.open ? 'flex' : 'none')};
  .container {
    margin: 30px 0px 30px 0px;
    display: flex;
    h1 {
      font-size: ${(props) => props.theme.fonts.fontSizes.mediumSmall};
    }

    .closeBtn {
      position: absolute;
      top: 0;
      right: 10px;
      font-size: ${(props) => props.theme.fonts.fontSizes.medium};
      border: none;
      background-color: transparent;
      transition: 0.3s;

      &:hover,
      &:focus {
        outline: none;
        color: ${(props) => props.theme.colors.danger};
      }
    }
  }
`;

const OverLay = styled.div`
  opacity: 0.5;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 800;
  background-color: #333;
  display: ${(props) => (props.open ? 'block' : 'none')};
`;

const BaseModal = ({ children, title, open, onClose }) => {
  return (
    <>
      <OverLay open={open} onClick={onClose} />
      <Modal open={open}>
        <div className="container">
          <h1>{title}</h1>
          <button className="closeBtn" onClick={onClose}>
            &times;
          </button>
        </div>
        {children}
      </Modal>
    </>
  );
};

BaseModal.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default BaseModal;

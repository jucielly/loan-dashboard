import React from 'react';
import PropTypes from 'prop-types';
import { Modal, OverLay } from './style';

const BaseModal = ({ children, title, open, onClose, titleSize }) => {
  return (
    <>
      <OverLay open={open} onClick={onClose} />
      <Modal open={open} titleSize={titleSize}>
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
  titleSize: PropTypes.string,
};

export default BaseModal;

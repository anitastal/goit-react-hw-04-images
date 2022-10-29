// import PropTypes from 'prop-types';

import { Backdrop, Modal } from './Modal.styled';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

export const ModalForImage = ({ toggleModal, largeImageURL, tags }) => {
  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  });

  const onKeyDown = e => {
    if (e.code === 'Escape') {
      toggleModal();
    }
  };

  const closeModal = e => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };

  return (
    <Backdrop onClick={closeModal}>
      <Modal>
        <img src={largeImageURL} alt={tags} />
      </Modal>
    </Backdrop>
  );
};

ModalForImage.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string,
};

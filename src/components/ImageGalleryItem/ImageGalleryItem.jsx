import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({
  id,
  web,
  tags,
  largeImageURL,
  toggleModal,
}) => {
  return (
    <li
      className={css.ImageGalleryItem}
      key={id}
      onClick={() => toggleModal(largeImageURL)}
      id={id}
    >
      <img className={css.ImageGalleryItemImage} src={web} alt={tags} />
    </li>
  );
};

ImageGalleryItem.protoTypes = {
  toggleModal: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  web: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

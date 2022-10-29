import { getImages } from 'helpers/Api';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ModalForImage } from 'components/Modal/ModalForImage';
import { Loader } from 'components/Loader/Loader';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';
import { Button } from '../Button/Button';
import { useEffect, useState } from 'react';

export const ImageGallery = ({ searchImageByName, page, handleMore }) => {
  const [images, setImages] = useState([]);
  const [activeImage, setActiveImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [totalHits, setTotalHits] = useState(0);

  useEffect(() => {
    if (searchImageByName === '') return;
    setIsLoading(true);

    // getImages(searchImageByName, page).then(responce =>
    //   setImages(responce.hits)
    // );

    const getData = async () => {
      const data = await getImages(searchImageByName);

      setImages(data.hits);
      setIsLoading(false);
      setTotalHits(data.totalHits);
    };
    getData();
  }, [searchImageByName]);

  useEffect(() => {
    if (page === 1) return;
    setIsLoading(true);

    const getData = async () => {
      const data = await getImages(searchImageByName, page);

      setImages(prevImages => [...prevImages, ...data.hits]);
      setIsLoading(false);
      setTotalHits(data.totalHits);
    };
    getData();
  }, [searchImageByName, page]);

  const toggleModal = largeImageURL => {
    if (!largeImageURL) {
      setActiveImage('');
    } else {
      setActiveImage(largeImageURL);
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <ul className={css.ImageGallery}>
        {images.map(item => (
          <ImageGalleryItem
            toggleModal={toggleModal}
            id={item.id}
            key={item.id}
            web={item.webformatURL}
            tags={item.tags}
            largeImageURL={item.largeImageURL}
          />
        ))}
      </ul>
      {activeImage && (
        <ModalForImage
          tags={activeImage.tags}
          toggleModal={toggleModal}
          largeImageURL={activeImage}
        />
      )}
      {totalHits > images.length && <Button onAddImg={handleMore} />}
    </>
  );
};
ImageGallery.protoTypes = {
  searchImageByName: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};

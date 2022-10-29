import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';

export const App = () => {
  const [searchImageByName, setSearchImageByName] = useState('');
  // const [images, setImages] = useState(null);
  const [page, setPage] = useState(1);

  const handleFormSubmit = searchImageByName => {
    setSearchImageByName(searchImageByName);
    setPage(1);
  };

  const handleMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div>
      <Searchbar onSubmit={handleFormSubmit} />
      <ImageGallery
        searchImageByName={searchImageByName}
        page={page}
        handleMore={handleMore}
      />
      <ToastContainer autoClose={2000} />
    </div>
  );
};

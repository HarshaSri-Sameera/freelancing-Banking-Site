import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const ImageContext = createContext();

export const useImageContext = () => {
  return useContext(ImageContext);
};

export const ImageReceiveProvider = ({ children }) => {
  const [capturedImage, setCapturedImage] = useState(null);

  const updateCapturedImage = (imageSrc) => {
    setCapturedImage(imageSrc);
  };

  return (
    <ImageContext.Provider value={{ capturedImage, updateCapturedImage }}>
      {children}
    </ImageContext.Provider>
  );
};

ImageReceiveProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

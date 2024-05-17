// ImageCapture.js
import { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import styled from 'styled-components';
import { useImageContext } from '../useImageContextReceiver';

const ImageCaptureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageCaptureReceiver = () => {
  const webcamRef = useRef(null);
  const { capturedImage, updateCapturedImage } = useImageContext();

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    updateCapturedImage(imageSrc);
  };

  const clearImage = () => {
    updateCapturedImage(null);
  };

  return (
    <ImageCaptureWrapper style={{display: 'flex', flexDirection: 'row'}}>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        style={{ width: '100%', maxWidth: '300px' }}
      />
      {capturedImage ? (
        <>
          <button className="btn btn-danger" onClick={clearImage} style={{margin:'10px', backgroundColor:'#fd6704'}}>Clear Image</button>
          <img
            src={capturedImage}
            alt="Captured"
            style={{ maxWidth: '300px', marginTop: '10px' }}
          />
        </>
      ) : (
        <button className="btn btn-danger" onClick={capture} style={{margin:'10px', backgroundColor:'#fd6704'}}>Capture Image</button>
      )}
    </ImageCaptureWrapper>
  );
};

export default ImageCaptureReceiver;

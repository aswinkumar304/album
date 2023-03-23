import React, { useState } from 'react';
import './Album.css';
const Album = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };
  const handleCloseClick = () => {
    setSelectedImage(null);
  };
  return (
    <div>
      {images.map((image, index) => (
        <img
          key={index}
          src={image.url}
          alt={image.alt}
          className="album-image"
          onClick={() => handleImageClick(index)}
        />
      ))}
      {selectedImage !== null && (
         <div className="popup">
         <div className="popup-content">
           <img src={images[selectedImage].url} alt={images[selectedImage].alt} />
           <button onClick={handleCloseClick}>Close</button>
         </div>
       </div>
      )}
    </div>
  );
};

export default Album;

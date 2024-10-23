import React, { useState } from 'react';

const Slideshow = () => {
  // Tạo mảng chứa 20 ảnh với kích thước 500x300
  const images = [];
  for (let i = 0; i < 20; i++) {
    images.push(`https://picsum.photos/500/300?image=${i}`);
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToStart = () => {
    setCurrentIndex(0);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <img src={images[currentIndex]} alt="Slideshow" />

      <div style={{ marginTop: '10px' }}>
        <button onClick={prevImage}>Previous</button>
        <button onClick={goToStart}>Back to Start</button>
        <button onClick={nextImage}>Next</button>
      </div>

      <p>
        Image {currentIndex + 1} of {images.length}
      </p>
    </div>
  );
};

export default Slideshow;

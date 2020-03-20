import React from 'react';


const Modal = ({ closeModal, largeImgURL, galleryItems }) => {
  return (
    <div className="Overlay" onClick={closeModal} role="presentation">
      <div className="Modal">
        {galleryItems.map(image => (
          <img key={image.id} src={largeImgURL} alt="" />
        ))}
      </div>
    </div>
  );
};


export default Modal;
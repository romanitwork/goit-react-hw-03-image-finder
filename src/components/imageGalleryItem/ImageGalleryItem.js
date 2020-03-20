import React from "react";

const ImageGalleryItem = ({ itemLi, largeImgURL, openModal }) => (
  <li className="ImageGalleryItem" onClick={() => openModal(largeImgURL)}>
    <img src={itemLi.webformatURL} alt="" className="ImageGalleryItem-image" />
  </li>
);

export default ImageGalleryItem;

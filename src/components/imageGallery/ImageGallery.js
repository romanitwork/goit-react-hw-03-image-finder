import React from "react";
import ImageGalleryItem from "../imageGalleryItem/ImageGalleryItem";
const ImageGallery = ({ galleryItems, openModal }) => (
  <>
    <ul className="ImageGallery">
      {galleryItems.map(item => (
        <ImageGalleryItem
          itemLi={item}
          key={item.id}
          largeImgURL={item.largeImageURL}
          openModal={openModal}
        />
      ))}
    </ul>
  </>
);

export default ImageGallery;

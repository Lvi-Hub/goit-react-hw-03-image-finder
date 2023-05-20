import React, { Component } from 'react';
import css from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem';

export class ImageGallery extends Component {
  render() {
    return (
      <ul class={css.ImageGallery}>
        <ImageGalleryItem />
      </ul>
    );
  }
}

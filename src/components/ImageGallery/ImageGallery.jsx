import React, { Component } from 'react';
import css from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem';

export class ImageGallery extends Component {
  state = {
    gallery: null,
  };
  componentDidMount() {
    fetch(
      'https://pixabay.com/api/?key=35236008-ec0292df86782f7461c0757b8&q=yellow+flowers&image_type=photo'
    )
      .then(res => res.json())
      .then(gallery => this.setState({ gallery }));
  }
  render() {
    return (
      <ul className={css.ImageGallery}>
        {this.state.gallery && (
          <ImageGalleryItem gallery={this.state.gallery} />
        )}
      </ul>
    );
  }
}

import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import { Modal } from 'components/Modal';

export class ImageGalleryItem extends Component {
  render() {
    return (
      <div>
        <li className="ImageGalleryItem">
          <img className={css.ImageGalleryItem} src="" alt="" />
        </li>
        <Modal />
      </div>
    );
  }
}

import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import { Modal } from 'components/Modal';

export class ImageGalleryItem extends Component {
  state = { showModal: false };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <div>
        <li className="ImageGalleryItem">
          <img className={css.ImageGalleryItem} src="" alt="" />
          <button type="button" onClick={this.toggleModal}>
            Open modal <br />
            window
          </button>
        </li>
        {console.log(this.state.showModal)}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src="https://placehold.it/600x400" alt="" />
            <button type="button" onClick={this.toggleModal}>
              Close modal <br />
              windows
            </button>
          </Modal>
        )}
      </div>
    );
  }
}

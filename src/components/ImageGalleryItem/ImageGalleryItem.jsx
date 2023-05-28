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
    // console.log(this.props.gallery.hits);
    return (
      <>
        {this.props.gallery.hits.map(({ id, webformatURL, largeImageURL }) => {
          console.log(id);

          return (
            <>
              <li className={css.ImageGalleryItem} key={id}>
                <img
                  className={css.ImageGalleryItemImage}
                  onClick={this.toggleModal}
                  src={webformatURL}
                  alt=""
                />
              </li>
              {showModal && (
                <Modal onClose={this.toggleModal}>
                  <img src={largeImageURL} alt="" />
                  <button type="button" onClick={this.toggleModal}>
                    Close modal <br />
                    windows
                  </button>
                </Modal>
              )}
            </>
          );
        })}

        {/* {console.log(this.state.showModal)} */}
        {/* {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={e.largeImageURL} alt="" />
            <button type="button" onClick={this.toggleModal}>
              Close modal <br />
              windows
            </button>
          </Modal>
        )} */}
      </>
    );
  }
}

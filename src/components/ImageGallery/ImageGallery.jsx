import React, { Component } from 'react';
import css from './ImageGallery.module.css';
import { toast } from 'react-toastify';

import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { Button } from 'components/Button';
import { Loader } from 'components/Loader';
import { fetchSearch } from '../Service/search-api';

export class ImageGallery extends Component {
  state = {
    gallery: [],
    status: 'idle',
    error: null,
    page: 1,
  };
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.searchName;
    const nextName = this.props.searchName;

    const prevPage = prevState.page;
    const nextPage = this.state.page;

    console.log(`prevName: ${prevPage}`);
    console.log(`nextName: ${nextPage}`);

    if (prevName !== nextName) {
      this.setState({ gallery: [], page: 1 });
    }

    if (prevName !== nextName || prevPage !== nextPage) {
      this.setState({ status: 'pending' });

      setTimeout(() => {
        fetchSearch(nextName, this.props.searchName, this.state.page)
          .then(gallery => {
            if (gallery.total === 0) {
              return (
                this.setState({ status: 'idle' }),
                toast.error('Nothing found for your request!')
              );
            }
            this.setState(prevState => ({
              gallery: [...prevState.gallery, ...gallery.hits],
              status: 'resolved',
            }));
          })
          .catch(error => this.setState({ error, status: 'rejected' }));
      }, 2000);
    }
  }
  handleButtonPagination = e => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
    console.log(this.state.page);
  };

  render() {
    const { gallery, status } = this.state;

    if (status === 'idle') {
      return <div>Please enter valid search name</div>;
    }

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'rejected') {
      return toast.error('Error Message !');
    }

    if (status === 'resolved') {
      // console.log(gallery.total);
      return (
        <ul className={css.ImageGallery}>
          {gallery.map(({ id, webformatURL, largeImageURL }) => (
            <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
            />
          ))}
          {/* <ImageGalleryItem gallery={gallery} /> */}
          <Button onBtnLoadmore={this.handleButtonPagination} />
        </ul>
      );
    }
  }
}

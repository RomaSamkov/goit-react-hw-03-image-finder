import ImageGalleryItem from 'components/ImageGalleryItem';
import { nanoid } from 'nanoid';
import { Component } from 'react';
import { Gallery } from './ImageGallery.styled';

class ImageGallery extends Component {
  state = {
    showModal: true,
    largeImage: null,
  };

  componentDidMount() {
    document.addEventListener('click', e => {
      if (e.target.nodeName !== 'IMG') {
        this.setState({ showModal: false });
        return;
      } else {
        let picture = this.props.images.filter(obj => {
          return obj.id === parseInt(e.target.alt);
        });
        this.setState({ largeImage: picture[0].largeImageURL });
      }
    });
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
  render() {
    const { showModal, largeImage } = this.state;
    return (
      <Gallery onClick={this.toggleModal}>
        {this.props.images.map(img => {
          return (
            <ImageGalleryItem
              key={nanoid()}
              smallImgURL={img.webformatURL}
              id={img.id}
            />
          );
        })}
      </Gallery>
    );
  }
}

export default ImageGallery;

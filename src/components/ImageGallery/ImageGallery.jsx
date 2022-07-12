import { Component } from 'react';

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
  render() {
    return <ul class="gallery"></ul>;
  }
}

export default ImageGallery;

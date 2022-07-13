import { Component } from 'react';
import PropTypes from 'prop-types';
import { Item } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  render() {
    return (
      <Item>
        <img src={this.props.smallImgURL} alt={this.props.id} />
      </Item>
    );
  }
}

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  smallImgURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;

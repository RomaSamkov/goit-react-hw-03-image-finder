import { Item, ItemImage } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

const ImageGalleryItem = props => {
  const { hit, onClick } = props;
  return (
    <Item className="imageGalleryItem" id={hit.id} onClick={onClick}>
      <ItemImage
        src={hit.webformatURL}
        alt={hit.tags}
        data-src={hit.largeImageURL}
        loading="lazy"
        className="imageGalleryItem__image"
      />
    </Item>
  );
};
ImageGalleryItem.propTypes = {
  hit: PropTypes.shape().isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;

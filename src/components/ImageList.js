import './ImageList.css';
import ImageItem from './ImageItem';

function ImageList({ images }) {
  const imageList = images.map((image) => {
    return <ImageItem key={image.id} image={image} />;
  });
  return <div className="image-list">{imageList}</div>;
}

export default ImageList;

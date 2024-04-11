import ImageItem from './ImageItem';

function ImageList({ images }) {
  const imageList = images.map((image, i) => {
    return <ImageItem key={i} image={image} />;
  });
  return <div>{imageList}</div>;
}

export default ImageList;

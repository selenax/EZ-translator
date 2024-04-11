function ImageItem({ image }) {
  const alt = image.match(/([^/]+$)/)[0];
  return (
    <div>
      <img src={image} alt={alt} />
    </div>
  );
}

export default ImageItem;

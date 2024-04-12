function ImageItem({ image }) {
  // const alt = image.match(/([^/]+$)/)[0];
  return (
    <div>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
}

export default ImageItem;

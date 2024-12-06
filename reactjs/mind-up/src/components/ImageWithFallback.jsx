const ImageWithFallback = ({ src, fallbackSrc, alt, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        e.target.src = fallbackSrc; // Change the source to the fallback image
        e.target.onerror = null; // Prevent infinite loop if fallback also fails
      }}
    />
  );
};

export default ImageWithFallback;

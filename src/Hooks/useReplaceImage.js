import React, { useState } from 'react';

export const useReplaceImage = ({ src, fallback, props }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const onError = () => setImgSrc(fallback);

  return <img src={imgSrc ? imgSrc : fallback} onError={onError} {...props} />;
};

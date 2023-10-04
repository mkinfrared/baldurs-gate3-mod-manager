import { memo, useRef, useState } from "react";
import { useIntersection } from "react-use";

import Skeleton from "renderer/shared/assets/spinners/skeleton.svg";
import { classNames } from "renderer/shared/lib/helpers";

import NoImage from "../NoImage";

import css from "./LazyImage.module.scss";
import { LazyImageProps } from "./LazyImage.type";

const LazyImage = ({
  alt,
  className,
  children,
  src,
  srcSet,
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const pictureRef = useRef<HTMLPictureElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setIsLoaded(true);

    setError(true);
  };

  const loadImage = () => {
    const picture = pictureRef.current;
    const image = imageRef.current;

    if (!picture || !image) {
      return;
    }

    if (srcSet) {
      image.srcset = srcSet;

      return;
    }

    image.src = src ?? "";
  };

  const intersection = useIntersection(pictureRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0,
  });

  if (intersection?.isIntersecting && !isLoaded) {
    loadImage();
  }

  const showChildren = isLoaded || intersection?.isIntersecting;

  return (
    <picture
      className={classNames(css.LazyImage, className)}
      ref={pictureRef}
      data-testid="LazyImage"
      onLoad={handleLoad}
      onError={handleError}
    >
      {showChildren && children}
      <img
        className={classNames(isLoaded && css.loaded, error && css.error)}
        src={undefined}
        ref={imageRef}
        alt={alt}
      />
      {!isLoaded && <Skeleton className={css.skeleton} />}
      {error && <NoImage />}
    </picture>
  );
};

export { LazyImage };

export default memo(LazyImage);

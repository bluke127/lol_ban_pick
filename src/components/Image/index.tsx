'use client';
import Image from 'next/image';
import React, { ReactEventHandler, useEffect, useState } from 'react';
interface PropType {
  src: string;
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
  alt?: string;
  onLoad?: ReactEventHandler<HTMLImageElement> | undefined;
  onError?: ReactEventHandler<HTMLImageElement> | undefined;
}
function ImageComp({ src, width = 100, height = 100, alt = 'image', onLoad, onError }: PropType) {
  const [imageSrc, setImageSrc] = useState<string>(src);
  useEffect(() => setImageSrc(src), [src]);
  return (
    <>
      <Image
        src={imageSrc}
        width={width}
        height={height}
        alt={alt}
        onLoad={onLoad}
        onError={(e) => {
          setImageSrc('/images/default_champ.png');
          if (onError) onError(e);
        }}
        priority={true} // 즉시 로드
      />
    </>
  );
}

export default ImageComp;

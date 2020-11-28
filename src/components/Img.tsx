import React from 'react';

export interface ImgProps {
  src: string;
  alt: string;
}

const Img: React.FC<ImgProps> = ({ src, alt, ...props }) => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <React.Fragment>
      <img
        onLoad={() => {
          setIsLoaded(true);
        }}
        className="image full"
        style={{ opacity: isLoaded ? 1 : 0 }}
        alt={alt}
        src={src}
        {...props}
      />
      {!isLoaded ? <div className="image loading" /> : ''}
    </React.Fragment>
  );
};

export default Img;

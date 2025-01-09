import React, { useEffect, useRef, useState } from 'react';

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({ src, alt, className = '', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={imgRef}
      className={`transition duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <img
        src={src}
        alt={alt}
        className={className}
        style={{ transition: 'transform 1s ease-out' }}
      />
    </div>
  );
};

export default AnimatedImage;


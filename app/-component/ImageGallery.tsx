"use client";
import { useState } from "react";
import Image from "next/image";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [mainImage, setMainImage] = useState<string>(images[0]);
  const [fullscreenIndex, setFullscreenIndex] = useState<number | null>(null);

  const handleImageClick = (index: number): void => {
    setFullscreenIndex(index);
  };

  const handleCloseFullscreen = (): void => {
    setFullscreenIndex(null);
  };

  const handleNextImage = (): void => {
    if (fullscreenIndex !== null) {
      setFullscreenIndex((prevIndex) => ((prevIndex ?? 0) + 1) % images.length);
    }
  };

  const handlePrevImage = (): void => {
    if (fullscreenIndex !== null) {
      setFullscreenIndex(
        (prevIndex) => ((prevIndex ?? 0) - 1 + images.length) % images.length
      );
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Fullscreen Modal */}
      {fullscreenIndex !== null && (
        <div className="fixed inset-0 bg-[#000] bg-opacity-90 flex items-center justify-center z-50">
          <button
            onClick={handleCloseFullscreen}
            className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
          >
            ✕
          </button>
          <button
            onClick={handlePrevImage}
            className="absolute left-4 text-white text-2xl p-2 rounded-full hover:bg-gray-700"
          >
            <AiOutlineArrowLeft />
          </button>
          <div className="w-full max-w-4xl h-auto">
            <Image
              src={images[fullscreenIndex]}
              alt="Fullscreen Product Image"
              width={1000}
              height={1000}
              className="object-contain w-full h-auto"
            />
          </div>
          <button
            onClick={handleNextImage}
            className="absolute right-4 text-white text-2xl p-2 rounded-full hover:bg-gray-700"
          >
            <AiOutlineArrowRight />
          </button>
        </div>
      )}

      {/* Main Image */}
      <div
        className="w-full h-64 md:h-96 overflow-hidden rounded-lg shadow-lg cursor-pointer"
        onClick={() => handleImageClick(images.indexOf(mainImage))}
      >
        <Image
          src={mainImage}
          alt="Main Product Image"
          layout="responsive"
          width={400}
          height={400}
          className="object-cover"
        />
      </div>

      {/* Thumbnail Gallery */}
      <div className="flex gap-2">
        {images.map((src, index) => (
          <div
            key={index}
            className={`w-16 h-16 overflow-hidden rounded-lg border-2 cursor-pointer hover:opacity-80 transition-all ${
              mainImage === src
                ? "border-light-primary dark:border-dark-primary"
                : "border-light-border dark:border-dark-border"
            }`}
            onClick={() => setMainImage(src)}
          >
            <Image
              src={src}
              alt={`Gallery Image ${index + 1}`}
              layout="responsive"
              width={400}
              height={400}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;

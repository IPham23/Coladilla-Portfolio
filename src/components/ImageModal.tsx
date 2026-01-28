import { useState, useEffect } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export const ImageModal = ({ images, onClose }: any) => {
  const [index, setIndex] = useState(0);
  const [scale, setScale] = useState(1);

  const handlePrevious = () =>
    setIndex((index - 1 + images.length) % images.length);
  const handleNext = () => setIndex((index + 1) % images.length);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrevious();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [index, onClose]);

  const [isZoomed, setIsZoomed] = useState(false);
  

  return (
    <div
      className="fixed inset-0 bg-black/80 z-100 flex items-center justify-center"
      tabIndex={0}
      role="dialog"
      aria-modal="true"
    >
      
      {/* Close */}
      <IoIosCloseCircle
        onClick={onClose}
        className="max-md:top-4 max-md:right-5 max-sm:text-5xl
                   absolute md:top-8 md:right-10 sm:text-6xl text-[#c73131] 
                   hover:brightness-125 hover:scale-[1.1] cursor-pointer transition-all z-100"
        aria-label="Close modal"
      />

      {/* Left */}
      <FaArrowCircleLeft
        onClick={handlePrevious}
        className="max-sm:left-1/3 max-sm:-translate-x-1/2 max-sm:bottom-6 max-sm:text-4xl 
                   absolute sm:left-6 sm:text-6xl text-(--primary) 
                   hover:brightness-125 hover:scale-[1.1] cursor-pointer transition-all z-100"
        aria-label="Previous image"
      />

      {/* Zoom + Pan */}
      <div
        className={`max-sm:max-w-[90vw] sm:max-lg:max-w-[70vw] max-lg:max-h-[75vh] lg:max-w-[90vw] lg:max-h-[85.7vh] overflow-auto rounded-xl custom-scrollbar ${
          scale > 1 ? "cursor-zoom-out" : "cursor-zoom-in"
        }`}
      >
        <TransformWrapper
          key={index}
          minScale={1}
          maxScale={4}
          wheel={{ step: 0.1, disabled: !isZoomed}}
          doubleClick={{
            mode: isZoomed ? "zoomOut" : "zoomIn",
            step: 0.5,
          }}
          panning={{ velocityDisabled: true }}
          pinch={{ step: 0.5 }}
          onTransformed={(instance) => {
            setScale(instance.state.scale);
            setIsZoomed(instance.state.scale > 1);
          }}
        >
          <TransformComponent>
            <img
              src={images[index]}
              className={"max-md:w-[70vw] h-full lg:w-[85vw] object-cover object-top rounded-xl select-none"}
              draggable={false}
              alt={`Image ${index + 1} of ${images.length}`}
            />
          </TransformComponent>
        </TransformWrapper>
      </div>

      {/* Right */}
      <FaArrowCircleRight
        onClick={handleNext}
        className="max-sm:right-1/3 max-sm:translate-x-1/2 max-sm:bottom-6 max-sm:text-4xl 
                   absolute sm:right-6 text-6xl text-(--primary) 
                   hover:brightness-125 hover:scale-[1.1] cursor-pointer transition-all z-100"
        aria-label="Next image"
      />

      {/* Image Name */}
      <div className="max-sm:top-5 text-center absolute sm:top-8 left-1/2 -translate-x-1/2 text-white sm:text-lg font-semibold">
        {images[index].split('/').pop()?.split('.')[0].replace(/-/g, ' ') || 'Image'}
      </div>

      {/* Image Counter */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-lg font-semibold">
        {index + 1} / {images.length}
      </div>
    </div>
  );
};

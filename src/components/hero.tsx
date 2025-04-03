import { useState, useRef } from "react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState([0]);

  const totalVideos = 4;

  const nextVideoRef = useRef(null);
  const handleVideoLoad = () => {
    setLoadedVideos((prev) => [...prev, prev.length + 1]);
  };
  const upcomingVideoIndex = (currentIndex % totalVideos) + 1; // Check the nextvideo does not go above 4

  const handleMiniVideoClick = () => {
    setHasClicked(true);
    setCurrentIndex(upcomingVideoIndex);
  };
  const getVideoSrc = (index: number) => `videos/hero-${index}.mp4`;

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-x-hidden rounded-lg bg-blue-75"
      >
        <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
          <div
            onClick={handleMiniVideoClick}
            className="origin-center scale-50 opacity-0 transtion-all duration-500 ease-in hover:scale-100"
          >
            <video
              ref={nextVideoRef}
              src={getVideoSrc(currentIndex + 1)}
              loop
              muted
              id="current-video"
              className="size-64 origin-center scale-150 object-cover object-center"
              onLoadedData={handleVideoLoad}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

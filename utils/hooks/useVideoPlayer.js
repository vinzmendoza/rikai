import { useState, useEffect } from "react";

const useVideoPlayer = (videoElement) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);

  const handleVideoPlaying = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    isPlaying ? videoElement.current.play() : videoElement.current.pause();
  }, [isPlaying, videoElement]);

  const handleOnTimeUpdate = () => {
    const vidProgress =
      (videoElement.current.currentTime / videoElement.current.duration) * 100;

    if (isPlaying && vidProgress == 100) {
      setIsPlaying(false);
      setProgress(0);
    }
    setProgress(vidProgress);
  };

  const handleVideoProgress = (event) => {
    let manualChange;

    manualChange = Number(event);

    videoElement.current.currentTime =
      (videoElement.current.duration / 100) * manualChange;
    setProgress(manualChange);
  };

  const handleStepProgress = (event, endTiming) => {
    let stepChange;

    stepChange = (event / endTiming) * 100;

    videoElement.current.currentTime =
      (videoElement.current.duration / 100) * stepChange;
    setProgress(stepChange);
  };

  const handleVideoSpeed = (val) => {
    const speed = Number(val);
    videoElement.current.playbackRate = speed;
    setPlaybackSpeed(speed);
  };

  return {
    isPlaying,
    progress,
    playbackSpeed,
    setIsPlaying,
    handleVideoPlaying,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    handleStepProgress,
  };
};

export default useVideoPlayer;

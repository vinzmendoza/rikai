import { useVideo } from "../../utils/context/Video";
import useVideoPlayer from "../../utils/hooks/useVideoPlayer";
import PlaybackSpeed from "./PlaybackSpeed";
import PlayButton from "./PlayButton";
import ProgressBar from "./ProgressBar";

const VideoPlayer = ({ videoUrl }) => {
  const { videoRef } = useVideo();

  const {
    isPlaying,
    progress,
    handleVideoPlaying,
    handleOnTimeUpdate,
    handleVideoProgress,
  } = useVideoPlayer(videoRef);

  return (
    <>
      <div className="flex flex-col gap-y-4">
        <h3 className="text-neutral-500">Kanji Demo</h3>
        <video
          className="rounded invert"
          ref={videoRef}
          onTimeUpdate={handleOnTimeUpdate}
        >
          <source src={videoUrl} type="video/mp4" />
          <p>Your Browser does not support the video tag.</p>
        </video>
        <div className="flex flex-col gap-y-4">
          <div className="flex flex-row items-center p-2 rounded bg-neutral-800">
            <PlayButton
              isPlaying={isPlaying}
              handleVideoPlaying={handleVideoPlaying}
            />
            <ProgressBar
              progress={progress}
              handleVideoProgress={handleVideoProgress}
            />
            <PlaybackSpeed />
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoPlayer;

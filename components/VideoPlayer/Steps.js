import NextImage from "next/image";
import { useVideo } from "../../utils/context/Video";
import useVideoPlayer from "../../utils/hooks/useVideoPlayer";

const Steps = ({ strokes }) => {
  const { videoRef } = useVideo();

  const { handleStepProgress } = useVideoPlayer(videoRef);

  return (
    <div className="">
      {strokes.images.map((step, index, array) => (
        <NextImage
          src={step}
          key={index}
          alt={`kanjiStroke-${index}`}
          height={48}
          width={48}
          className="cursor-pointer invert"
          onMouseOver={() =>
            handleStepProgress(
              strokes.timings[index + 1] - 0.01,
              strokes.timings[array.length]
            )
          }
        />
      ))}
    </div>
  );
};

export default Steps;

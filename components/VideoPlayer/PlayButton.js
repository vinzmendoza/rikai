import { PlayIcon, PauseIcon } from "@radix-ui/react-icons";
const PlayButton = ({ handleVideoPlaying, isPlaying }) => {
  return (
    <button onClick={handleVideoPlaying}>
      {isPlaying ? (
        <PauseIcon className="w-6 h-6 mr-2 transition duration-200 ease-in-out hover:text-neutral-400" />
      ) : (
        <PlayIcon className="w-6 h-6 mr-2 transition duration-200 ease-in-out hover:text-neutral-400" />
      )}
    </button>
  );
};

export default PlayButton;

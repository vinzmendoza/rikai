import { PlayIcon, PauseIcon } from "@radix-ui/react-icons";
const PlayButton = ({ handleVideoPlaying, isPlaying }) => {
  return (
    <button onClick={handleVideoPlaying}>
      {isPlaying ? (
        <div className="p-1 mr-2 transition duration-200 ease-in-out rounded hover:bg-neutral-600">
          <PauseIcon className="w-6 h-6" />
        </div>
      ) : (
        <div className="p-1 mr-2 transition duration-200 ease-in-out rounded hover:bg-neutral-600">
          <PlayIcon className="w-6 h-6" />
        </div>
      )}
    </button>
  );
};

export default PlayButton;

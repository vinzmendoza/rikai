import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import * as SelectPrimitive from "@radix-ui/react-select";

import { useVideo } from "../../utils/context/Video";
import useVideoPlayer from "../../utils/hooks/useVideoPlayer";

const PlaybackSpeed = () => {
  const { videoRef } = useVideo();

  const { playbackSpeed, handleVideoSpeed } = useVideoPlayer(videoRef);

  return (
    <SelectPrimitive.Root
      defaultValue={playbackSpeed.toString()}
      onValueChange={(e) => handleVideoSpeed(e)}
    >
      <SelectPrimitive.Trigger
        aria-label="Playback Speed"
        className="flex flex-row items-center justify-end px-2 py-1 ml-2 transition duration-200 ease-in-out rounded hover:bg-neutral-600"
      >
        <SelectPrimitive.Value />
        <SelectPrimitive.Icon>
          <ChevronDownIcon className="w-4 h-4 ml-2" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Content className="overflow-hidden rounded bg-neutral-700">
        <SelectPrimitive.ScrollUpButton className="flex items-center justify-center">
          <ChevronUpIcon />
        </SelectPrimitive.ScrollUpButton>
        <SelectPrimitive.Viewport className="p-2">
          <SelectPrimitive.Group>
            <SelectPrimitive.Label className="py-2 text-sm text-neutral-400">
              Playback Speed
            </SelectPrimitive.Label>

            <SelectPrimitive.Item
              value="0.50"
              className="relative flex items-center py-1 pl-6 rounded cursor-pointer focus:text-neutral-100 focus:bg-neutral-600 hover:outline-none"
            >
              <SelectPrimitive.ItemText>0.5x</SelectPrimitive.ItemText>
              <SelectPrimitive.ItemIndicator className="absolute left-0 inline-flex items-center justify-center w-6">
                <CheckIcon />
              </SelectPrimitive.ItemIndicator>
            </SelectPrimitive.Item>

            <SelectPrimitive.Item
              value="1"
              className="relative flex items-center py-1 pl-6 rounded cursor-pointer focus:text-neutral-100 focus:bg-neutral-600 hover:outline-none"
            >
              <SelectPrimitive.ItemText>1x</SelectPrimitive.ItemText>
              <SelectPrimitive.ItemIndicator className="absolute left-0 inline-flex items-center justify-center w-6">
                <CheckIcon />
              </SelectPrimitive.ItemIndicator>
            </SelectPrimitive.Item>

            <SelectPrimitive.Item
              value="1.25"
              className="relative flex items-center py-1 pl-6 rounded cursor-pointer focus:text-neutral-100 focus:bg-neutral-600 hover:outline-none"
            >
              <SelectPrimitive.ItemText>1.25x</SelectPrimitive.ItemText>
              <SelectPrimitive.ItemIndicator className="absolute left-0 inline-flex items-center justify-center w-6">
                <CheckIcon />
              </SelectPrimitive.ItemIndicator>
            </SelectPrimitive.Item>

            <SelectPrimitive.Item
              value="2"
              className="relative flex items-center py-1 pl-6 rounded cursor-pointer focus:text-neutral-100 focus:bg-neutral-600 hover:outline-none"
            >
              <SelectPrimitive.ItemText>2x</SelectPrimitive.ItemText>
              <SelectPrimitive.ItemIndicator className="absolute left-0 inline-flex items-center justify-center w-6">
                <CheckIcon />
              </SelectPrimitive.ItemIndicator>
            </SelectPrimitive.Item>
          </SelectPrimitive.Group>
        </SelectPrimitive.Viewport>
        <SelectPrimitive.ScrollDownButton className="flex items-center justify-center py-2">
          <ChevronDownIcon />
        </SelectPrimitive.ScrollDownButton>
      </SelectPrimitive.Content>
    </SelectPrimitive.Root>
  );
};

export default PlaybackSpeed;

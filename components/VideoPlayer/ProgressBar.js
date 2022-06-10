import * as SliderPrimitive from "@radix-ui/react-slider";

const ProgressBar = ({ progress, handleVideoProgress }) => {
  return (
    <SliderPrimitive.Root
      value={[progress]}
      max={100}
      aria-label="Volume"
      className="relative flex items-center w-full h-[20px]"
      onValueChange={(e) => handleVideoProgress(e[0])}
    >
      <SliderPrimitive.Track className="relative h-[3px] grow bg-neutral-600 rounded-[9999px]">
        <SliderPrimitive.Range className="absolute h-full rounded-[9999px] bg-neutral-100 " />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="block w-[20px] h-[20px] rounded-[10px] bg-neutral-100" />
    </SliderPrimitive.Root>
  );
};

export default ProgressBar;

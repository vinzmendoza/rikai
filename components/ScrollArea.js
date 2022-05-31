import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

const ScrollArea = ({ children }) => (
  <ScrollAreaPrimitive.Root
    className="w-full h-full pr-4 mb-4 overflow-hidden rounded-b"
    scrollHideDelay={300}
  >
    <ScrollAreaPrimitive.Viewport className="w-full h-full border-lg">
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollAreaPrimitive.Scrollbar
      orientation="vertical"
      className="flex w-[10px] px-[2px] py-[3px] transition duration-300 ease-out rounded select-none touch-none bg-neutral-700 hover:bg-neutral-600 "
    >
      <ScrollAreaPrimitive.Thumb className="relative flex-1 w-full h-full rounded-sm bg-neutral-400" />
    </ScrollAreaPrimitive.Scrollbar>
    <ScrollAreaPrimitive.Corner className="bg-neutral-700" />
  </ScrollAreaPrimitive.Root>
);

export default ScrollArea;

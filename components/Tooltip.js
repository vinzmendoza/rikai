import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { InfoCircledIcon } from "@radix-ui/react-icons";

const Tooltip = ({ children }) => {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger
          asChild
          className="mb-2 ml-1 cursor-pointer text-neutral-400"
        >
          <InfoCircledIcon />
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Content className="p-2 text-sm rounded bg-neutral-700">
          {children}
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};

export default Tooltip;

import * as LabelPrimitive from "@radix-ui/react-label";

const Label = ({ htmlFor, style, children }) => (
  <LabelPrimitive.Root htmlFor={htmlFor} className={style}>
    {children}
  </LabelPrimitive.Root>
);

export default Label;

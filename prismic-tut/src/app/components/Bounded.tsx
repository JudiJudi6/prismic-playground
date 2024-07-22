import React from "react";
import clsx from "clsx";

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

export default function Bounded({
  children,
  as: Comp = "section",
  className,
  ...restProps
}: BoundedProps) {
  return (
    <Comp
      className={clsx("px-4 py-10 md:px-4 md:py-14 lg:py-16", className)}
      {...restProps}
    >
      <div className="w-full max-w-6xl mx-auto">{children}</div>
    </Comp>
  );
}

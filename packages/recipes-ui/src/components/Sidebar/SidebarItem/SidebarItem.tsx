import React from "react";
import { clsx } from "clsx";

import { Slot } from "../../Slot";

type SidebarItemProps = React.PropsWithChildren<{
  asChild?: boolean;
  isActive?: boolean;
}> &
  React.ComponentProps<"li">;

export function SidebarItem({
  asChild,
  children,
  className,
  isActive,
  ...rest
}: SidebarItemProps) {
  const Component = asChild ? Slot : "li";
  return (
    <Component
      className={clsx(
        "px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-200 rounded-md mb-1 cursor-pointer",
        {
          "bg-gray-200": isActive,
        },
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}

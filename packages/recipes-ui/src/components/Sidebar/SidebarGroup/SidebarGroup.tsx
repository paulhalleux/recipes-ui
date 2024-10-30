import React from "react";
import { clsx } from "clsx";

type SidebarGroupProps = React.PropsWithChildren<{
  title: string;
}> &
  Omit<React.ComponentProps<"ul">, "title">;

export function SidebarGroup({
  title,
  children,
  className,
  ...rest
}: SidebarGroupProps) {
  return (
    <ul className={clsx("mb-4", className)} {...rest}>
      <h3 className="text-xs font-medium text-gray-500 mb-2 px-2">{title}</h3>
      {children}
    </ul>
  );
}

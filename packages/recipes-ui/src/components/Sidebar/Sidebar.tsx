import { PropsWithChildren } from "react";

import { SidebarGroup } from "./SidebarGroup";
import { SidebarItem } from "./SidebarItem";

type SidebarProps = PropsWithChildren;

export function Sidebar({ children }: SidebarProps) {
  return (
    <div className="px-2 py-4 bg-gray-100 border-r border-r-gray-300 w-72 h-full">
      {children}
    </div>
  );
}

Sidebar.Group = SidebarGroup;
Sidebar.Item = SidebarItem;

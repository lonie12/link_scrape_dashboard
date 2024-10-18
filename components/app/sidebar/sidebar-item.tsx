"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

type SidebarItemProps = PropsWithChildren & {
  path: string;
};

export default function SidebarItem({ path, children }: SidebarItemProps) {
  const pathname = usePathname();
  const active = pathname === `/dashboard${path}`;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href="#"
          className={`flex h-9 w-9 items-center justify-center rounded-lg ${
            active ? "bg-accent" : ""
          } text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8`}
        >
          {children}
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right">Orders</TooltipContent>
    </Tooltip>
  );
}
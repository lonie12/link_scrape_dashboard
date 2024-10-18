import Link from "next/link";
import {
  Home,
  LineChart,
  Package,
  Package2,
  Settings,
  ShoppingCart,
  Users2,
} from "lucide-react";
import SidebarItem from "./sidebar-item";

export default function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <Link
          href="#"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <SidebarItem path="/dashboard">
          <Home className="h-5 w-5" />
          <span className="sr-only">Dashboard</span>
        </SidebarItem>
        <SidebarItem path="/dashboard/orders">
          <ShoppingCart className="h-5 w-5" />
          <span className="sr-only">Orders</span>
        </SidebarItem>
        <SidebarItem path="/dashboard/products">
          <Package className="h-5 w-5" />
          <span className="sr-only">Products</span>
        </SidebarItem>
        <SidebarItem path="/dashboard/products">
          <Users2 className="h-5 w-5" />
          <span className="sr-only">Customers</span>
        </SidebarItem>
        <SidebarItem path="/dashboard/analytics">
          <LineChart className="h-5 w-5" />
          <span className="sr-only">Analytics</span>
        </SidebarItem>
        {/* <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
            >
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Analytics</TooltipContent>
        </Tooltip> */}
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <SidebarItem path="/dashboard/settings">
          <Settings className="h-5 w-5" />
          <span className="sr-only">Settings</span>
        </SidebarItem>
      </nav>
    </aside>
  );
}

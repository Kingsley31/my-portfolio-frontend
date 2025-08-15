'use client';
import { navItems } from "@/features/nav/nav-items";
import { Sidebar, SidebarContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../../components/ui/sidebar";
import Link from "next/link";
import { useIsActive } from "./use-is-active.hook";

export function AppSidebar() {
  const { isActive, hash } = useIsActive();
    return (
    <Sidebar variant="floating" className="z-1000">
      <SidebarContent className="mt-25">
        <SidebarMenu className="text-xl">
          {navItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <Link href={item.url} className={isActive(item,hash) ? "text-primary font-bold" : ""}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}
'use client';
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { navItems } from "@/features/nav/nav-items";
import { getPersonalDetails } from "@/data/personal-details/get-personal-details.api";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useIsActive } from "./use-is-active.hook";

export function NavBarSection() {
    const { toggleSidebar } = useSidebar();
    const personaDetail = getPersonalDetails();
    const { isActive, hash } = useIsActive();
  

    return (
        <div className="fixed top-0 right-0 left-0 md:right-4 z-100">
        <div className="flex flex-row items-center justify-between max-w-6xl mx-auto px-4 md:px-10 lg:px-20 bg-white h-20">
            <div className="flex flex-row items-center gap-4">
                <Button className="block md:hidden" onClick={toggleSidebar} variant={"ghost"} size={"icon"} asChild><Menu className="text-primary"/></Button>
                <Link href="/" className="text-primary font-bold">{personaDetail.middleName} {personaDetail.lastName}</Link>
            </div>
            <div className="hidden md:flex md:flex-row justify-end gap-6">
                {navItems.map((item) => 
                    (<Link 
                        key={item.title} 
                        href={item.url} 
                        scroll={true}
                        className={isActive(item,hash) ? "text-primary font-bold" : ""}
                    >{item.title}</Link>)
                )}
            </div>
        </div>
      </div>
    );
}
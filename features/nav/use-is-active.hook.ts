import { useEffect, useState } from "react";
import { NavItem } from "./nav-items";


export function useIsActive() {
      const [hash, setHash] = useState("#");

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash.trim() || "#");
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  const isActive = (item: NavItem, currentHash:string) => currentHash === item.url;

  return { isActive, hash };
}
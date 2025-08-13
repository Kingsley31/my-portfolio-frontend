import { useEffect, useState } from "react";
import { NavItem } from "./nav-items";


export function useIsActive() {
      const [hash, setHash] = useState("#");

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash || "#");
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  const isActive = (item: NavItem) => hash === item.url;

  return { isActive };
}
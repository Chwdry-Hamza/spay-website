"use client";

import { usePathname } from "next/navigation";
import BottomNav from "./BottomNav";

const HIDDEN_PATHS = ["/privacy-policy", "/cookie-policy", "/terms-conditions"];

export default function ConditionalBottomNav() {
  const pathname = usePathname();

  if (HIDDEN_PATHS.includes(pathname)) {
    return null;
  }

  return <BottomNav />;
}

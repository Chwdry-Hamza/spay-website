"use client";

import { usePathname } from "next/navigation";
import BottomNav from "./BottomNav";

const HIDDEN_PATHS = ["/about", "/card-terms", "/privacy-policy", "/prohibited-activities"];

export default function ConditionalBottomNav() {
  const pathname = usePathname();
  if (HIDDEN_PATHS.includes(pathname)) return null;
  return <BottomNav />;
}

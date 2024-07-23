"use client";
import React from "react";
import { usePathname } from "next/navigation";

const FooterRendering = ({ children }: { children: React.ReactNode }) => {
  const currentPath = usePathname();
  console.log(currentPath !== "/");
  return <>{currentPath !== "/" ? children : <>Sin Footer</>}</>;
};
export default FooterRendering;

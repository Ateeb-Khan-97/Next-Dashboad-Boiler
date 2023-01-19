"use client";

import Navbar from "@/components/Layout/Navbar";
import Sidebar from "@/components/Layout/Sidebar";
import { useState } from "react";
//
export default function Layout({ children }) {
  const [sidebarActive, setSidebarActive] = useState(true);
  return (
    <>
      <section className="w-[100%] h-screen overflow-hidden flex">
        <Sidebar sidebarActive={sidebarActive} />
        <div
          className={
            sidebarActive
              ? "transition-all w-[calc(100%_-_200px)] overflow-hidden relative"
              : "transition-all w-[100%] overflow-hidden relative"
          }
        >
          <Navbar
            sidebarActive={sidebarActive}
            setSidebarActive={setSidebarActive}
          />
          <div className="h-16" />
          <div className="main-shadow">{children}</div>
        </div>
      </section>
    </>
  );
}

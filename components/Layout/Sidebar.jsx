"use client";
import { Button } from "@mantine/core";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import React from "react";

const Sidebar = ({ sidebarActive }) => {
  const router = useRouter();
  const classString = sidebarActive
    ? "transition-all h-screen w-[200px] translate-x-[0px]"
    : "transition-all h-screen w-0 translate-x-[-1000px]";
  //
  function logOutHandler() {
    deleteCookie("token");
    router.refresh();
  }
  //
  return (
    <section className={classString + "flex flex-col justify-between"}>
      <header className="h-16 flex justify-center items-center">
        <h1>Title</h1>
      </header>
      <main className="border h-[calc(100vh_-_8rem)]"></main>
      <footer className="h-16 flex justify-center items-center p-4">
        <Button
          onClick={logOutHandler}
          size="md"
          className="bg-red-500 transition-all hover:bg-red-900 w-[100%]"
        >
          Logout
        </Button>
      </footer>
    </section>
  );
};

export default Sidebar;

"use client";
import { Avatar, Burger, Group, Text, UnstyledButton } from "@mantine/core";
import React from "react";

const Navbar = ({ sidebarActive, setSidebarActive }) => {
  // functions
  const sidebarFunction = () => {
    setSidebarActive((pre) => !pre);
  };
  //;
  return (
    <nav className="border bg-white flex justify-between items-center px-4 h-16 absolute top-0 left-0 w-[100%]">
      <Burger size={"sm"} opened={sidebarActive} onClick={sidebarFunction} />

      <UnstyledButton className="cursor-default">
        <Group>
          <Avatar size={40} color="blue">
            A
          </Avatar>
          <div>
            <Text>Muhammad Ateeb Khan</Text>
            <Text size="xs" color="dimmed">
              ateebkhan997@gmail.com
            </Text>
          </div>
        </Group>
      </UnstyledButton>
    </nav>
  );
};

export default Navbar;

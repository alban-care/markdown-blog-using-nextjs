"use client";

import React from "react";
import { MenuIcon } from "../Icons";

const MobileNavigationMenu = () => {
  return (
    <button
      data-collapse-toggle="menu"
      type="button"
      className="inline-flex items-center p-1 w-7 h-7 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      aria-controls="menu"
      aria-expanded="false"
      onClick={() => {
        const menu = document.getElementById("menu");
        const menuToggle = document.getElementById("menu-toggle");
        if (menu && menuToggle) {
          menu.classList.toggle("hidden");
          menuToggle.classList.toggle("active");
        }
      }}
    >
      <span className="sr-only">Open main menu</span>
      <MenuIcon className={"w-5 h-5"} />
    </button>
  );
};

export default MobileNavigationMenu;

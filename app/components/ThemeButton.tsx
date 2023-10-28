"use client";

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "./Icons";
import { useEffect, useState } from "react";

const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme();

  /* https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch */
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      id="theme-toggle"
      data-tooltip-target="tooltip-toggle"
      type="button"
      className="m-1 w-7 h-7 p-1 text-gray-500 inline-flex items-center justify-center dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-full text-sm"
      onClick={toggleTheme}
    >
      {resolvedTheme === "dark" ? (
        <MoonIcon className="w-full h-full" />
      ) : (
        <SunIcon />
      )}
      <span className="sr-only">Toggle dark mode</span>
    </button>
  );
};

export default ThemeButton;

import Link from "next/link";
import MobileNavigationMenu from "./MobileNavigationMenu";
import ThemeButton from "./ThemeButton";
import { LogoIcon, SearchIcon, GithubIcon } from "./Icons";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white border-gray-200 dark:bg-gray-800 shadow-xl h-14 px-4 z-10">
      <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto h-14">
        <Link href="/" className="flex items-center dark:text-white">
          <LogoIcon className={"w-6 h-6"} />
          <span className="ml-3 self-center text-2xl font-semibold whitespace-nowrap ">
            devSnippets
          </span>
        </Link>

        {/* mobile menu button */}
        {/* <MobileNavigationMenu /> */}

        {/* menu */}
        <nav
          className="hidden relative w-full" /* md:w-auto md-block */
          id="menu"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </a>
            </li>
          </ul>
        </nav>
        <div className="inline-flex">
          {/* search component */}
          <div className="hidden relative mr-1 sm:inline-flex">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <SearchIcon
                className={"w-4 h-4 text-gray-500 dark:text-gray-400"}
              />
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>

          {/* github repository path */}
          <Link
            href="https://github.com/alban-care"
            data-tooltip-target="tooltip-github-2"
            className="m-1 w-7 h-7 p-1 inline-flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-full text-sm"
          >
            <GithubIcon className={"w-full h-full"} />
            <span className="sr-only">View on Github</span>
          </Link>

          {/* dark theme */}
          <ThemeButton />
        </div>
      </div>
    </header>
  );
};

export default Header;

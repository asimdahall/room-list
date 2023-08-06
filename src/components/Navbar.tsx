import { NavLink } from "react-router-dom";
import cx from "classnames";
import useCleaningList from "../hooks/useCleaningList";
import SearchInput from "./inputs/SearchInput";
import { ComponentProps } from "react";

interface ActiveNavLinkProps extends ComponentProps<typeof NavLink> {}

const ActiveNavLink = (props: ActiveNavLinkProps) => {
  return (
    <NavLink
      className={({ isActive }) => {
        return cx(
          "text-white px-3 py-2 rounded-md text-sm font-medium",
          isActive ? "bg-gray-900" : "bg-transparent"
        );
      }}
      {...props}
    />
  );
};

const Navbar = () => {
  const { count } = useCleaningList();
  return (
    <nav className="bg-gray-800 w-full fixed z-50">
      <div className="container mx-auto">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <img
                className="h-8 w-auto"
                src="https://roompricegenie.com/wp-content/uploads/2022/04/rpg_Logo_indigo.svg"
                alt="Workflow"
              />
            </div>
            {/* <div className="ml-96">
              <SearchInput label="Search for rooms" />
            </div> */}
            <div className="hidden sm:block sm:ml-auto">
              <div className="flex space-x-4">
                <ActiveNavLink to="/">Explore</ActiveNavLink>
                <ActiveNavLink to="/occupancy">Occupancy</ActiveNavLink>
                <NavLink
                  to="/cleaning-list"
                  className="text-gray-300 bg-gray-950 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-2xl text-sm font-medium shadow-gray-900 shadow-md relative"
                >
                  <span>✨ Needs Cleaning</span>
                  {count ? (
                    <span className="inline-flex ml-2 h-5 w-5 items-center justify-center px-1 py-1 text-xs font-medium leading-none text-red-100 bg-red-600 circle absolute -top-1 -right-1 rounded-full">
                      {count}
                    </span>
                  ) : null}
                </NavLink>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

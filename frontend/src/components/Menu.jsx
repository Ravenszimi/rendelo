import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo_hatter.png";
import { useContext, useEffect } from "react";
import OrvosContext from "../context/OrvosContext";

function Menu() {
  const { loggedIn, logout } = useContext(OrvosContext);
  const navigate = useNavigate();
  const navItems = {
    loggedIn: [
      {
        title: "Főoldal",
        path: "/",
      },
      {
        title: "Orvosok",
        path: "/orvosok",
      },
      {
        title: "Páciensek",
        path: "/paciensek",
      },
      {
        title: "Gazdák",
        path: "/gazdak",
      },
      {
        title: "Vizsgálatok",
        path: "/vizsgalatok",
      },
      {
        title: "Kezelések és árak",
        path: "/kezelesarak",
      },
    ],
    loggedOut: [
      // ide jöhetnek azok a menüpontok amik kijelentkezett állapotban elérthetőek
    ],
  };
  return (
    <nav className="bg-[#9D76C1] dark:bg-gray-900 fixed w-full z-20 top-0 sticky start-0 border-b-2 border-[#5B0888] dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to={"/"}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src={Logo}
            className="h-12 border-2 border-[#5B0888]"
            alt="Flowbite Logo"
          />
          <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
            Healthy Pet
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {!loggedIn ? (
            <Link to={"/login"}>
              <button
                type="button"
                className="text-white bg-[#713ABE] hover:bg-[#5B0888] font-bold rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-black my-3 "
              >
                Bejelentkezés
              </button>
            </Link>
          ) : (
              <button
                onClick={() => {
                  logout();
                  navigate('/');
                }}
                type="button"
                className="text-white bg-[#713ABE] hover:bg-[#5B0888] font-bold rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-black my-3 "
              >
                Kijelentkezés
              </button>
          )}

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:ring-[#5B0888] focus:outline-none focus:ring-2 focus:ring-[#5B0888] dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 my-3"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="#5B0888"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="bg-[#E5CFF7] items-center hidden justify-between w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col bg-[#E5CFF7] p-4 md:p-0 mt-4 font-medium  bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-[#9D76C1] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {!loggedIn
              ? navItems.loggedIn.map((navitem) => (
                  <Link
                    to={navitem.path}
                    className="block py-2 px-3 text-black font-semibold text-xl bg-[#E5CFF7] rounded hover:bg-[#9D76C1] md:bg-[#9D76C1] md:hover:text-[#5B0888] md:p-0 md:dark:text-blue-500"
                  >
                    {navitem.title}
                  </Link>
                ))
              : navItems.loggedOut.map((navitem) => (
                  <Link
                    to={navitem.path}
                    className="block py-2 px-3 text-black font-semibold text-xl bg-[#E5CFF7] rounded hover:bg-[#9D76C1] md:bg-[#9D76C1] md:hover:text-[#5B0888] md:p-0 md:dark:text-blue-500"
                  >
                    {navitem.title}
                  </Link>
                ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;

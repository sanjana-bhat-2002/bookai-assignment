import { useState } from "react";
import ThemeButton from "./ThemeButton";

const ItemList = () => {
  const navbarItems = [
    "Overview",
    "Authentication",
    "Endpoints",
    "Tutorial",
    "Code Examples",
    "API Pricing",
  ];

  const setScrollOffset = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 200;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <ul className="flex flex-col justify-center pt-8 pb-4 bg-indigo-50 dark:bg-secondary-dark dark:bg-section md:flex-row w-full">
      {navbarItems.map((item, index) => (
        <li
          key={index}
          className="px-4 py-3 whitespace-nowrap hover:text-accent transition-colors duration-400 dark:hover:text-accent text-center text-sm uppercase text-text-primary dark:text-text-primary-dark w-full"
        >
          <a
            href={`#${item.toLowerCase()}`}
            onClick={(e) => {
              e.preventDefault();
              setScrollOffset(item.toLowerCase());
            }}
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 flex md:flex-col-reverse items-center justify-between p-8 md:p-2 bg-secondary dark:bg-secondary-dark border-b border-border dark:border-border-dark">
      <ThemeButton />
      <nav>
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <div className="block mb-2 h-0.5 w-8 bg-gray-600 dark:bg-secondary"></div>
          <div className="block mb-2 h-0.5 w-8 bg-gray-600 dark:bg-secondary"></div>
          <div className="block mb-2 h-0.5 w-8 bg-gray-600 dark:bg-secondary"></div>
        </div>

        {/* Mobile Menu */}
        {isNavOpen && (
          <div className="absolute top-0 inset-0 z-10 flex flex-col items-center justify-center w-full h-1/2 bg-secondary dark:bg-secondary-dark">
            <div
              className="absolute top-0 right-0 p-8 z-50 text-red-500"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="w-8 h-8 text-text-primary dark:text-text-primary-dark"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <div className="absolute top-0 w-full border-b border-border dark:border-border-dark">
              <ItemList />
            </div>
          </div>
        )}

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-col space-x-8">
          <ItemList />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

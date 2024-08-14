import { useState } from "react"
import ThemeButton from "./ThemeButton"


const ItemList = () => {
    const navbarItems = ["Overview", "Authentication", "Endpoints", "Tutorial", "Code Examples", "Pricing"]

    return (
        <ul className="dark:bg-section w-full flex flex-col justify-center bg-indigo-50 py-8 md:flex-row">
            {
                navbarItems.map((item, index) => (
                    <li key={index} className='w-full px-4 py-3 text-center text-sm uppercase text-blue-800 dark:text-secondary'>
                        <a href="">
                            {item}
                        </a>

                    </li>
                ))


            }

        </ul>
    )
}


const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    return (
        <div className="flex dark:bg-secondary-dark sticky top-0 z-50 bg-secondary items-center justify-between p-8 border-b border-border dark:border-border-dark">
          <ThemeButton />
          <nav>
            <section className="MOBILE-MENU flex lg:hidden cursor-pointer">
              <div
                className="HAMBURGER-ICON"
                onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
              >
                <div className="block mb-2 h-0.5 w-8 dark:bg-secondary bg-gray-600"></div>
                <div className="block mb-2 h-0.5 w-8 dark:bg-secondary bg-gray-600"></div>
                <div className="block mb-2 h-0.5 w-8 dark:bg-secondary bg-gray-600"></div>
              </div>
    
              <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> 
                <div
                  className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                  onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
                >
                  <svg
                    className="h-8 w-8 text-gray-600"
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
                <div className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
                <ItemList />
                </div>
              </div>
            </section>
    
            <div className="DESKTOP-MENU hidden space-x-8 lg:flex">
              <ItemList />
            </div>
          </nav>
          <style>{`
          .hideMenuNav {
            display: none;
          }
          .showMenuNav {
            display: block;
            position: absolute;
            width: 100%;
            height: 100vh;
            top: 0;
            left: 0;
            background: white;
            z-index: 10;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
          }
        `}</style>
        </div>
      );
    

    

    
  
}

export default Navbar;
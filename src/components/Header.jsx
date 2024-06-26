import { useState } from "react";
import Left from "../../public/left.png";

const Header = () => {
  // selecting state
  const [isActive, setIsActive] = useState(false);

  // Add toggle state
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="flex items-center justify-between bg-header p-6 lg:px-10 lg:py-2 ">
      <div className="">
        <img
          src={Left}
          className="w-[104px] h-[51px] lg:w-[206px] lg:h-[101px]"
          alt="logo"
        />
      </div>
      <nav
        id="navbar"
        className={`${
          isActive ? 'inline-block' : 'hidden'
        } bg-white fixed top-0 left-0 w-full h-screen flex items-center justify-center lg:relative lg:w-auto lg:h-auto lg:block z-50`}
      >
        <ul className="flex flex-col gap-8 text-center lg:flex lg:flex-row lg:items-center lg:justify-between lg:space-x-20">
          <li>
            <a
              href="#"
              className="hover:text-orange-500 transition ease-in-out duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-orange-500 transition ease-in-out duration-300"
            >
              Product
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-orange-500 transition ease-in-out duration-300"
            >
              Faq
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-orange-500 transition ease-in-out duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <button onClick={toggleActiveClass} className="lg:hidden z-50">
        <ion-icon name="menu-outline"></ion-icon>
      </button>
    </div>
  );
};

export default Header;


import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { useState } from "react"
function Navbar() {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <nav>
        <ul className="text-white flex flex-wrap md:flex-no-wrap justify-between p-9 text-2xl">
          <li>
            <span className="no-underline text-white font-bold text-2xl">
              <Link href="#">MARKALL</Link>
            </span>
            <button onClick={toggleMenu} className="text-white p-2">
            <FaBars />{" "}
          </button>
          </li>
          <li>
            <ul className="text-white flex justify-around space-x-3 ">
              <li className="hidden md:block">
                <Link href="#">Services</Link>{" "}
              </li>
              <li className="hidden md:block">
                <Link href="#">Pricing</Link>
              </li>
              <li className="hidden md:block">
                <Link href="#">About Us</Link>
              </li>
            </ul>
          </li>
          <li className="bg-green-400 text-black font-bold p-2 rounded hover:scale-110 duration-300 hover:bg-green-200 flex">
            <Link href="#">Get Started</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

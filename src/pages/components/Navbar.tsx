import Link from "next/link";

function Navbar() {
  return (
    <div>
      <nav>
        <ul className="text-white flex justify-between p-9 text-2xl">
          <li>
            <span className="no-underline text-white font-bold text-2xl">
              <Link href="#">MARKALL</Link>
            </span>
          </li>
          <li>
            <ul className="text-white flex justify-around space-x-3">
              <li>
                <Link href="#">Services</Link>{" "}
              </li>
              <li>
                <Link href="#">Pricing</Link>
              </li>
              <li>
                <Link href="#">About Us</Link>
              </li>
            </ul>
          </li>
          <li className="bg-green-400 text-black font-bold p-2 rounded hover:scale-110 duration-300 hover:bg-green-200">
            <Link href="#">Get Started</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

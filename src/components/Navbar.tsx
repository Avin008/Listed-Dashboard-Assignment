import Image from "next/image";
import Searchbar from "./Searchbar";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <span>
        <h1 className="font-sans text-[24px] font-bold">Dashboard</h1>
      </span>
      <ul className="flex items-center gap-5 pr-6">
        <li>
          <Searchbar />
        </li>
        <li>notification</li>
        <li>user</li>
      </ul>
    </nav>
  );
};

export default Navbar;

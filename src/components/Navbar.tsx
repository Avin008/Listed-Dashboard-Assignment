import Image from "next/image";
import Searchbar from "./Searchbar";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <span>
        <h1 className="font-sans text-[24px] font-bold">Dashboard</h1>
      </span>
      <ul className="flex items-center gap-8 pr-6">
        <li>
          <Searchbar />
        </li>
        <li>
          <Image src="/bell.png" alt="" width={18} height={20} />
        </li>
        <li>
          <Image
            className="rounded-full"
            src="/profile.png"
            alt=""
            width={35}
            height={35}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

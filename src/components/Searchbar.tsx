import Image from "next/image";

const Searchbar = () => {
  return (
    <div className="flex h-[30px] w-[180px] items-center rounded-md bg-[#FFFFFF]">
      <input
        className="h-full w-[90%] border-none bg-transparent px-4 font-mono text-[14px] text-[#B0B0B0] outline-none"
        type="text"
        placeholder="Search..."
      />
      <div className="flex items-center justify-center">
        <Image src="/search-icon.png" alt="" width={12} height={12} />
      </div>
    </div>
  );
};

export default Searchbar;

"use client";

import Image from "next/image";
import { signOut } from "next-auth/react";
const Sidebar = () => {
  return (
    <aside className="flex flex-col justify-between space-y-5 px-[50px]">
      <h1 className="mt-[60px] font-sans text-[36px] font-bold text-white">
        Board.
      </h1>
      <ul className="flex flex-col gap-6 font-sans text-white">
        <li className="flex gap-3 font-bold">
          <Image
            className="object-contain"
            src="/dashboard.png"
            alt=""
            height={15}
            width={15}
          />{" "}
          Dashboard
        </li>
        <li className="flex gap-3">
          <Image
            className="object-contain"
            src="/transaction.png"
            alt=""
            height={15}
            width={15}
          />{" "}
          Transactions
        </li>
        <li className="flex gap-3">
          <Image
            className="object-contain"
            src="/schedule.png"
            alt=""
            height={15}
            width={15}
          />{" "}
          Schedules
        </li>
        <li className="flex gap-3">
          <Image
            className="object-contain"
            src="/user.png"
            alt=""
            height={15}
            width={15}
          />{" "}
          Users
        </li>
        <li className="flex gap-3">
          <Image
            className="object-contain"
            src="/setting.png"
            alt=""
            height={15}
            width={15}
          />{" "}
          Settings
        </li>
        <li
          onClick={() => signOut()}
          className="flex gap-3 font-bold text-red-500 hover:cursor-pointer hover:text-red-700 active:text-red-800"
        >
          <Image
            className="object-contain"
            src="/user.png"
            alt=""
            height={15}
            width={15}
          />{" "}
          Logout
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;

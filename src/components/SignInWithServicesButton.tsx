"use client";
import Image from "next/image";
import { signIn, signOut } from "next-auth/react";

const SignInWithServicesButton = ({
  icon,
  text,
}: {
  icon: string;
  text: string;
}) => {
  return (
    <button
      onClick={() => signIn()}
      className="flex h-[30px] w-fit items-center gap-2 rounded-[10px] bg-[#FFFFFF] px-4 font-sans text-[12px] text-[#858585]"
    >
      <Image src={icon} alt={text} height={10} width={10} /> {text}
    </button>
  );
};

export default SignInWithServicesButton;

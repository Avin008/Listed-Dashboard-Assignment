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
      onClick={() => {
        if (text === "Sign in with Google") {
          signIn("google", {
            callbackUrl: `${process.env.NEXT_PUBLIC_NEXT_AUTH_URL}/dashboard`,
          });
        }
      }}
      className="flex h-[30px] w-fit transform items-center gap-2 rounded-[10px] bg-[#FFFFFF] px-4 font-sans text-[12px] text-[#858585] transition-transform hover:scale-105 hover:text-gray-900 hover:shadow-sm active:bg-[#efefef]"
    >
      <Image src={icon} alt={text} height={10} width={10} /> {text}
    </button>
  );
};

export default SignInWithServicesButton;

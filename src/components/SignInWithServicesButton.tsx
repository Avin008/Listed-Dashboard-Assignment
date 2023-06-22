import Image from "next/image";

const SignInWithServicesButton = ({
  icon,
  text,
}: {
  icon: string;
  text: string;
}) => {
  return (
    <button className="flex h-[30px] w-fit items-center gap-2 rounded-[10px] bg-[#FFFFFF] px-4 text-[12px] text-[#858585]">
      <Image src={icon} alt={text} height={10} width={10} /> {text}
    </button>
  );
};

export default SignInWithServicesButton;

import Image from "next/image";

const Card = ({
  data,
}: {
  data: { id: number; title: string; icon: string; data: string };
}) => {
  return (
    <div
      className={`h-[120px] w-[221px] rounded-md ${
        data.id === 1 && "bg-[#DDEFE0]"
      } ${data.id === 2 && "bg-[#F4ECDD]"}
      ${data.id === 3 && "bg-[#EFDADA]"}
      ${data.id === 4 && "bg-[#DEE0EF]"}
      p-3`}
    >
      <div className="flex justify-end">
        <Image
          className="object-contain"
          src={data.icon}
          alt={data.title}
          width={20}
          height={20}
        />
      </div>
      <p className="font-mono text-[14px]">{data.title}</p>
      <h4 className="font-mono text-[24px] font-bold">{data.data}</h4>
    </div>
  );
};

export default Card;

import Image from "next/image";
import { CardProps } from "../../types";

const applyCardBg = (id: number) => {
  if (id === 1) {
    return "bg-[#DDEFE0]";
  } else if (id === 2) {
    return "bg-[#F4ECDD]";
  } else if (id === 3) {
    return "bg-[#EFDADA]";
  } else {
    return "bg-[#DEE0EF]";
  }
};

const StatsCard = ({ cardData }: { cardData: CardProps }) => {
  return (
    <div className={`h-[120px] w-[221px] rounded-2xl ${applyCardBg}`}>
      <div className="flex justify-end">
        <Image
          className="object-contain"
          src={cardData.icon}
          alt={cardData.title}
          width={20}
          height={20}
        />
      </div>
      <div className="p-2">
        <p className="font-mono text-[14px]">{cardData.title}</p>
        <h4 className="font-serif text-[24px] font-bold">{cardData.data}</h4>
      </div>
    </div>
  );
};

export default StatsCard;

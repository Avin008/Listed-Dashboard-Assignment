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

const Card = ({ cardData }: { cardData: CardProps }) => {
  return (
    <div
      className={`h-[120px] w-[221px] rounded-2xl p-3 
    ${cardData.id === 1 && "bg-[#DDEFE0]"}
    ${cardData.id === 2 && "bg-[#F4ECDD]"}
    ${cardData.id === 3 && "bg-[#EFDADA]"}
    ${cardData.id === 4 && "bg-[#DEE0EF]"}
    `}
    >
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

export default Card;

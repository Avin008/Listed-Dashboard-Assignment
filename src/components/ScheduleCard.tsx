import { scheduleCardPropsType } from "../../types";

const ScheduleCard = ({ cardData }: { cardData: scheduleCardPropsType[] }) => {
  return (
    <div className="h-[259px] space-y-4 rounded-2xl bg-white px-[40px] py-[30px]">
      <div className="flex justify-between">
        <h1 className="font-sans text-[18px] font-bold">Today’s schedule</h1>
        <button className="font-sans text-[12px] text-[#858585]">
          See All
        </button>
      </div>
      <div className="flex flex-col gap-5">
        {cardData.map((scheduleData) => (
          <div
            key={scheduleData.id}
            className={`border-l-4 ${
              scheduleData.id === 1 ? "border-[#9BDD7C]" : "border-[#6972C3]"
            }  px-3`}
          >
            <h1 className="font-mono text-[14px] font-bold text-[#666666]">
              {scheduleData.title}
            </h1>
            <p className="text-[12px] text-[#999999]">{scheduleData.time}</p>
            <p className="text-[12px] text-[#999999]">{scheduleData.place}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleCard;

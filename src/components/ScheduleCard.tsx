const ScheduleCard = () => {
  return (
    <div className="h-[259px] space-y-4 rounded-2xl bg-white px-[40px] py-[30px]">
      <div className="flex justify-between">
        <h1 className="font-sans text-[18px] font-bold">Today’s schedule</h1>
        <button className="font-sans text-[12px] text-[#858585]">
          See All
        </button>
      </div>
      <div className="flex flex-col gap-5">
        <div className="border-l-4 border-[#9BDD7C] px-3">
          <h1 className="font-mono text-[14px] font-bold text-[#666666]">
            Meeting with suppliers from Kuta Bali
          </h1>
          <p className="text-[12px] text-[#999999]">14.00-15.00</p>
          <p className="text-[12px] text-[#999999]">
            at Sunset Road, Kuta, Bali{" "}
          </p>
        </div>
        <div className="border-l-4 border-[#6972C3] px-3">
          <h1 className="font-mono text-[14px] font-bold text-[#666666]">
            Meeting with suppliers from Kuta Bali
          </h1>
          <p className="text-[12px] text-[#999999]">14.00-15.00</p>
          <p className="text-[12px] text-[#999999]">
            at Sunset Road, Kuta, Bali{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCard;

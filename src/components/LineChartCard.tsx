import LineChart from "./LineChart";

const LineChartCard = ({ data }: { data: any }) => {
  return (
    <div className="h-fit rounded-2xl bg-white px-[40px] py-[30px]">
      <div className="">
        <h2 className="font-sans text-[18px] font-bold">Activities</h2>
        <select
          className="font-sans text-[14px] text-[#858585]"
          name="data-selector"
        >
          <option value="">May - June 2021</option>
        </select>
      </div>
      <div>
        <LineChart data={data} />
      </div>
    </div>
  );
};

export default LineChartCard;

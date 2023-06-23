import { lineGraphData } from "../../data";
import PieChart from "./PieChart";

const PieChartCard = () => {
  return (
    <div className="h-[256px] rounded-2xl bg-white px-[40px] py-[30px]">
      <div className="flex justify-between">
        <h2 className="font-sans text-[18px] font-bold">Top Products</h2>
        <select
          className="font-sans text-[12px] text-[#858585]"
          name="data-selector"
        >
          <option value="">May - June 2021</option>
        </select>
      </div>
      <div className="">
        <PieChart data={lineGraphData} />
      </div>
    </div>
  );
};

export default PieChartCard;

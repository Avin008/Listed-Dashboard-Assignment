import { Card, LineChartCard, Navbar } from "@/components";
import { lineGraphData, cardData } from "../../../data";

const DashboardPage = () => {
  return (
    <div className="mx-auto mt-[35px] w-[95%] space-y-5">
      <Navbar />
      <div className="mt-[40px] grid grid-cols-4 gap-6">
        {cardData.map((x) => (
          <Card data={x} />
        ))}
      </div>
      <LineChartCard data={lineGraphData} />
    </div>
  );
};

export default DashboardPage;

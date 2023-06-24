import {
  StatsCard,
  LineChartCard,
  Navbar,
  PieChartCard,
  ScheduleCard,
} from "@/components";
import { lineGraphData, cardData, scheduleData } from "../../../data";

const DashboardPage = () => {
  return (
    <div className="mx-auto mt-[25px] w-[95%] space-y-5">
      <Navbar />
      <div className="mt-[40px] grid gap-6 x_sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {cardData.map((x) => (
          <StatsCard key={x.id} cardData={x} />
        ))}
      </div>
      <LineChartCard data={lineGraphData} />
      <div className="grid gap-8 sm:grid-cols-1 xl:grid-cols-2">
        <PieChartCard />
        <ScheduleCard data={scheduleData} />
      </div>
    </div>
  );
};

export default DashboardPage;

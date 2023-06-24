import {
  StatsCard,
  LineChartCard,
  Navbar,
  PieChartCard,
  ScheduleCard,
} from "@/components";
import { lineGraphData, StatsCardData, scheduleCardData } from "../../../data";

const DashboardPage = () => {
  return (
    <div className="mx-auto mt-[25px] w-[95%] space-y-5">
      <Navbar />
      <div className="mt-[40px] grid gap-6 x_sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {StatsCardData.map((cardData) => (
          <StatsCard key={cardData.id} cardData={cardData} />
        ))}
      </div>
      <LineChartCard data={lineGraphData} />
      <div className="grid gap-8 sm:grid-cols-1 xl:grid-cols-2">
        <PieChartCard />
        <ScheduleCard cardData={scheduleCardData} />
      </div>
    </div>
  );
};

export default DashboardPage;

import {
  Card,
  LineChartCard,
  Navbar,
  PieChartCard,
  ScheduleCard,
} from "@/components";
import { lineGraphData, cardData } from "../../../data";

const DashboardPage = () => {
  return (
    <div className="mx-auto mt-[35px] w-[95%] space-y-5">
      <Navbar />
      <div className="mt-[40px] grid gap-6 x_sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {cardData.map((x) => (
          <Card data={x} />
        ))}
      </div>
      <LineChartCard data={lineGraphData} />
      <div className="grid gap-8 sm:grid-cols-1 xl:grid-cols-2">
        <PieChartCard />
        <ScheduleCard
          data={[
            {
              id: 1,
              title: "Meeting with suppliers from Kuta Bali",
              time: "14.00-15.00",
              place: "at Sunset Road, Kuta, Bali ",
            },
            {
              id: 2,
              title: "Check operation at Giga Factory 1",
              time: "18.00-20.00",
              place: "at Central Jakarta",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default DashboardPage;

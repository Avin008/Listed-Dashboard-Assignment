"use client";

import {
  StatsCard,
  LineChartCard,
  Navbar,
  PieChartCard,
  ScheduleCard,
} from "@/components";
import { useEffect, useState } from "react";
import {
  CardPropsType,
  LineGraphDataPropsType,
  scheduleCardPropsType,
} from "../../../types";
import { lineGraphData } from "../../../data";

const DashboardPage = () => {
  const [StatsCardData, setStatsData] = useState<CardPropsType[]>([]);
  const [scheduleData, setScheduleData] = useState<scheduleCardPropsType[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/stats?select=*`, {
      headers: {
        "Context-Type": "application/json",
        apiKey: `${process.env.NEXT_PUBLIC_SUPABASE_API_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setStatsData(data);
      });

    fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/schedule?select=*`, {
      headers: {
        "Context-Type": "application/json",
        apiKey: `${process.env.NEXT_PUBLIC_SUPABASE_API_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setScheduleData(data);
      });
  }, []);

  return (
    <div className="mx-auto mt-[25px] w-[95%] space-y-5">
      <Navbar />
      <div className="mt-[40px] grid gap-6 x_sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {StatsCardData?.map((cardData) => (
          <StatsCard key={cardData.id} cardData={cardData} />
        ))}
      </div>
      <LineChartCard data={lineGraphData} />
      <div className="grid gap-8 sm:grid-cols-1 xl:grid-cols-2">
        <PieChartCard />
        <ScheduleCard cardData={scheduleData} />
      </div>
    </div>
  );
};

export default DashboardPage;

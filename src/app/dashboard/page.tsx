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
  PieChartType,
} from "../../../types";

const DashboardPage = () => {
  const [StatsCardData, setStatsData] = useState<CardPropsType[]>([]);
  const [scheduleData, setScheduleData] = useState<scheduleCardPropsType[]>([]);
  const [lineChartData, setLineChartData] = useState<LineGraphDataPropsType[]>(
    []
  );
  const [pieChartData, setPieChartData] = useState<PieChartType[]>([]);

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

    fetch(
      `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/line-chart?select=*`,
      {
        headers: {
          "Context-Type": "application/json",
          apiKey: `${process.env.NEXT_PUBLIC_SUPABASE_API_KEY}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setLineChartData(data);
      });

    fetch(
      `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/pie-chart?select=*`,
      {
        headers: {
          "Context-Type": "application/json",
          apiKey: `${process.env.NEXT_PUBLIC_SUPABASE_API_KEY}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setPieChartData(data);
      });
  }, []);

  return (
    <div className="mx-auto mt-[25px] w-[95%] space-y-5">
      <Navbar />
      {StatsCardData.length > 0 && (
        <div className="mt-[40px] grid gap-6 x_sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {StatsCardData?.map((cardData) => (
            <StatsCard key={cardData.id} cardData={cardData} />
          ))}
        </div>
      )}
      {lineChartData.length > 0 && <LineChartCard data={lineChartData} />}
      <div className="grid gap-8 sm:grid-cols-1 xl:grid-cols-2">
        {pieChartData.length > 0 && <PieChartCard data={pieChartData} />}
        {scheduleData.length > 0 && <ScheduleCard cardData={scheduleData} />}
      </div>
    </div>
  );
};

export default DashboardPage;

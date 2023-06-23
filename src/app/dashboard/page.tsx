import { Card, LineChart, Navbar } from "@/components";

const data = [
  { id: 1, icon: "/camera.png", title: "Total Revenues", data: "$2,129,430" },
  {
    id: 2,
    icon: "/total-transaction.png",
    title: "Total Transactions",
    data: "1,520",
  },
  { id: 3, icon: "/likes.png", title: "Total Likes", data: "9,721" },
  { id: 4, icon: "/users.png", title: "Total Users", data: "892" },
];

const dummyData = [
  { id: 1, year: 2018, userGained: 100, userLost: 50 },
  { id: 2, year: 2019, userGained: 150, userLost: 75 },
  { id: 3, year: 2020, userGained: 200, userLost: 100 },
  { id: 4, year: 2021, userGained: 250, userLost: 125 },
  { id: 5, year: 2022, userGained: 300, userLost: 150 },
];

const DashboardPage = () => {
  return (
    <div className="mx-auto mt-[35px] w-[95%] space-y-5">
      <Navbar />
      <div className="mt-[40px] grid grid-cols-4 gap-6">
        {data.map((x) => (
          <Card data={x} />
        ))}
      </div>
      <div className="h-[359px] rounded-2xl bg-white p-2">
        <LineChart data={dummyData} />
      </div>
    </div>
  );
};

export default DashboardPage;

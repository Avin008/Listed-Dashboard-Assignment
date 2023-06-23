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
  { id: 1, year: "Week 1", userGained: 100 },
  { id: 2, year: "Week 2", userGained: 200 },
  { id: 3, year: "Week 3", userGained: 50 },
  { id: 4, year: "Week 4", userGained: 500 },
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
        <LineChart data={dummyData} />
      </div>
    </div>
  );
};

export default DashboardPage;

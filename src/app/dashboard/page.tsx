import { Card, Navbar } from "@/components";

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

const DashboardPage = () => {
  return (
    <div className="mt-[60px]">
      <Navbar />
      <div className="mt-[40px] grid grid-cols-4">
        {data.map((x) => (
          <Card data={x} />
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;

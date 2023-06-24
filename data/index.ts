import {
  CardPropsType,
  LineGraphDataPropsType,
  scheduleCardPropsType,
} from "../types";

export const StatsCardData: CardPropsType[] = [
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

export const lineGraphData: LineGraphDataPropsType[] = [
  { id: 1, year: "Week 1", userGained: 100, userLost: 200 },
  { id: 2, year: "Week 2", userGained: 400, userLost: 320 },
  { id: 3, year: "Week 3", userGained: 250, userLost: 460 },
  { id: 4, year: "Week 4", userGained: 420, userLost: 480 },
];

export const scheduleCardData: scheduleCardPropsType[] = [
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
];

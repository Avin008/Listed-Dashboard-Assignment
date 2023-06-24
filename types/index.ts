export type CardPropsType = {
  id: number;
  title: string;
  icon: string;
  data: string;
};

export type LineGraphDataPropsType = {
  id: number;
  year: string;
  userGained: number;
  userLost: number;
};

export type scheduleCardPropsType = {
  id: number;
  title: string;
  time: string;
  place: string;
};

export type PieChartType = {
  id: string;
  label: string;
  data: number;
};

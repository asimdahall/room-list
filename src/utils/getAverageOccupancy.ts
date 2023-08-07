import { generateOccupancyData } from "./generateOccupancyData";

const data = generateOccupancyData();

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;

export const suitetypes = ["Standard", "Deluxe", "Suite"] as const;

const getDayOfWeek = (dateString: string): string => {
  const date = new Date(dateString);

  const dayOfWeek = daysOfWeek[date.getDay()];
  return dayOfWeek;
};

const getParsedDataWithDay = (data: ReturnType<typeof generateOccupancyData>) =>
  data.map((cData) => ({
    ...cData,
    day: getDayOfWeek(cData.date),
  }));

const getAverageData = (data: ReturnType<typeof getParsedDataWithDay>) => {
  return suitetypes.reduce((acc, cur) => {
    const percentagevalues = data.map<number>((d) => {
      return d?.[cur];
    });

    const averageData =
      percentagevalues?.reduce((acc, cur) => acc + cur, 0) /
      percentagevalues.length;

    return { ...acc, [cur]: averageData };
  }, {});
};

export const getAverageOccupancy = (
  data: ReturnType<typeof generateOccupancyData>
) => {
  return daysOfWeek.reduce((acc, day) => {
    const parsedDataWithDay = getParsedDataWithDay(data);
    const occupancyDataByDays = parsedDataWithDay.filter((c) => c.day === day);
    const averageData = getAverageData(occupancyDataByDays);
    return [...acc, { day, ...averageData }];
  }, [] as any) as Array<{
    [a in (typeof suitetypes)[number]]: string;
  }>;
};

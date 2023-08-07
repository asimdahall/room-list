import Header from "../components/Header";
import OccupancyChart from "../charts/LineChart";
import { getAverageOccupancy } from "../utils/getAverageOccupancy";
import { generateOccupancyData } from "../utils/generateOccupancyData";
import { Tooltip } from "react-tooltip";
import { Area, Legend } from "recharts";

const Occupancy = () => {
  return (
    <div className="flex-1 flex flex-col">
      <Header text="Occupancy" />
      <div className="h-96 m-4 text-white">
        <OccupancyChart
          averageOccupancy={getAverageOccupancy(generateOccupancyData())}
        />
        <div className="mt-14 text-center font-mono text-lg">
          The chart above demonstrates the occupancy percentage of the
          rooms throughout a week.
        </div>
      </div>
    </div>
  );
};

export default Occupancy;

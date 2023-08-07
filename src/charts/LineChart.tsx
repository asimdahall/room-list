import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { getAverageOccupancy } from "../utils/getAverageOccupancy";

type Props = {
  averageOccupancy: ReturnType<typeof getAverageOccupancy>;
};

const OccupancyChart = (props: Props) => {
  return (
    <ResponsiveContainer>
      <LineChart data={props.averageOccupancy}>
        <XAxis
          dataKey="day"
          tickFormatter={(props) => {
            return props.substring(0, 3);
          }}
          stroke="white"
          tickMargin={10}
        />
        <YAxis stroke="white" />
        <Line type="monotone" dataKey="Standard" stroke="red" />
        <Line type="monotone" dataKey="Deluxe" stroke="blue" />
        <Line type="monotone" dataKey="Suite" stroke="green" />
        <Tooltip formatter={(value, name) => [`${value} %`, name]} />
        <Legend
          margin={{
            top: 40,
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default OccupancyChart;

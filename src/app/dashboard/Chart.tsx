import React from "react";
import { Label, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { ISale } from "../../structs/sales";
import { getSales } from "../api";
import Title from "./Title";

export default function Chart() {
  const [data, setData] = React.useState<ISale[]>([]);
  React.useEffect(() => {
    getSales().then(setData);
  }, []);

  return (
    <React.Fragment>
      <Title>Today</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            bottom: 0,
            left: 24,
            right: 16,
            top: 16,
          }}
        >
          <XAxis dataKey="time" />
          <YAxis>
            <Label angle={270} position="left" style={{ textAnchor: "middle" }}>
              Sales ($)
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke="#556CD6" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}

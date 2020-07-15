import React, { useEffect, useState } from "react";
import { getDailyData } from "../api/api";
import { Line } from "react-chartjs-2";

const LineChartDiagram = () => {
  const [dailyData, setDailyData] = useState([]);
  const getData = async () => {
    const result = await getDailyData();
    setDailyData(result);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="lineDiagram">
      <Line
        data={{
          labels: dailyData.map(data => data.reportDate),
          datasets: [
            {
              data: dailyData.map(data => data.confirmed),
              label: "Confirmed",
              borderColor: "rgba(0, 0, 255, 0.5)"
            },
            {
              data: dailyData.map(data => data.deaths),
              label: "Deaths",
              borderColor: "rgba(255, 0, 0, 0.8)"
            }
          ]
        }}
      />
    </div>
  );
};

export default LineChartDiagram;

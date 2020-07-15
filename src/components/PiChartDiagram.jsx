import React from "react";
import { Pie } from "react-chartjs-2";

const PiChartDiagram = ({ confirmed, recovered, deaths }) => {
  return (
    <div className="pieDiagram">
      <Pie
        data={{
          labels: ["Confirmed", "Recovered", "Deaths"],
          datasets: [
            {
              data: [confirmed, recovered, deaths],
              backgroundColor: [
                "rgba(0, 0, 255, 0.5)",
                "rgba(0, 128, 0, 1)",
                "rgba(255, 0, 0, 0.8)"
              ]
            }
          ]
        }}
      />
    </div>
  );
};

export default PiChartDiagram;

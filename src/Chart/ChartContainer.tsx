import { ChartData } from "chart.js/auto";
import React, { useEffect, useRef, useState } from "react";
import { Chart, Line, Bar, Doughnut, Pie, Scatter } from "react-chartjs-2";
import styled from "styled-components";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      width: "400px",
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
    },
    {
      label: "Second dataset",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#742774",
    },
  ],
};

const doughData = {
  labels: ["Red", "Blue", "Yelloe"],
  datasets: [
    {
      label: "test label",
      data: [3, 3, 3],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
};

const ChartContainer = () => {
  const [barDatas, setBarDatas] = useState<number[]>([10, 5, 34, 100, 75, 33]);
  const [secondData, setSecondData] = useState<number[]>([
    53, 13, 100, 31, 64, 85,
  ]);
  const [thirdData, setThirdData] = useState<number[]>([
    75, 33, 22, 11, 66, 88,
  ]);

  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "노출수",
        data: barDatas,
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
      {
        label: "클릭수",
        data: thirdData,
        fill: true,
        backgroundColor: "#a411b133",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  const testClick = (num: number[]) => {
    setBarDatas(num);
  };

  const thirdTest = (num: number[]) => {
    setThirdData(num);
  };

  console.log(barDatas);

  return (
    <Test>
      <div style={{ width: "1000px", border: "1px solid red" }}>
        <Bar data={barData} height={100} />
        <div onClick={() => testClick([20, 36, 33, 70, 90, 14])}>
          first click
        </div>
        <div onClick={() => thirdTest([10, 55, 83, 100, 10, 84])}>
          third click
        </div>
      </div>
      <Doughnut data={doughData} />
      <PieTest data={doughData} width={20} height={20} />
    </Test>
  );
};

export default ChartContainer;

const Test = styled.div`
  width: 200px;
  height: 200px;
`;

const PieTest = styled(Pie)`
  width: 100px;
  height: 100px;
`;

import React, { useState } from "react";
import { Line } from "react-chartjs-2";

const LineContainer = () => {
  const [label, setLabel] = useState<string>("첫째주");
  const [firstData, setFirstData] = useState<number[]>([
    10, 33, 71, 50, 66, 27, 13,
  ]);

  const data = {
    labels: [
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일",
      "일요일",
    ],
    datasets: [
      {
        axis: "y",
        label,
        data: firstData,
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.2,
      },
    ],
  };

  const click = (string: string, num: number[]) => {
    setFirstData(num);
    setLabel(string);
  };

  return (
    <div style={{ width: "800px" }}>
      <Line data={data} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "0 30px",
          marginTop: "30px",
        }}
      >
        <div onClick={() => click("첫째주", [10, 33, 71, 50, 66, 27, 13])}>
          첫째주
        </div>
        <div onClick={() => click("둘째주", [10, 88, 47, 20, 100, 20, 64])}>
          둘째주
        </div>
        <div onClick={() => click("셋째주", [60, 13, 31, 5, 16, 70, 32])}>
          셋째주
        </div>
        <div onClick={() => click("넷째주", [30, 76, 33, 27, 36, 90, 20])}>
          넷째주
        </div>
      </div>
    </div>
  );
};

export default LineContainer;

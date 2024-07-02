import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";
import { Calendar, ChevronRight } from "lucide-react";
import { Flex, Text } from "@radix-ui/themes";
function TaskCompletedCharts() {
  const option = {
    title: {},
    chart: {
      height: 200,
      type: "area",
      width: 200,
    },
    color: ["#038EE2", "#57D974"],
    tooltip: {
      trigger: "axis",
    },

    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },

    xAxis: {
      type: "category",
      boundaryGap: true,
      data: ["25 Mar", "26 Mar", "27 Mar", "28 Mar", "29 Mar"],
      axisLine: {
        show: true,
        lineStyle: {
          color: "#ECECEC",
        },
      },
    },
    yAxis: {
      type: "value",

      splitLine: {
        show: false,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#ECECEC",
        },
      },
    },
    series: [
      {
        name: "Completed",
        type: "line",
        stack: "Total",
        data: [20, 18, 50, 61, 55],
        lineStyle: {
          width: 1,
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(4, 169, 254, 0.69)",
            },
            {
              offset: 1,
              color: "rgba(191, 225, 242, 0)",
            },
          ]),
        },
        symbolSize: 5,
      },
      {
        name: "On Time",
        type: "line",
        stack: "Total",
        data: [3, 35, 10, 18, 38],
        lineStyle: {
          width: 1,
        },
        symbolSize: 5,
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(208, 247, 216, 1)",
            },
            {
              offset: 1,
              color: "rgba(255, 255, 255, 1)",
            },
          ]),
        },
      },
    ],
  };
  return (
    <div className="w-full relative border bg-white h-[324px] py-[20px]  rounded-[20px]">
      <div className="absolute flex justify-between w-full  px-5 ">
        <h1 className="text-[#2D2C37] font-semibold text-[16px] ">
          Task Completed (%)
        </h1>
        <div className="flex gap-4 items-center ">
          <div className="flex gap-2 items-center">
            <div
              className={` bg-[#0CA866] rounded-full w-[7px] h-[7px] `}
            ></div>
            <p className="text-[#83828B] text-[12px] ">Completed</p>
          </div>
          <div className="flex gap-2 items-center">
            <div
              className={` bg-[#038EE2] rounded-full w-[7px] h-[7px] `}
            ></div>
            <p className="text-[#83828B] text-[12px] ">On Time</p>
          </div>

          <Flex
            align="center"
            gap="2"
            className="bg-[#F3F4F6] py-1 px-2 rounded-[10px]"
          >
            <Calendar size={14} />
            <Text as="span" className="text-[12px]  font-normal">
              This week Trend
            </Text>
            <ChevronRight size={14} />
          </Flex>
        </div>
      </div>
      <ReactECharts option={option} style={{ width: "100%" }} />
    </div>
  );
}

export default TaskCompletedCharts;

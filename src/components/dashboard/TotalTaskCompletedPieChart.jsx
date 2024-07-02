import { Box, Callout, Flex, Text } from "@radix-ui/themes";
import { Calendar, ChevronRight, MoveUpRight } from "lucide-react";
import { PieChart } from "react-minimal-pie-chart";
function TotalTaskCompletedPieChart() {
  const data = [
    { title: "Upcoming", value: 5, color: "#9397F6" },
    { title: "Completed", value: 40, color: "#0CA866" },
    { title: "Due today", value: 20, color: "#E0BF10" },
    {
      title: "Overdue",
      value: 5,
      color: "#D72727",
    },
  ];
  return (
    <Box width="373px" height="324px" className=" p-5 rounded-2xl bg-white">
      <Flex align="center" justify="between">
        <Text as="p" className="text-[#2D2C37]  text-[16px] font-semibold">
          Total Tasks Completed
        </Text>
        <Flex
          align="center"
          gap="1"
          className="bg-[#F3F4F6] py-1 px-2 rounded-[10px]"
        >
          <Calendar size={14} />
          <Text as="span" className="text-[12px]  font-normal">
            This week Trend
          </Text>
          <ChevronRight size={14} />
        </Flex>
      </Flex>
      <Box pt="4">
        <Callout.Root size="1" className="bg-[#EEFDF1]  flex justify-center ">
          <Callout.Icon>
            <MoveUpRight
              className="bg-[#D0F2D7] text-[#0CA866]  rounded-full p-1"
              size={23}
            />
          </Callout.Icon>
          <Callout.Text className="text-[#5B5967] text-[12px]">
            <span className="text-[#0CA866] font-semibold ">Up 4%</span> from
            previous week
          </Callout.Text>
        </Callout.Root>
      </Box>
      <Flex gap="5" className="mt-5  ms-2 ">
        <Box className="relative">
          <PieChart
            data={data}
            rounded={true}
            lineWidth={20}
            paddingAngle={13}
            className="w-[168px]"
          />
          <Text
            as="div"
            className="absolute top-[57px] left-[55px] flex flex-col justify-center items-center"
          >
            <span className="text-[18px] text-[#2D2C37] font-semibold">
              45%
            </span>
            <span className="text-[#5B5967] text-[12px]"> completed</span>
          </Text>
        </Box>
        <Box className="my-auto flex flex-col gap-2">
          {data?.map((ele, index) => (
            <Flex key={index} className="gap-[4px] flex " align="center">
              <div
                style={{ backgroundColor: ele.color }}
                className={` rounded-full w-[7px] h-[7px] `}
              ></div>
              <Text as="div" className="text-[#5B5967] font-semibold text-[12px] ">{ele.value}/52</Text>
              <Text as="div"  className="text-[#5B5967] font-normal text-[12px] ">{ele.title}</Text>
            </Flex>
          ))}
        </Box>
      </Flex>
    </Box>
  );
}

export default TotalTaskCompletedPieChart;

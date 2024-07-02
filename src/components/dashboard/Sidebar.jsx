import { Badge, Box, Button, Flex, Text } from "@radix-ui/themes";

import { RxDashboard } from "react-icons/rx";
import { PiTriangleDashedLight } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegFileLines } from "react-icons/fa6";
import { SlidersHorizontal } from "lucide-react";
import { LifeBuoy } from "lucide-react";
import { ChevronRight } from "lucide-react";
function Sidebar() {
  const sideNavData = [
    {
      name: "Tasks",
      icon: RxDashboard,
      status: true,
      nested: false,
      beta: false,
    },
    {
      name: "Process",
      icon: PiTriangleDashedLight,
      status: false,
      nested: true,
      beta: false,
    },
    {
      name: "Smart Insights",
      icon: IoSearchOutline,
      status: false,
      nested: true,
      beta: false,
    },
    {
      name: "Projects",
      icon: FaRegFileLines,
      status: false,
      nested: false,
      beta: true,
    },
    {
      name: "Settings",
      icon: SlidersHorizontal,
      status: false,
      nested: false,
      beta: false,
    },
    {
      name: "Help",
      icon: LifeBuoy,
      status: false,
      nested: false,
      beta: false,
    },
  ];
  return (
    <Flex
      direction={"column"}
      gap="6"
      pt={"5"}
      className="   w-[227px]  rounded-[20px] h-[100%] bg-[#ffffff] "
    >
      <div className="px-[18px]">
        <img src="logo2.png" alt="wef" />
      </div>
      <Flex direction="column" justify="between" className=" h-full  ">
        <Flex
          direction="column"
          gap="2"
          className="w-full  text-[14px] text-[#5B5967] flex-col  px-3"
        >
          {sideNavData.map((ele, index) => (
            <div
              key={index}
              className={`flex ${
                ele.status && "bg-[#D4EFFF] font-semibold text-[#038EE2]"
              } py-[10px]  items-center justify-between  px-4 rounded-lg hover:bg-[#D4EFFF] hover:font-semibold hover:text-[#038EE2] `}
            >
              <div className="gap-3  flex items-center">
                <ele.icon size={16} className="font-semibold" />
                <p>{ele.name}</p>
                {ele?.beta && (
                <Badge
                  variant="solid"
                  radius="full"
                  className="bg-[#D0F2D7] text-[#5B5967] px-[6px] py-[3px] text-[12px] "
                >
                  Beta
                </Badge>
              )}
              </div>
              {ele?.nested && (
                <i className="text-[#2D2C37]">
                  <ChevronRight size={11} />
                </i>
              )}
              
            </div>
          ))}
        </Flex>
        <Flex
          direction="column"
          gap="3"
          width="full"
          className="px-4 text-[#5B5967] py-3"
        >
          <Flex direction="row" justify="between">
            <Text as="p" className="font-semibold">
              {" "}
              Trial Plan{" "}
            </Text>
            <Text as="p" className="font-normal">
              8/15 days left
            </Text>
          </Flex>

          <Box
            className="w-full h-[3px] rounded-[7px]"
            style={{
              background:
                "linear-gradient(89.99deg, #2B9442 0.01%, #EF3737 41.81%, #C9C9C9 44.54%)",
            }}
          ></Box>
          <Button className="bg-[#EFF9FF] rounded-lg px-3 py-1  font-semibold text-[#038EE2]">
            Upgrade Your Plan
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Sidebar;

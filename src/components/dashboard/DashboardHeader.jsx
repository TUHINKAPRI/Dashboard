import { Avatar, Box, Button, Flex, Text } from "@radix-ui/themes";
import { Plus } from "lucide-react";
import { Bell } from "lucide-react";
import { ChevronDown } from "lucide-react";
function DashboardHeader() {
  return (
    <Flex
      direction="row"
      justify="between"
      align="center"
      className="py-2 "
    >
      <Text className="text-[22px] font-semibold text-[#2D2C37]">
        DashBoard
      </Text>
      <Box>
        <Flex align="center" gap="4">
          <Button className="text-white h-[36px] py-3 px-3 text-[14px] rounded-lg bg-[#038EE2]">
            Add Task
            <span>
              <Plus size={20} />
            </span>
          </Button>
          <Bell className="text-[#5B5967]" size={23} />
          <img src="notification.png" alt="Noti"></img>
          <Flex gap="1" justify="center" align="center">
            <Avatar radius="full" fallback="A" />
            <ChevronDown size={14} />
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}

export default DashboardHeader;

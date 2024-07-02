import { Box, Flex } from "@radix-ui/themes";
import DashboardHeader from "../../components/dashboard/DashboardHeader";
import Sidebar from "../../components/dashboard/Sidebar";
import TotalTaskCompletedPieChart from "../../components/dashboard/TotalTaskCompletedPieChart";
import TaskCompletedCharts from "../../components/dashboard/TaskCompletedCharts";
import Tasks from "../../components/dashboard/Tasks";
import TasksLists from "../../components/dashboard/TasksLists";

function Dashboard() {
  return (
    <Flex className="flex w-full h-[100%] ">
      <Box className="  h-[100%] ">
        <Sidebar />
      </Box>
      <Box className="  px-6 w-full overflow-auto ">
        <DashboardHeader />
        <Box className="   py-4 flex   gap-[20px]">
          <TotalTaskCompletedPieChart />
          <div className="w-[660px]">
            <TaskCompletedCharts />
          </div>
        </Box>
        <Box>
          <Tasks />
          <TasksLists />
        </Box>
      </Box>
    </Flex>
  );
}

export default Dashboard;

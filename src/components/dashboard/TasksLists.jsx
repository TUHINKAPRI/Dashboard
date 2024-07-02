

import { ChevronsUp } from "lucide-react";
import { Avatar } from "@radix-ui/themes";
import Pagination from "../common/pagination/Pagination";
const tasks = [
  {
    task: "Clapglow support session with Harsh from Jindal medical store",
    status: "Completed",
    priority: "High",
    dueDate: "25 Mar, 2024, 12:00 PM",
    assignee: {
      name: "DL",
      image: "assignee1.jpg",
    },
    assignedTo: {
      name: "DL",
      image: "assignedTo1.jpg",
    },
    actions: "complete",
  },
  {
    task: "Inventory statement check (COGS)",
    status: "Overdue",
    priority: "High",
    dueDate: "25 Mar, 2024, 12:00 PM",
    assignee: {
      name: "GS",
      image: "assignee2.jpg",
    },
    assignedTo: {
      name: "GS",
      image: "assignedTo2.jpg",
    },
    actions: "incomplete",
  },
  {
    task: "Order visiting cards for Jitendra Saria & Kailash Sharma",
    status: "Overdue",
    priority: "High",
    dueDate: "25 Mar, 2024, 12:00 PM",
    assignee: {
      name: "SS",
      image: "assignee3.jpg",
    },
    assignedTo: {
      name: "KK",
      image: "assignedTo3.jpg",
    },
    actions: "incomplete",
  },
  {
    task: "Customer Creation",
    status: "Upcoming",
    priority: "Medium",
    dueDate: "24 Mar, 2024, 12:00 PM",
    assignee: {
      name: "MN",
      image: "assignee4.jpg",
    },
    assignedTo: {
      name: "LS",
      image: "assignedTo4.jpg",
    },
    actions: "incomplete",
  },
  {
    task: "Reorder visiting cards for Jitendra Saria & Kailash Sharma",
    status: "Due Today",
    priority: "Medium",
    dueDate: "24 Mar, 2024, 12:00 PM",
    assignee: {
      name: "PM",
      image: "assignee5.jpg",
    },
    assignedTo: {
      name: "PM",
      image: "assignedTo5.jpg",
    },
    actions: "incomplete",
  },
  {
    task: "Clapglow support session with Harsh from Jindal medical store",
    status: "Upcoming",
    priority: "Low",
    dueDate: "24 Mar, 2024, 12:00 PM",
    assignee: {
      name: "KL",
      image: "assignee6.jpg",
    },
    assignedTo: {
      name: "KK",
      image: "assignedTo6.jpg",
    },
    actions: "incomplete",
  },
  {
    task: "Inventory statement check (COGS)",
    status: "Overdue",
    priority: "High",
    dueDate: "23 Mar, 2024, 12:00 PM",
    assignee: {
      name: "ID",
      image: "assignee7.jpg",
    },
    assignedTo: {
      name: "DI",
      image: "assignedTo7.jpg",
    },
    actions: "incomplete",
  },
  {
    task: "Order visiting cards for Jitendra Saria & Kailash Sharma",
    status: "Due Today",
    priority: "Medium",
    dueDate: "23 Mar, 2024, 12:00 PM",
    assignee: {
      name: "HS",
      image: "assignee8.jpg",
    },
    assignedTo: {
      name: "KK",
      image: "assignedTo8.jpg",
    },
    actions: "incomplete",
  },
  {
    task: "Clapglow support session with Harsh from Jindal medical store",
    status: "Due Today",
    priority: "High",
    dueDate: "22 Mar, 2024, 12:00 PM",
    assignee: {
      name: "LS",
      image: "assignee9.jpg",
    },
    assignedTo: {
      name: "LS",
      image: "assignedTo9.jpg",
    },
    actions: "incomplete",
  },
];

function TasksLists() {
  return (
    <div className="overflow-x-auto p-[12px] mt-5  rounded-[16px] bg-white  ">
      <table className="min-w-full rounded-[16px] text-[12px]   ">
        <thead>
          <tr className="bg-[#F5F8FB]  text-[#2D2C37]">
            <th className="px-4 py-2 border-b text-start text-[#2D2C37]">
              Tasks
            </th>
            <th className="px-4 py-2 border-b ">Status</th>
            <th className="px-4 py-2 border-b">Priority</th>
            <th className="px-4 py-2 border-b">Due Date</th>
            <th className="px-4 py-2 border-b">Assignee</th>
            <th className="px-4 py-2 border-b">Assigned To</th>
            <th className="px-4 py-2 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index} className="border-b  hover:bg-gray-100">
              <td className="px-4 py-2 text-[14px] text-[#5B5967]">
                {task.task}
              </td>
              <td className="px-4 py-3 flex justify-center  items-center ">
                <span
                  className={`px-2  py-1 rounded-full  ${
                    task.status === "Completed"
                      ? "bg-green-100 text-green-600"
                      : task.status === "Overdue"
                      ? "bg-red-100 text-red-600"
                      : task.status === "Due Today"
                      ? " bg-[#FCF8E4] text-[#BC8908] "
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  {task.status}
                </span>
              </td>
              <td className="px-4  py-2">
                {task.priority === "High" ? (
                  <>
                    <ChevronsUp className="text-[#D72727] mx-auto" size={15} />
                  </>
                ) : null}
              </td>
              <td className="px-4 py-2  text-center">{task.dueDate}</td>
              <td className="px-4 py-2">
                <div>
                  <div className=" flex justify-center  cursor-pointer">
                    <div className=" rounded-full">
                      <Avatar
                        color="cyan"
                        radius="full"
                        fallback={task.assignee.name}
                        className="w-8 h-8 "
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-4 py-2">
                <div>
                  <div className="  flex justify-center cursor-pointer">
                    <div className="w-6 h-6 rounded-full">
                      <Avatar
                        color="cyan"
                        radius="full"
                        fallback={task.assignedTo.name}
                        className="w-8 h-8  "
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-4  flex justify-center py-2">
                <button
                  disabled
                  className={` w-7 h-7 rounded-full text-[15px] ${
                    task.status === "Completed"
                      ? " bg-[#0CA866] text-white "
                      : task.status === "Upcoming"
                      ? " border-[#5B5967] border text-[#5B5967] rounded-full  "
                      : " border-[#D0D3D9] border text-[#D0D3D9] "
                  }    `}
                >
                  ✓
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
}

export default TasksLists;

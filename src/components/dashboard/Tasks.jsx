import { Flex, IconButton } from "@radix-ui/themes";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { ArrowDownToLine, ListFilter, Maximize2 } from "lucide-react";
function Tasks() {
  const [activeTab, setActiveTab] = useState("team");
  return (
    <Flex className="flex mt-2 justify-between">
      <div className="flex gap-7  items-center">
        <h1 className="text-[#2D2C37] text-[16px] font-semibold">Tasks</h1>
        <div className="flex border border-[#D0D3D9] rounded-[11px] overflow-hidden">
          <button
            className={`px-4 py-1  focus:outline-none ${
              activeTab === "team"
                ? "bg-[#038EE2] text-white"
                : "bg-gray-100 text-gray-600"
            }`}
            onClick={() => setActiveTab("team")}
          >
            Team Tasks
          </button>
          <button
            className={`px-4 py-1 focus:outline-none ${
              activeTab === "my"
                ? "bg-[#038EE2] text-white"
                : "bg-gray-100 text-gray-600"
            }`}
            onClick={() => setActiveTab("my")}
          >
            My Tasks
          </button>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center border rounded-xl px-4 py-2 bg-white shadow-sm">
          <AiOutlineSearch size={20} className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="flex-grow outline-none bg-white"
          />
        </div>
        <IconButton
          color="gray"
          variant="outline"
          className="bg-white w-9 h-9 rounded-lg"
        >
          <ArrowDownToLine size={18} />
        </IconButton>
        <IconButton
          color="gray"
          variant="outline"
          className="bg-white w-9 h-9 rounded-lg"
        >
          <ListFilter size={18} />
        </IconButton>
        <IconButton
          color="gray"
          variant="outline"
          className="bg-white w-9 h-9 rounded-lg"
        >
          <Maximize2 size={18} />
        </IconButton>
      </div>
    </Flex>
  );
}

export default Tasks;

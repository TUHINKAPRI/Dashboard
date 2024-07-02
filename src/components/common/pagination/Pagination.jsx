import { ChevronLeft, ChevronRight } from "lucide-react";

function Pagination() {
  return (
    <div className="flex px-[10px] py-[15px] justify-between">
      <div>
        <h1 className="text-[#5B5967] text-[12px]">1-20 of 400</h1>
      </div>
      <div>
        <div className="flex items-center gap-6">
          <ChevronLeft className="text-[#5B5967]" size={20} />
          {[1, 2, 3, 4].map((ele, index) => {
            return <span key={index}>{ele}</span>;
          })}

          <ChevronRight className="text-[#5B5967]" size={20} />
        </div>
      </div>
    </div>
  );
}

export default Pagination;

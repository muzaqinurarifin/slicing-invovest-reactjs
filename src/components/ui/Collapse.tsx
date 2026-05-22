import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Card } from "./Card";

interface CollapseProps {
  title: string;
  description: string;
}

export const Collapse: React.FC<CollapseProps> = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="hover:border-[#852e4e] transition-colors duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer w-full flex items-center gap-4 bg-white outline-none"
      >
        <div className="p-2 bg-[#FAE6EB] rounded-md text-[#852e4e] shrink-0">
          <ChevronDown
            size={20}
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>

        <span className="text-lg font-semibold text-gray-800 text-left">
          {title}
        </span>
      </button>

      {isOpen && (
        <div className="pt-4 mt-4 border-t border-gray-100">
          <p className="text-gray-600 leading-relaxed text-left ml-[52px]">
            {description}
          </p>
        </div>
      )}
    </Card>
  );
};

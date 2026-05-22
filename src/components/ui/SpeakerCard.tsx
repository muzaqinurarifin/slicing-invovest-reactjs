import React from "react";

interface SpeakerCardProps {
  name: string;
  role: string;
  imageUrl: string;
}

export const SpeakerCard: React.FC<SpeakerCardProps> = ({
  name,
  role,
  imageUrl,
}) => {
  return (
    <div className="flex flex-col items-center w-full max-w-95 mx-auto h-full group cursor-pointer">
      <div className="relative z-10 shrink-0">
        <img
          src={imageUrl}
          alt={name}
          className="w-48 h-48 rounded-full object-cover border-[6px] border-[#852e4e] bg-white shadow-sm group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="relative z-0 w-full flex flex-col flex-grow items-center bg-white border-[3px] border-[#852e4e] rounded-xl pt-32 pb-8 px-4 -mt-24 shadow-md group-hover:shadow-lg group-hover:bg-[#FAE6EB] transition-all duration-300">
        <h3 className="text-2xl font-bold text-[#852e4e] mb-1 text-center leading-tight">
          {name}
        </h3>
        <p className="text-base text-gray-500 text-center">{role}</p>
      </div>
    </div>
  );
};

export default SpeakerCard;

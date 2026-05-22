import { useEffect, useState } from "react";

interface SponsorSliderProps {
  sponsors: string[];
  className?: string;
}

export const SponsorSlider = ({
  sponsors,
  className = "",
}: SponsorSliderProps) => {
  const [duplicatedSponsors, setDuplicatedSponsors] = useState<string[]>([]);

  useEffect(() => {
    setDuplicatedSponsors([...sponsors, ...sponsors]);
  }, [sponsors]);

  return (
    <div className={`relative overflow-hidden bg-white py-8 ${className}`}>
      {/* Efek bayangan putih di kiri dan kanan */}
      <div className="absolute inset-y-0 left-0 w-24 sm:w-40 bg-linear-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-24 sm:w-40 bg-linear-to-l from-white to-transparent z-10 pointer-events-none"></div>

      {/* Custom keyframes untuk memastikan animasi berjalan ke kanan secara mulus */}
      <style>
        {`
          @keyframes slideRight {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-slide-right {
            animation: slideRight 20s linear infinite;
            width: max-content;
          }
        `}
      </style>

      <div className="flex animate-slide-right">
        {duplicatedSponsors.map((sponsor, index) => (
          <div
            key={index}
            className="shrink-0 mx-8 flex items-center justify-center"
          >
            <img
              src={sponsor}
              alt={`Sponsor ${index + 1}`}
              className="h-28 w-auto object-contain transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

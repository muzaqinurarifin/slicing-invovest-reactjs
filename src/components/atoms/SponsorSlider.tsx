import { useEffect, useState } from "react";

interface SponsorSliderProps {
  sponsors: string[]; // Array of sponsor image URLs
  className?: string;
}

export const SponsorSlider = ({
  sponsors,
  className = "",
}: SponsorSliderProps) => {
  const [duplicatedSponsors, setDuplicatedSponsors] = useState<string[]>([]);

  useEffect(() => {
    // Duplicate sponsors for seamless infinite scroll
    setDuplicatedSponsors([...sponsors, ...sponsors]);
  }, [sponsors]);

  return (
    <div className={`relative overflow-hidden bg-white py-8 ${className}`}>
      <div className="flex animate-slide">
        {duplicatedSponsors.map((sponsor, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-8 flex items-center justify-center"
          >
            <img
              src={sponsor}
              alt={`Sponsor ${index + 1}`}
              className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

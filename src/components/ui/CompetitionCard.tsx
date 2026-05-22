import React from "react";
import Button from "./Button";

interface CompetitionCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  category?: string;
  date?: string;
  location?: string;
  buttonText?: string;
}

export const CompetitionCard: React.FC<CompetitionCardProps> = ({
  title,
  description,
  imageUrl,
  category,
  date,
  location,
  buttonText = "INFO SELENGKAPNYA",
}) => {
  const placeholderImage =
    "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=800&q=80";

  return (
    <div className="max-w-[320px] bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden font-sans flex flex-col group transition-all duration-300 hover:shadow-md">
      <div className="relative overflow-hidden">
        <img
          src={imageUrl ?? placeholderImage}
          alt={title}
          className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-4 flex flex-col grow">
        {category ? (
          <span className="text-[10px] uppercase tracking-[0.25em] text-red-900 font-semibold mb-2">
            {category}
          </span>
        ) : null}

        <h2 className="text-xl font-bold text-[#455A64] mb-2 leading-tight">
          {title}
        </h2>

        <p className="text-gray-600 text-sm leading-relaxed mb-4 grow">
          {description}
        </p>

        <div className="mb-3 flex flex-wrap gap-2 text-xs text-slate-600">
          {date ? (
            <span className="rounded-full bg-slate-100 px-3 py-1">{date}</span>
          ) : null}
          {location ? (
            <span className="rounded-full bg-slate-100 px-3 py-1">
              {location}
            </span>
          ) : null}
        </div>

        <Button label={buttonText} />
      </div>
    </div>
  );
};

export default CompetitionCard;

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Card } from "./Card"; // Pastikan path import Card ini benar

interface CollapseProps {
  title: string;
  description: string;
}

export const Collapse: React.FC<CollapseProps> = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Kita panggil <Card> sebagai pembungkus utama
    // Card sudah memiliki p-6, jadi isi di dalamnya otomatis punya jarak yang rapi
    <Card className="hover:border-[#852e4e] transition-colors duration-300">
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer w-full flex items-center gap-4 bg-white outline-none"
      >
        {/* Ikon Chevron (Aku ubah warnanya sedikit agar senada dengan tema Invofest) */}
        <div className="p-2 bg-[#FAE6EB] rounded-md text-[#852e4e] shrink-0">
          <ChevronDown
            size={20}
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
        
        {/* Judul Pertanyaan */}
        <span className="text-lg font-semibold text-gray-800 text-left">
          {title}
        </span>
      </button>

      {/* Area Deskripsi (Merespons nilai isOpen) */}
      {isOpen && (
        // pt-4 dan mt-4 memberikan jarak dan garis batas tipis antara judul dan jawaban
        <div className="pt-4 mt-4 border-t border-gray-100">
          <p className="text-gray-600 leading-relaxed text-left ml-[52px]">
            {/* ml-[52px] digunakan agar teks jawaban sejajar dengan teks judul, bukan ikon */}
            {description}
          </p>
        </div>
      )}

    </Card>
  );
};
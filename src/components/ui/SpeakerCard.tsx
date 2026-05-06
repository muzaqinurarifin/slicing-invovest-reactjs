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
    // UBAH: max-w-[380px] agar kotak bisa membentang lebih lebar
    <div className="flex flex-col items-center w-full max-w-[380px] mx-auto h-full group cursor-pointer">
      
      {/* UBAH FOTO: w-48 h-48 membuat lingkarannya lebih besar */}
      <div className="relative z-10 shrink-0">
        <img
          src={imageUrl}
          alt={name}
          className="w-48 h-48 rounded-full object-cover border-[6px] border-[#852e4e] bg-white shadow-sm group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* UBAH KOTAK TEKS: 
        1. -mt-24: Menarik kotak sedikit lebih dalam karena fotonya membesar
        2. pt-32: Mendorong teks ke bawah agar tidak tertimpa foto
        3. pb-8: Menambah ruang kosong di bawah agar lebih proporsional
        4. group-hover:bg-[#FAE6EB]: Membuat background jadi pink saat disentuh (border tetap merah marun)
      */}
      <div className="relative z-0 w-full flex flex-col flex-grow items-center bg-white border-[3px] border-[#852e4e] rounded-xl pt-32 pb-8 px-4 -mt-24 shadow-md group-hover:shadow-lg group-hover:bg-[#FAE6EB] transition-all duration-300">
        
        {/* Teks aku buat sedikit lebih besar (text-2xl & text-base) agar seimbang dengan kotaknya */}
        <h3 className="text-2xl font-bold text-[#852e4e] mb-1 text-center leading-tight">
          {name}
        </h3>
        <p className="text-base text-gray-500 text-center">
          {role}
        </p>
        
      </div>

    </div>
  );
};

export default SpeakerCard;
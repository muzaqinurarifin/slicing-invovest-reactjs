import {
  CalendarDays,
  Clock,
  Code,
  MapPin,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import Button from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Collapse } from "../components/ui/Collapse";
import SpeakerCard from "../components/ui/SpeakerCard";

export default function Workshop() {
  const speakers = [
    {
      name: "Lhuqita Fazry",
      category: "Mobile Development",
      role: "Developer, Founder Rumah Coding Indonesia",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20mobile.png",
    },
    {
      name: "Sowam Habibi",
      category: "Artificial Intelligence",
      role: "Software Engineer, PT. Mayar Kernel Supernova",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20AI.png",
    },

    {
      name: "Sowam Habibi",
      category: "Cyber Security",
      role: "Security Analyst, Founder | Contributor TegalSec",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/workshop/talkshow%20cyber.png",
    },
  ];

  const workshops = [
    {
      id: 1,
      title: "Mobile Development",
      mainIcon: <Code className="w-10 h-10" />,
      date: "Selasa, 25 November 2025",
      time: "08.00 WIB - 16.30 WIB",
      location: "Lab Kom D.1",
    },
    {
      id: 2,
      title: "Artificial Intelligence",
      mainIcon: <Smartphone className="w-10 h-10" />,
      date: "Selasa, 25 November 2025",
      time: "08.00 WIB - 16.30 WIB",
      location: "Lab Kom D.2",
    },
    {
      id: 3,
      title: "Cyber Security",
      mainIcon: <ShieldCheck className="w-10 h-10" />,
      date: "Rabu, 26 November 2025",
      time: "08.00 WIB - 16.30 WIB",
      location: "Lab Kom D.1",
    },
  ];

  const collapseItems = [
    {
      title: "Apa itu INVOFEST?",
      description:
        "Invofest (Informatics Vocational Festival) adalah festival tahunan yang diakan oleh program studi sarjana terapan teknik informatika Universitas Harkat Negeri, yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital.",
    },
    {
      title: "Bagaimana saya mengetahui pemenang kompetisi?",
      description:
        "Pemenang akan diinformasikan melalui media sosial instagram dari invofest @invofest_harkatnegeri.",
    },
    {
      title: "Kapan dan dimana INVOFEST dilaksanakan?",
      description:
        "INVOFEST diselenggarakan mulai tanggal 21 Oktober 2025 sampai dengan tanggal 27 November 2025. Untuk acara workshop, seminar, talkshow diadakan secara Offline di kampus 1 Universitas Harkat Negeri dan kompetisi diadakan secara Online.",
    },
    {
      title: "Apa yang didapat pemenang dalam kompetisi?",
      description:
        "Pemenang kompetisi akan mendapatkan hadiah trophy, uang pembinaan, dan e-sertifikat.",
    },
    {
      title: "Apakah ada biaya pendaftaran di INVOFEST?",
      description: "Semua kegiatan dipastikan berbayar ya teman-teman.",
    },
    {
      title: "Bagaimana cara mendaftar event?",
      description:
        "Buka https://www.invofest-harkatnegeri.com lalu pergi ke halaman event yang anda ingin ikuti atau scroll kebagian bawah halaman beranda dengan klik mendaftar pada salah satu eventnya, jika sudah maka diarahkan ke halaman detail event dan klik tombol 'Registrasi' maka akan diarahkan ke google form pengisian pendaftaran event yang diikuti.",
    },
  ];

  return (
    <div>
      <section
        id="hero"
        className="py-24 px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row gap-14 lg:gap-24 items-start"
      >
        <div className="w-full lg:w-2/3 flex flex-col gap-8">
          <h1 className="text-red-900 text-5xl font-bold">IT Workshop</h1>
          <h2 className="text-red-900 text-4xl font-bold leading-tight">
            "AI for a Sustainable Future: The Role of Z Generation in the
            Digital Era"
          </h2>
          <p className="max-w-3xl text-lg leading-relaxed text-slate-700">
            IT Workshop ini menjembatani antara potensi Generasi Z dan kekuatan
            AI untuk menciptakan masa depan yang berkelanjutan. Peserta akan
            dibekali wawasan dan alat untuk mentransformasi ide-ide inovatif
            menjadi solusi lingkungan yang nyata dan terukur di era digital.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button label="Info Selengkapnya" variant="primary" />
            <Button label="Hubungi Panitia" variant="outline" />
          </div>
        </div>
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-end pt-6 lg:pt-0">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Workshop.png"
            alt=""
            className="max-w-full"
          />
        </div>
      </section>

      <section
        id="deskripsi"
        className="py-20 bg-[#fee3ec] px-4 sm:px-6 lg:px-10 rounded-lg"
      >
        <div className="flex flex-col items-center justify-center mt-6 gap-8">
          <h2 className="text-3xl text-red-900 font-bold">
            TENTANG IT WORKSHOP
          </h2>
          <p className="text-center max-w-4xl mx-auto text-lg leading-relaxed text-slate-700">
            Seminar bertajuk “Human-AI Integration: Merancang Arsitektur
            Kolaboratif, Di tengah pesatnya kemajuan kecerdasan buatan (AI),
            narasi yang sering muncul adalah tentang persaingan antara manusia
            dan mesin. Kekhawatiran akan penggantian peran manusia oleh
            teknologi cerdas menjadi diskusi utama di berbagai sektor. Namun,
            bagaimana jika kita mengubah paradigma tersebut? Seminar Nasional
            Teknologi Informasi ini hadir untuk menjawab tantangan itu dengan
            mengangkat tema "Human-AI Integration: Merancang Arsitektur
            Kolaboratif, Bukan Kompetitif.” Kami bertujuan untuk menggeser fokus
            dari ketakutan akan kompetisi menjadi eksplorasi peluang kolaborasi.
            Seminar ini akan mengupas tuntas bagaimana kita dapat merancang
            sistem, etika, dan lingkungan kerja di mana AI berfungsi sebagai
            mitra yang memperkuat kecerdasan, kreativitas, dan produktivitas
            manusia—bukan sebagai pengganti.
          </p>
        </div>
      </section>

      <section id="speaker" className="py-32 px-4 sm:px-6 lg:px-10">
        <div>
          <h2 className="text-4xl text-red-900 font-bold text-center mb-4">
            Temui Pembicara Khusus Kami
          </h2>
        </div>

        <div className="p-24 grid grid-cols-1 md:grid-cols-3 gap-10 px-3">
          {speakers.map((speaker, index) => (
            <SpeakerCard
              key={index}
              name={speaker.name}
              role={speaker.role}
              imageUrl={speaker.imageUrl}
            />
          ))}
        </div>
      </section>

      <section id="detail-jadwal" className="py-16 bg-[#FAE6EB] font-sans">
        <h2 className="text-4xl font-bold text-center text-[#852e4e] mb-12">
          Pelaksanaan IT Workshop
        </h2>

        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto px-4">
          {workshops.map((ws) => (
            <Card
              key={ws.id}
              className="flex items-center gap-6 w-full md:w-[48%] max-w- p-6"
            >
              <div className="w-24 h-24 rounded-2xl bg-[#852e4e] flex items-center justify-center text-white shrink-0 shadow-inner">
                {ws.mainIcon}
              </div>

              <div className="flex flex-col gap-1.5">
                <h3 className="text-xl font-bold text-[#37474F] mb-1">
                  {ws.title}
                </h3>

                <div className="flex items-center gap-3 text-slate-500 text-sm">
                  <CalendarDays className="w-4 h-4 text-slate-400" />
                  <span>{ws.date}</span>
                </div>

                <div className="flex items-center gap-3 text-slate-500 text-sm">
                  <Clock className="w-4 h-4 text-slate-400" />
                  <span>{ws.time}</span>
                </div>

                <div className="flex items-center gap-3 text-slate-500 text-sm">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  <span>{ws.location}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section id="FAQ" className="py-24 px-4 max-w-4xl mx-auto font-sans">
        <div className="text-center mb-12">
          <h3 className="text-gray-600 text-1xl font-bold">FAQ</h3>
          <h1 className="text-gray-700 text-4xl font-bold">
            Punya Pertanyaan? Lihat
          </h1>
          <h1 className="text-red-900 text-4xl font-bold mb-4">Disini</h1>
          <p className=" text-gray-">
            Ada banyak informasi yang terkait dengan INVOFEST, Anda dapat
            melihat daftar pertanyaan di bawah ini.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {collapseItems.map((faq, index) => (
            <Collapse
              key={index}
              title={faq.title}
              description={faq.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

import { Building2, CalendarDays, Clock, MapPin } from "lucide-react";
import Button from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Collapse } from "../components/ui/Collapse";
import SpeakerCard from "../components/ui/SpeakerCard";

export default function Talkshow() {
  const speakers = [
    {
      name: "Moh. Ichsan Maulana",
      role: "Human Capital Information System (HCIS), PT. Garuda Daya Pratama Sejahtera",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20ichsan.png",
    },
    {
      name: "M. Zaim Zamzami",
      role: "Programmer, PT. Pertamina Drilling Service Indonesia",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20zaim%20zamzami.png",
    },
    {
      name: "Daffa Zuhdan Muhtar",
      role: "Android Developer, PT. Astra Internasional",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20daffa.png",
    },
    {
      name: "Bayu Adi Prasetiyo",
      role: "Software Engineer, KOMPAS.ID",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20bayu.png",
    },
  ];

  const eventDetails = [
    {
      id: 1,
      icon: <CalendarDays className="w-7 h-7" />,
      text: "Kamis, 27 November 2025",
    },
    {
      id: 2,
      icon: <Clock className="w-7 h-7" />,
      text: "08.00 WIB - 12.00 WIB",
    },
    {
      id: 3,
      icon: <MapPin className="w-7 h-7" />,
      text: "Aula Gedung C",
    },
    {
      id: 4,
      icon: <Building2 className="w-7 h-7" />,
      text: "Kampus 1 (Mataram) Universitas Harkat Negeri",
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
          <h1 className="text-red-900 text-5xl font-bold">IT Talkshow</h1>
          <h2 className="text-red-900 text-4xl font-bold leading-tight">
            “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan”
          </h2>
          <p className="max-w-3xl text-lg leading-relaxed text-slate-700">
            Talkshow “Humanizing Technology: Kolaborasi Manusia dan AI di Masa
            Depan” Sebuah diskusi interaktif yang mengeksplorasi cara
            mengintegrasikan nilai-nilai kemanusiaan seperti etika, empati, dan
            kreativitas ke dalam pengembangan kecerdasan buatan. yang bertujuan
            menginspirasi audiens untuk membangun dan memanfaatkan AI sebagai
            alat kolaboratif yang memperkuat potensi unik manusia, bukan sebagai
            penggantinya.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button label="Daftar Sekarang" variant="primary" />
          </div>
        </div>
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-end pt-6 lg:pt-0">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Talkshow.png"
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
            TENTANG IT TALKSHOW
          </h2>
          <p className="text-center max-w-5xl mx-auto text-lg leading-relaxed text-slate-700">
            Seiring teknologi, khususnya kecerdasan buatan (AI), yang semakin
            meresap ke dalam setiap aspek kehidupan kita, muncul sebuah
            pertanyaan fundamental: Apakah kita sedang menciptakan teknologi
            yang melayani manusia, atau justru sebaliknya? Untuk menjawab
            pertanyaan tersebut, kami mempersembahkan talkshow berskala
            nasional: “Humanizing Technology: Kolaborasi Manusia dan AI di Masa
            Depan.” Acara ini dirancang bukan untuk membahas teknologi sebagai
            entitas yang dingin dan terpisah, melainkan untuk menggali bagaimana
            kita dapat menanamkan nilai-nilai kemanusiaan—seperti empati, etika,
            dan kreativitas—ke dalam inti pengembangan AI. Kami akan mengupas
            tuntas visi masa depan di mana AI tidak menjadi pesaing, tetapi
            menjadi mitra kolaboratif yang memperkuat potensi unik manusia.
          </p>
        </div>
      </section>

      <section
        id="speaker"
        className="py-24 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto"
      >
        <div>
          <h2 className="text-4xl text-red-900 font-bold text-center mb-4">
            Temui Pembicara Khusus Kami
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-24">
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

      <section
        id="detail-jadwal"
        className="py-20 bg-[#fee3ec] px-4 sm:px-6 lg:px-10 rounded-lg"
      >
        <div>
          <h2 className="text-3xl text-red-900 font-bold text-center mb-4">
            Detail Jadwal
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto p-4 font-sans">
          {eventDetails.map((item) => (
            <Card key={item.id} className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-xl bg-[#852e4e] flex items-center justify-center text-white shrink-0">
                {item.icon}
              </div>

              <p className="text-[#455A64] text-lg">{item.text}</p>
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

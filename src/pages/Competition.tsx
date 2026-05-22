import Button from "../components/ui/Button";
import { Collapse } from "../components/ui/Collapse";
import { CompetitionCard } from "../components/ui/CompetitionCard";

const competitionData = [
  {
    title: "Poster Design Competition",
    category: "Design",
    date: "24 Mei 2026",
    location: "Online",
    description:
      "Poster Design Competition ini adalah kompetisi untuk menciptakan suatu karya dalam bentuk poster digital yang komunikatif dan inspiratif, guna menyuarakan gagasan atau solusi visual terhadap permasalahan yang ada sekarang ini.",
    imageUrl:
      "https://www.invofest-harkatnegeri.com/assets/competition-card/software_dev.png",
  },
  {
    title: "Web Design Competition",
    category: "Design",
    date: "28 Mei 2026",
    location: "Hybrid",
    description:
      "UI/UX Design Competition ini adalah kompetisi untuk menciptakan dan merancang inovasi sebuah produk digital yang dapat berupa website maupun mobile apps serta dapat membuat nyaman calon pengguna.",
    imageUrl:
      "https://www.invofest-harkatnegeri.com/assets/competition-card/ui_ux.png",
  },
  {
    title: "Web App Development Challenge",
    category: "Programming",
    date: "2 Juni 2026",
    location: "Offline",
    description:
      "Web Design Competition ini adalah kompetisi untuk menciptakan suatu perangkat lunak berbasis website yang menggunakan desain menarik, unik, dan responsive pada semua device serta sesuai dengan tema kompetisi.",
    imageUrl:
      "https://www.invofest-harkatnegeri.com/assets/competition-card/web_design.png",
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

export default function Competition() {
  return (
    <div>
      <section
        id="hero"
        className="py-10 flex gap-10 justify-between items-center "
      >
        <div className="w-2/3 flex flex-col gap-6">
          <h1 className="text-red-900 text-5xl font-bold">IT Competition</h1>
          <h2 className="text-red-900 text-4xl font-bold">
            "From Creation To Innovation"
          </h2>
          <p>
            Kompetisi dalam INVOFEST ini mengusung tema{" "}
            <strong>“From Creation to Innovation”</strong> , Tema ini bertujuan
            mengajak generasi muda untuk mengembangkan inovasi dan kreativitas
            guna membentuk kelompok yang memiliki potensi luar biasa, yang mampu
            mewujudkan masa depan yang berkelanjutan.
          </p>

          <div className="flex gap-3">
            <Button label="Info Selengkapnya" variant="primary" />
            <Button label="Hubungi Panitia" variant="outline" />
          </div>
        </div>
        <div className="w-1/3">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Lomba.png"
            alt=""
          />
        </div>
      </section>

      <section id="deskripsi" className="py-10 bg-[#fee3ec] p-6 rounded-lg">
        <div className="flex flex-col items-center justify-center mt-4">
          <h2 className="text-3xl text-red-900 font-bold mb-4">
            DESKRIPSI KOMPETISI
          </h2>
          <p className="text-center ">
            Kompetisi atau perlombaan yang ada dalam{" "}
            <strong>
              kegiatan INVOFEST (Infomatics Vocational Festival) 2025{" "}
            </strong>
            adalah diantaranya National Poster Design Competition, UI UX Design
            Competition, dan juga UI/UX Design Competition. Kompetisi dalam
            INVOFEST ini mengusung tema
            <strong>“From Creation to Innovation”</strong>. Tema ini bertujuan
            mengajak generasi muda untuk mengembangkan inovasi dan kreativitas
            guna membentuk kelompok yang memiliki potensi luar biasa, yang mampu
            mewujudkan masa depan yang berkelanjutan. Melalui pendekatan ini,
            diharapkan generasi ini akan berperan dalam menciptakan
            solusi-solusi baru untuk tantangan masa kini dan mendatang, baik
            dalam hal teknologi, lingkungan, pendidikan, maupun tanggung jawab
            sosial.
          </p>
        </div>
      </section>

      <section id="daftarKompetisi" className="py-8">
        <div id="title" className="text-center mb-8">
          <h2 className="text-3xl font-bold text-red-900">DAFTAR KOMPETISI</h2>
          <p className="mt-3 max-w-2xl mx-auto text-slate-600">
            Lihat berbagai kompetisi Invofest yang bisa diikuti, disusun dalam
            tampilan kartu yang rapi dengan jarak antar item.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {competitionData.map((item) => (
            <CompetitionCard
              key={item.title}
              title={item.title}
              description={item.description}
              category={item.category}
              date={item.date}
              location={item.location}
              imageUrl={item.imageUrl}
              buttonText="INFO SELENGKAPNYA"
            />
          ))}
        </div>
      </section>

      <section id="FAQ" className="py-24 px-4 max-w-4xl mx-auto font-sans">
        <div className="text-center mb-12">
          <h3 className="text-gray-600 text-xl font-bold">FAQ</h3>
          <h1 className="text-gray-700 text-4xl font-bold">
            Punya Pertanyaan? Lihat
          </h1>
          <h1 className="text-red-900 text-4xl font-bold mb-4">Disini</h1>
          <p className="text-gray-500">
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

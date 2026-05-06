import Button from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Collapse } from "../components/ui/Collapse";

export default function Beranda() {
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

  const cardItems = [
    {
      title: "IT Seminar",
      description:
        "Seminar nasional ini membahas “Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif” untuk mengembangkan potensi diri dan pengetahuan teknologi lebih dalam lagi.",
    },
    {
      title: "IT Talkshow",
      description:
        "Talkshow “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan” membahas peran manusia dalam memanfaatkan AI untuk solusi berkelanjutan dan peningkatan teknologi.",
    },
    {
      title: "IT Competition",
      description:
        "Kompetisi “From Creation to Innovation” mengajak generasi muda untuk mengembangkan inovasi dan kreativitas guna membentuk kelompok yang memiliki potensi luar biasa, yang mampu mewujudkan masa depan yang berkelanjutan.",
    },
    {
      title: "IT Workshop",
      description:
        "Workshop 'AI for a Sustainable Future: The Role of Z Generation in the Digital Era' membekali Gen Z dengan keterampilan praktis AI untuk menciptakan solusi berkelanjutan.",
    },
  ];

  return (
    <div>
      <section
        id="hero"
        className="py-10 flex gap-10 justify-between items-center"
      >
        <div className="w-2/3 flex flex-col gap-6">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/text-image.png"
            alt=""
            className="w-96"
          />
          <p>
            Invofest (Informatics Vocational Festival) adalah festival tahunan
            yang bertujuan untuk menginspirasi dan memberdayakan generasi muda
            Indonesia dalam menghadapi era digital. Dengan mengusung tema
            “Beyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow
            ”.
          </p>

          <div className="flex gap-3">
            <Button label="Info Selengkapnya" variant="primary" />
            <Button label="Hubungi Panitia" variant="outline" />
          </div>
        </div>
        <div className="w-1/3">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png"
            alt=""
          />
        </div>
      </section>

      <section id="about" className="py-10 bg-[#fee3ec] p-6 rounded-lg">
        <div>
          <h2 className="text-[#852e4e] text-4xl font-bold mb-4">
            Tentang INVOFEST
          </h2>
          <p>
            Invofest 2025, yang diselenggarakan oleh sarjana terapan Teknik
            Informatika Universitas Harkat Negeri, adalah festival tahunan yang
            bertujuan untuk menginspirasi dan memberdayakan generasi muda
            Indonesia dalam menghadapi era digital. Dengan mengusung tema
            <strong>
              “Beyond Limits, Beyond Intelligence: Innovate for a Smarter
              Tomorrow”
            </strong>
            . Invofest 2025 menghadirkan berbagai kegiatan menarik seperti
            kompetisi IT, workshop IT, dan seminar nasional & talkshow dengan
            para ahli teknologi.
          </p>
        </div>

        <section
          id="cards"
          className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"
        >
          {cardItems.map((item, index) => (
            <Card key={index} className="w-full">
              <h3 className="text-2xl text-red-900 mb-4">{item.title}</h3>
              <p>{item.description}</p>
              <Button
                label="Info Selengkapnya"
                variant="primary"
                className="mt-4"
              />
            </Card>
          ))}
        </section>
      </section>

      <section
        id="seminar"
        className="py-10 flex gap-10 justify-between items-center "
      >
        <div className="w-2/3 flex flex-col gap-6">
          <h1 className="text-red-900 text-5xl font-bold">IT Seminar</h1>

          <p>
            Seminar Nasional Teknologi Informasi ini mengangkat tema{" "}
            <strong>
              "Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan
              Kompetitif.”
            </strong>{" "}
            Kami bertujuan untuk menggeser fokus dari ketakutan akan kompetisi
            menjadi eksplorasi peluang kolaborasi. Seminar ini akan mengupas
            tuntas bagaimana kita dapat merancang sistem, etika, dan lingkungan
            kerja di mana AI berfungsi sebagai mitra yang memperkuat kecerdasan,
            kreativitas, dan produktivitas manusia—bukan sebagai pengganti.
          </p>

          <div className="flex gap-3">
            <Button label="Daftar IT Seminar" variant="primary" />
          </div>
        </div>
        <div className="w-1/3">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Seminar.png"
            alt=""
          />
        </div>
      </section>

      <section
        id="IT Talkshow"
        className="py-10 flex gap-10 justify-between items-center bg-[#fee3ec] p-6 rounded-lg"
      >
        <div className="w-1/3">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Seminar.png"
            alt=""
          />
        </div>
        <div className="w-2/3 flex flex-col gap-6">
          <h1 className="text-red-900 text-5xl font-bold">IT Talkshow</h1>

          <p>
            Talkshow berskala nasional: “Humanizing Technology: Kolaborasi
            Manusia dan AI di Masa Depan.” Acara ini dirancang bukan untuk
            membahas teknologi sebagai entitas yang dingin dan terpisah,
            melainkan untuk menggali bagaimana kita dapat menanamkan nilai-nilai
            kemanusiaan—seperti empati, etika, dan kreativitas—ke dalam inti
            pengembangan AI. Kami akan mengupas tuntas visi masa depan di mana
            AI tidak menjadi pesaing, tetapi menjadi mitra kolaboratif yang
            memperkuat potensi unik manusia. Talkshow ini bertujuan untuk
            menginspirasi generasi muda dan para penggiat teknologi untuk tidak
            hanya menjadi pengguna, tetapi juga menjadi arsitek masa depan
            digital yang lebih manusiawi. Mari bergabung untuk meningkatkan
            pengetahuan, mengembangkan potensi diri, dan menjadi bagian dari
            dialog penting dalam membentuk era kolaborasi manusia dan AI.
          </p>

          <div className="flex gap-3">
            <Button label="Daftar IT Talkshow" variant="primary" />
          </div>
        </div>
      </section>

      <section
        id="workshop"
        className="py-10 flex gap-10 justify-between items-center "
      >
        <div className="w-2/3 flex flex-col gap-6">
          <h1 className="text-red-900 text-5xl font-bold">IT Workshop</h1>

          <p>
            Workshop "AI for a Sustainable Future: The Role of Z Generation in
            the Digital Era” ini menjembatani antara potensi Generasi Z dan
            kekuatan AI untuk menciptakan masa depan yang berkelanjutan. Peserta
            akan dibekali wawasan dan alat untuk mentransformasi ide-ide
            inovatif menjadi solusi lingkungan yang nyata dan terukur di era
            digital.
          </p>

          <div className="flex gap-3">
            <Button label="Daftar IT Workshop" variant="primary" />
          </div>
        </div>
        <div className="w-1/3">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Talkshow.png"
            alt=""
          />
        </div>
      </section>

      <section
        id="IT Talkshow"
        className="py-10 flex gap-10 justify-between items-center bg-[#fee3ec] p-6 rounded-lg"
      >
        <div className="w-1/3">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Lomba.png"
            alt=""
          />
        </div>
        <div className="w-2/3 flex flex-col gap-6">
          <h1 className="text-red-900 text-5xl font-bold">IT Competition</h1>

          <p>
            "From Creation to Innovation" adalah sebuah kompetisi IT yang
            dirancang untuk menjembatani jurang antara ide kreatif dan inovasi
            nyata. Ajang ini menantang para talenta digital untuk tidak hanya
            menciptakan sesuatu yang baru, tetapi juga mengembangkannya menjadi
            solusi yang berdampak, berkelanjutan, dan bernilai guna tinggi.
          </p>

          <div className="flex gap-3">
            <Button label="Daftar IT Competition" variant="primary" />
          </div>
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

        {/* grid 2 kolom untuk menampilkan FAQ 2x3 */}
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

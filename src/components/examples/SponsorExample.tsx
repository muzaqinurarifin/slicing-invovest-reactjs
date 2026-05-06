// Contoh penggunaan SponsorSlider
import { SponsorSlider } from "../atoms/SponsorSlider";

const sponsors = [
  "https://via.placeholder.com/150x80/FF6B6B/FFFFFF?text=Sponsor+1",
  "https://via.placeholder.com/150x80/4ECDC4/FFFFFF?text=Sponsor+2",
  "https://via.placeholder.com/150x80/45B7D1/FFFFFF?text=Sponsor+3",
  "https://via.placeholder.com/150x80/F9CA24/FFFFFF?text=Sponsor+4",
  "https://via.placeholder.com/150x80/F0932B/FFFFFF?text=Sponsor+5",
  "https://via.placeholder.com/150x80/EB4D4B/FFFFFF?text=Sponsor+6",
];

export default function SponsorExample() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-8">Didukung Oleh</h2>
      <SponsorSlider sponsors={sponsors} />
    </div>
  );
}

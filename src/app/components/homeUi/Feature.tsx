import FeatureCard from "./FeatureCard";
import shape1 from "../../../../public/shape-3.svg";
import shape2 from "../../../../public/shape-4.svg";
import shape3 from "../../../../public/shape-6.svg";
import shape4 from "../../../../public/shape-7.svg";
import section from "../../../../public/section.png";
import Image from "next/image";

const features = [
  {
    img: shape1,
    title: "Gold and Silver",
    desc: "Spend and save in digitalised physical gold and silver.",
  },
  {
    img: shape2,
    title: "Earn",
    desc: "Earn gold and silver just for using your account.",
  },
  {
    img: shape3,
    title: "NSG CARD",
    desc: "Spend gold, silver and digital currency globally.",
  },
  {
    img: shape4,
    title: "Trust and Security",
    desc: "Be sure that your gold and silver are in safe hands.",
  },
];

export default function Features() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-10">
      <p className="text-xl md:text-2xl lg:text-3xl text-white font-semibold text-center mb-10 md:mb-14">
        Ask a little more from your money
      </p>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {features.map((f, idx) => (
          <FeatureCard key={idx} img={f.img} title={f.title} desc={f.desc} />
        ))}
      </div>
    </div>
  );
}

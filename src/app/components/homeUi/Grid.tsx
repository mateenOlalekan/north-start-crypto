import React from "react";
import Image from "next/image";

import lock3 from "../../../../public/Grid/lock3.svg";
import wallet from "../../../../public/Grid/wallet.svg";
import briefcase from "../../../../public/Grid/briefcase.svg";
import timer from "../../../../public/Grid/timer.svg";
import goldbar from "../../../../public/Grid/gold_bars.svg";
import door from "../../../../public/Grid/door_exit.svg";
import Group from "../../../../public/Grid/Group 61.svg";

// --------------------------------------------
// FeatureCard
// --------------------------------------------
interface FeatureCardProps {
  svg: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ svg, title, description }) => (
  <div className="flex items-start gap-4 p-6 bg-slate-800/50 hover:bg-slate-800/70 rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 group">
    <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
      {svg}
    </div>
    <div className="space-y-2">
      <h3 className="text-white text-lg md:text-xl font-semibold leading-tight">
        {title}
      </h3>
      <p className="text-gray-400 text-sm md:text-base leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

// --------------------------------------------
// Data Arrays
// --------------------------------------------
const virtual = [
  {
    svg: wallet,
    title: "Go borderless",
    description: "Send and receive globally without restrictions."
  },
  {
    svg: lock3,
    title: "Sky-high daily limits",
    description: "Enjoy unmatched freedom with higher transfer limits."
  },
  {
    svg: goldbar,
    title: "Get paid gold and silver",
    description: "Earn in real assets – digitalized gold and silver."
  }
];

const remit = [
  {
    svg: briefcase,
    title: "No hidden fees",
    description: "A flat 0.45% fee. Any amount, sent anytime, worldwide."
  },
  {
    svg: timer,
    title: "Arrives in seconds",
    description: "Payments in gold & silver, cleared within seconds 24/7."
  },
  {
    svg: Group,
    title: "No mark-ups – ever",
    description: "The same low cost, weekday or weekend, all year round."
  }
];

const coolwallets = [
  {
    svg: lock3,
    title: "Added Security",
    description: "Biometric and physical 2FA checks keep your assets safe."
  },
  {
    svg: door,
    title: "Pocket-ready convenience",
    description: "Credit card-sized, secure and always accessible."
  }
];

// --------------------------------------------
// Section Template
// --------------------------------------------
interface SectionProps {
  heading: string;
  subheading: string;
  description: string;
  features: { svg: any; title: string; description: string }[];
  reverse?: boolean;
}

const FeatureSection: React.FC<SectionProps> = ({
  heading,
  subheading,
  description,
  features,
  reverse = false
}) => (
  <div
    className={`max-w-7xl w-full flex flex-col md:flex-row ${
      reverse ? "md:flex-row-reverse" : ""
    } justify-between gap-8 py-8 mx-auto px-4 md:px-8`}
  >
    {/* Left / Right Placeholder box (could be an image later) */}
    <div className="w-full md:w-1/2">
      <div className="w-full bg-[#25243459] h-full rounded-xl"></div>
    </div>

    {/* Content */}
    <div className="w-full md:w-1/2">
      <div className="max-w-3xl mb-10 md:mb-14">
        <p className="text-cyan-400 font-semibold text-sm md:text-base tracking-wider uppercase mb-4 md:mb-6">
          {subheading}
        </p>
        <h2 className="text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight mb-6 md:mb-8">
          {heading}
        </h2>
        <p className="text-gray-400 text-base md:text-lg leading-relaxed">
          {description}
        </p>
      </div>

      {/* Features */}
      <div className="grid gap-6 md:gap-8 max-w-4xl">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            svg={<Image src={feature.svg} alt={feature.title} width={48} height={48} />}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  </div>
);

// --------------------------------------------
// Main Component
// --------------------------------------------
export default function Remittance() {
  return (
    <section className="w-full  py-8 md:py-12">
      <FeatureSection
        heading="Send money globally in seconds"
        subheading="Remittance"
        description="Send gold and silver-based digital currencies to friends and family around the globe. They'll get it in 2-3 seconds – every time."
        features={virtual}
      />
      <FeatureSection
        heading="Borderless transactions"
        subheading="Remittance"
        description="No hidden costs and lightning fast settlement for cross-border payments."
        features={remit}
        reverse
      />
      <FeatureSection
        heading="Security at your fingertips"
        subheading="Cool Wallets"
        description="Our hardware wallets give you ultimate peace of mind with biometric & physical authentication."
        features={coolwallets}
      />
    </section>
  );
}

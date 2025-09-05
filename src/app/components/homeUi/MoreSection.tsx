import MoreCard from "./MoreCard";
import workplace from "../../../../public/workplace.svg";
import mobile from "../../../../public/mobile.svg";
import credit from "../../../../public/credit.svg";
import section from "../../../../public/section.png";
import bgImage from "../../../../public/About.jpg";
import Image from "next/image";

const moreCards = [
  {
    img: workplace,
    title: "NSG Money Platform",
    desc: "Keep track of everyday spending. Build your wealth in gold and silver.",
  },
  {
    img: mobile,
    title: "NSG Mobile App",
    desc: "Take care of your finances on the move. Buy gold, silver and digital currency.",
  },
  {
    img: credit,
    title: "NSG Card",
    desc: "Spend gold, silver and digital currency globally.",
  },
];

export default function MoreSection() {
  return (
    <div className="max-w-7xl min-h-screen mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-20">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight md:leading-tighter">
            More than just your average bank account
          </h2>
          <p className="text-[#AEAEAE] mt-4 sm:mt-6 md:mt-8 max-w-lg mx-auto lg:mx-0 text-sm sm:text-base md:text-lg leading-relaxed">
            Manage your spending and savings from a single account. Get digital
            currency. Instantly buy gold and silver at world-class industry prices.
          </p>
        </div>

        {/* Right Cards */}
        <div className="flex-1 w-full mt-8 lg:mt-0">
          <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1">
            {moreCards.map((card, idx) => (
              <MoreCard key={idx} {...card} />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile App Section */}
      <div className="mt-16 md:mt-20 lg:mt-24 w-full flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-stretch">
        {/* Left Content - Now with matching height */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <div className="mb-6 md:mb-8">
            <p className="text-[#00A3FF] text-sm sm:text-base md:text-lg font-medium mb-4 md:mb-6">Mobile App</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 md:mb-8 lg:mb-10">
              One app for everything
            </h2>
            <p className="text-[#AEAEAE] text-sm sm:text-base md:text-lg mb-6 md:mb-8">
              Keep an eye on your spending and savings, always. Get digital currency.
              Instantly buy gold and silver with real-time pricing.
            </p>
          </div>

          {/* Card 1 */}
          <div className="flex items-center bg-[#252434] rounded-lg p-4 sm:p-5 md:p-6 mb-6 md:mb-8">
            <div className="flex flex-col">
              <h2 className="font-bold text-lg sm:text-xl md:text-2xl text-white mb-2">Stay Connected</h2>
              <p className="text-[#AEAEAE] text-sm sm:text-base">
                Manage your spending, alongside your investments, wherever you are.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center bg-[#252434] rounded-lg p-4 sm:p-5 md:p-6">
            <div className="flex flex-col">
              <h2 className="font-bold text-lg sm:text-xl md:text-2xl text-white mb-2">Take an opportunity</h2>
              <p className="text-[#AEAEAE] text-sm sm:text-base">
                Buy gold, silver and digital currency in seconds, 24/7, or set your own price.
              </p>
            </div>
          </div>
        </div>

        {/* Right Image - Now matching left side height */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex items-center">
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[550px] rounded-xl overflow-hidden">
            <Image
              src={section}
              alt="NSG Mobile App Section"
              fill
              className="object-contain lg:object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
            />
          </div>
        </div>
      </div>


    </div>
  );
}
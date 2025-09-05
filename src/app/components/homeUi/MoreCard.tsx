import Image from "next/image";
import { ChevronRight } from "lucide-react";

interface Props {
  img: string;
  title: string;
  desc: string;
}

export default function MoreCard({ img, title, desc }: Props) {
  return (
    <div className="flex items-center  gap-6 bg-[#252434] rounded-2xl p-6 hover:bg-[#2f2e40] transition">
      {/* Image */}
      <div className="flex  rounded-lg overflow-hidden">
        <Image
          src={img}
          alt={title}
          width={80}
          height={80}
          className="object-contain w-36"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col  gap-3 flex-1">
        <h3 className="text-lg font-semibold text-white leading-tight">
          {title}
        </h3>
        <p className="text-sm text-[#AEAEAE] leading-relaxed">{desc}</p>

        {/* Learn More */}
        <button className="flex items-center gap-1 text-[#00A3FF] text-sm font-medium hover:underline w-fit">
          <span>Learn More</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

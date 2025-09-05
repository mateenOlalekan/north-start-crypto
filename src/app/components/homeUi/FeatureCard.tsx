import Image from "next/image";
import { ChevronRight } from "lucide-react";

interface Props {
  img: any;
  title: string;
  desc: string;
}

export default function FeatureCard({ img, title, desc }: Props) {
  return (
    <div className="relative flex flex-col gap-3 justify-start items-start bg-[#25243459] rounded-xl p-5 hover:shadow-lg hover:shadow-cyan-500/10 transition-all">
      <div className="absolute -top-3 -right-3">
        <Image src={img} alt={title} className="w-10 h-10" />
      </div>

      <h3 className="text-base font-semibold text-[#AEAEAE]">{title}</h3>
      <p className="text-xs md:text-sm text-gray-300">{desc}</p>

      <div className="flex items-center gap-1 text-[#00A3FF] cursor-pointer mt-1">
        <span className="text-sm">Learn</span>
        <ChevronRight className="w-3 h-3" />
      </div>
    </div>
  );
}

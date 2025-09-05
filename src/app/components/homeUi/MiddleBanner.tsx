import Image from "next/image";
import main from "../../../../public/image.jpg";

export default function MiddleBanner() {
  return (
    <div className="w-full text-center my-10 px-4 sm:px-6 md:px-12">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-10">
        Make your money work for you
      </h2>

      {/* Banner Image */}
      <div className="w-full max-w-6xl mx-auto overflow-hidden rounded-2xl shadow-lg">
        <Image
          src={main}
          alt="Investment Banner"
          className="w-full h-auto object-cover"
          priority
        />
      </div>
    </div>
  );
}

import Image from "next/image";
import phone from "../../../public/About/1.svg";
import person from "../../../public/About/2.svg";
import Home from "../../../public/About/3.svg";

export default function About() {
  return (
    <>
      <div className="flex flex-col w-full justify-center items-center">
        {/* Header Section */}
        <div className="flex justify-center items-center w-full bg-[#25243459]">
          <div className="flex flex-col py-18 lg:py-28 md:py-24 ">
            <h1 className="text-3xl lg:text-4xl md:text-5xl mb-4 text-center">
              About <span className="text-[#00A3FF]">NSG</span>
            </h1>
            <p className="text-[#AEAEAE] max-md:text-center">
              On a mission to accelerate the world&rsquo;s transition to
              sustainable money.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Left Column */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-blue-400 border-l-4 border-blue-400 pl-4">
                  Our Mission
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  As a Digitally-Managed Monetary System
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Built on the Blockchain
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Borderless Currency
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-white">
                  Our Mission
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  North Star Group shares a vision of a world where money is
                  honest, fair and backed by a true store of value, and the
                  system designed to reward everyone who participates.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  We have developed a new type of monetary system that directly
                  interfaces with the patchwork of traditional currencies
                  susceptible to inflation, weakening value and shortcut
                  channels to today&rsquo;s third parties. When more and more
                  money is printed and the value of that currency is eroded,
                  economies and individuals are left out after this happens once.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Lorem Ipsum
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Lorem Ipsum has been the industry&apos;s standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged. It
                  was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>

          {/* Industry Leaders Section */}
          <div className=" mb-16">
            <h2 className="text-2xl text-center md:text-4xl font-bold mb-8 text-white">
              Industry Leaders in Fully Allocated <br />
              Precious Metals
            </h2>
            <p className="text-gray-300 leading-relaxed max-w-4xl mx-auto">
              Lorem Ipsum has been the industry&apos;s standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>

          {/* Contact Information Section */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Name and Address */}
            <div className="text-center bg-[#25243459] rounded-xl p-10">
              <div className="flex flex-col">
                <div className="flex justify-center mb-4">
                  <Image src={Home} width={50} height={50} alt="Address" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Name and address
                </h3>
                <p className="text-gray-300">
                  Name and address, name and <br />
                  address name and address
                </p>
              </div>
            </div>

            {/* CEO */}
            <div className="text-center bg-[#25243459] rounded-xl p-10">
              <div className="flex flex-col">
                <div className="flex justify-center mb-4">
                  <Image src={person} width={50} height={50} alt="CEO" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">CEO</h3>
                <p className="text-gray-300">Chris Rodriguez</p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="text-center bg-[#25243459] rounded-xl p-10">
              <div className="flex flex-col">
                <div className="flex justify-center mb-4">
                  <Image src={phone} width={50} height={50} alt="Contact" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Contact Information
                </h3>
                <p className="text-gray-300">
                  +1 617 3600 0166 <br />
                  northstargroup@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import Logo from "../../../../public/logo.svg";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1B1B27] border-t border-gray-800">
      <div className="flex flex-col py-12">
        {/* Section Header */}
        <div className="w-full max-w-screen-xl mx-auto px-4">
          <h2 className="text-white border-b border-gray-700 pb-3 mb-8 text-lg md:text-xl lg:text-2xl font-bold tracking-wide">
            North Star Group
          </h2>
        </div>

        {/* Main Grid */}
        <div className="w-full max-w-screen-xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Logo and Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Image
                src={Logo}
                alt="Site Logo"
                width={70}
                height={70}
                priority
              />
            </div>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
              Empowering financial solutions with innovative products and
              cutting-edge technology for the modern world.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm md:text-base">
              Products
            </h3>
            <ul className="space-y-2 text-sm md:text-base text-gray-300">
              {[
                "NSG Money",
                "Mobile App",
                "NSG Card",
                "Hardware Devices",
                "NSG Mint",
                "NSG Exchange",
                "EPD",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="relative pb-1 transition-colors duration-300 
                      after:content-[''] after:absolute after:left-0 after:bottom-0 
                      after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 
                      hover:after:w-full hover:text-blue-600"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm md:text-base">
              Resources
            </h3>
            <ul className="space-y-2 text-sm md:text-base text-gray-300">
              {["Fees", "Projects", "Roadmaps", "Transaction Explorer"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="relative pb-1 transition-colors duration-300 
                        after:content-[''] after:absolute after:left-0 after:bottom-0 
                        after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 
                        hover:after:w-full hover:text-blue-600"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm md:text-base">
              Company
            </h3>
            <ul className="space-y-2 text-sm md:text-base text-gray-300">
              {[
                "About Us",
                "Team",
                "Media Centre",
                "Testimonials",
                "Contact Us",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="relative pb-1 transition-colors duration-300 
                      after:content-[''] after:absolute after:left-0 after:bottom-0 
                      after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 
                      hover:after:w-full hover:text-blue-600"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="w-full max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 mt-12 pt-10 border-t border-gray-800">
          {/* Subscribe */}
          <div className="md:col-span-2">
            <div className="md:col-span-1">
            <h2 className="font-semibold text-white mb-4 text-sm md:text-base">
              Get The Latest Updates
            </h2>
            <div className="flex   w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="col-span-1 text-white  text-sm md:text-base bg-[#13131D] border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <button className="col-span-2 bg-[#00A3FF] text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition text-sm md:text-base">
                Subscribe
              </button>
            </div>
            </div>

          </div>

          {/* Downloads & Support */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-white mb-4 text-sm md:text-base">
                Downloads
              </h3>
              <ul className="space-y-2 text-sm md:text-base text-gray-300">
                {["Brand Resources", "Documents"].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="relative pb-1 transition-colors duration-300 
                        after:content-[''] after:absolute after:left-0 after:bottom-0 
                        after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 
                        hover:after:w-full hover:text-blue-600"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4 text-sm md:text-base">
                Support
              </h3>
              <ul className="space-y-2 text-sm md:text-base text-gray-300">
                {["Knowledge Base", "Video Lessons", "User Guides"].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="relative pb-1 transition-colors duration-300 
                          after:content-[''] after:absolute after:left-0 after:bottom-0 
                          after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 
                          hover:after:w-full hover:text-blue-600"
                      >
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="w-full max-w-screen-xl mx-auto px-4 mt-10 border-t border-gray-800 pt-6">
  <div className="flex flex-col sm:flex-row flex-wrap justify-center sm:justify-between items-center gap-3 text-center sm:text-left">
    <p className="text-xs md:text-sm text-gray-500">
      © 2025 North Star Group
    </p>
    <p className="text-xs md:text-sm text-gray-500 cursor-pointer hover:text-white transition">
      Terms of Use
    </p>
    <p className="text-xs md:text-sm text-gray-500 cursor-pointer hover:text-white transition">
      Privacy Policy
    </p>
    <p className="text-xs md:text-sm text-gray-500 cursor-pointer hover:text-white transition">
      Offering Memorandum PDF
    </p>
    <p className="text-xs md:text-sm text-gray-500 cursor-pointer hover:text-white transition">
      Cashback Terms
    </p>
  </div>
</div>

      </div>
    </footer>
  );
}

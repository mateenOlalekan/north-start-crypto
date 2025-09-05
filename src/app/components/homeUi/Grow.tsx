import Image from "next/image";
import bgImage from "../../../../public/About.jpg"
export default function Growth(){
    return(
        <section className="relative w-full  flex items-center justify-center py-20">
        {/* Background Image */}
        <Image
          src={bgImage}
          alt="Background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
  
        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl px-6 flex  max-md:flex-col  justify-between gap-10">
          
          {/* Left Text */}
          <div className="flex flex-col  lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#00A3FF] leading-tight">
              About US
            </h2>
            <p className="text-[#E5E5E5] mt-6 text-base md:text-lg max-w-lg  lg:mx-0">
            North Star Group shares a vision of a world where money is honest, fair and backed by a true store of value, within a system designed to reward everyone who participates.
            </p>
            <button className="bg-[#00A3FF] w-fit px-4 py-2 rounded-xl my-4 md:mb-6">Read More</button>
          </div>
  
          {/* Right Side Flex-Col */}
          <div className="flex flex-col gap-6  lg:text-left">
            <div className="mb-4 md:mb-6">
              <h3 className="text-3xl font-semibold text-[#00A3FF] mb-6">500+</h3>
              <p className="text-[#E5E5E5]">
                Over 500 account for NSG
              </p>
            </div>
  
            <div className="mb-4 md:mb-6">
              <h3 className="text-3xl font-semibold text-[#00A3FF] mb-6">40+</h3>
              <p className="text-[#E5E5E5]">
                Manage your investments anytime, anywhere with our secure app.
              </p>
            </div>
  
            <div className="mb-4 md:mb-6">
              <h3 className="text-xl font-semibold text-[#00A3FF] mb-6">Global Payments</h3>
              <p className="text-[#E5E5E5]">
                Spend your assets worldwide with ease using our NSG card.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
    
}
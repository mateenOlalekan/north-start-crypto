import Image from "next/image";
import Logo from "../../../../public/main.png";

 export default function HomePage() {
   return (
     <div className="flex items-center">
       {/* Hero Section */}
       <div className="w-full py-8 sm:py-12 lg:py-8 xl:py-10">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
             {/* Content */}
             <div className="flex flex-col justify-center text-center md:text-left lg:py-12 lg:text-left xl:w-5/12 xl:py-12">
             <p className="text-[#00A3FF] uppercase  font-semibold mb-4 md:mb-8 md:text-lg xl:text-xl">
                   YOUR MONEY, YOUR CHOICE
                 </p>

               <div className="">
                 <h1 className="text-4xl font-bold text-white sm:text-7xl mb-4 md:mb-8 md:text-7xl">
                   Manage your money with
                 </h1>
                 <div className="flex justify-center lg:justify-start items-center gap-2 sm:gap-3 text-3xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-8 font-bold flex-wrap">
                   <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                     Gold
                   </span>
                   <span className="text-white">&</span>
                   <span className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
                     Silver
                   </span>
                 </div>
               </div>
              
               <p className="mb-4 md:mb-8 leading-relaxed text-white lg:w-4/5 xl:text-lg">
                 Spend and save in physical gold and silver. Buy digital currency.
                 Earn rewards for every transaction.
               </p>

              <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
                <button className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm  outline-none ring-indigo-300  text-white font-semibold  sm:px-6 sm:py-3  transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 text-sm sm:text-base">
                  Join Group
                </button>
                <button className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white font-semibold px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                  About Us
                </button>
              </div>
             </div>

             {/* Image */}
              <div className="h-48 overflow-hidden rounded-lg  shadow-lg lg:h-auto xl:w-5/12">
              <Image 
                src={Logo} 
                alt="Photo by Fakurian Design" 
                width={1000}
                height={500}
                loading="lazy"  className="h-full w-full object-cover object-center" 
              />
              </div>
           </section>
         </div>
       </div>
     </div>
   );
 }




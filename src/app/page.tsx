import MiddleBanner from "../app/components/homeUi/MiddleBanner";
import Features from "../app/components/homeUi/Feature";
import MoreSection from "../app/components/homeUi/MoreSection";
import Main from "./components/homeUi/Main"; 
import Growth from "./components/homeUi/Grow";  
import Grid from "./components/homeUi/Grid";
import Cta from "./components/homeUi/Cta";

export default function HomePage() {
  return (
    <section className="w-full ">
      <Main/>
      {/* Middle Image */}
      <MiddleBanner />

      {/* Features */}
      <Features />

      {/* More Section */}
      <MoreSection />
      <Growth/>
      <Grid/>
      <Cta/>
    </section>
  );
}

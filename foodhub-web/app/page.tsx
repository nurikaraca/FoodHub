import Footer from "./sections/Footer";
import Hero from "./sections/Hero";

import BusinessSection from "./sections/BusinessSection";


export default function Home() {
  return (
    <>
     
      <Hero />
      <div className="p-8">
        <BusinessSection />
       <Footer />
      </div>
    </>
  );
}

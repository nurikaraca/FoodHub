import Footer from "./components/Footer";
import Hero from "./components/Hero";
import CustomNavbar from "./components/Navbar";
import BusinessSection from "./sections/BusinessSection";


export default function Home() {
  return (
    <>
      <CustomNavbar />
      <Hero />
      <div className="p-8">
        <BusinessSection />
       <Footer />
      </div>
    </>
  );
}

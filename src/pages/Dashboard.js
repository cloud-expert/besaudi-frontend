import Advantage from "../components/Advantage";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Usage from "../components/Usage";
import { useRef } from "react";
import { getCurrentUser } from "../services/auth.service";

export default function DashBoard() {
  const sectionref = useRef(null);
  return (
    <div className="bg-[#16082E] px-4 md:px-8  lg:px-16 relative  overflow-hidden">
      <div
        className="absolute w-[600px] h-[600px] top-[-91px] left-[-232px] 
      rounded-[50%] bg-gradient-to-br from-purple-600 opacity-30 blur-3xl -z-50"
      ></div>

      <div
        className="absolute w-[600px] h-[600px] top-[663px] -right-72
      rounded-[50%] bg-gradient-to-br from-purple-900 opacity-30 blur-3xl overflow-hidden -z-50"
      ></div>

      <div
        className="absolute w-[600px] h-[600px] top-[45px] -right-96
      rounded-[50%] bg-gradient-to-br from-purple-900 opacity-30 blur-3xl -z-50"
      ></div>

      <div
        className="w-[600px] h-[600px] bottom-0 -right-80 absolute
      rounded-[50%] bg-gradient-to-br from-purple-900 opacity-30 blur-3xl -z-50"
      ></div>

      <Navbar isLogged={!!getCurrentUser()} />
      <Hero onSectionClick={{ section: sectionref }} />
      <Usage sectionref={sectionref} />
      <Advantage />
      <Footer />
    </div>
  );
}

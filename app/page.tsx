import Image from "next/image";
import Hero from "./components/Hero";
import { FloatingNav } from "./components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import Grid from "./components/Grid";
import RecentProjects from "./components/RecentProjects";
import { navItems } from "@/data";
import Clients from "./components/Clients";
import Experience from "./components/ui/Experience";
import Approach from "./components/Approach";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main className="relative bg-[#13162d] text-white flex justify-center items-center flex-col
      mx-auto sm:px-10 overflow-clip">
      <div className="max-w-7xl w-full">

        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />

      </div>
    </main>

  );
}

import Navbar from "@/app/components/Navbar";
import Profile from "@/app/components/Profile";
import Skills from "@/app/components/Skills";
import Honors from "@/app/components/Honors";
import Projects from "@/app/components/Projects";
import Experience from "@/app/components/Experience";
import MyCVs from "@/app/components/MyCVs";
import Contact from "@/app/components/Contact";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <Navbar />
      <Profile />
      <Skills />
      <Experience />
      <Projects />
      <Honors />
      <MyCVs />
      <Contact />
      <Footer/>
    </div>
  );
}

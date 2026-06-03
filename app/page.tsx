import Navbar from "@/components/Navbar";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen text-white relative">
      <Navbar />
      <ScrollyCanvas />
      <Projects />
      <Education />
      <Contact />
    </main>
  );
}

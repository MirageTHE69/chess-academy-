import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Features } from "@/components/features";
import { Statistics } from "@/components/statistics";
import { Tournaments } from "@/components/tournaments";
import { TopStudents } from "@/components/top-students";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Statistics />
        <Tournaments />
        <TopStudents />
      </main>
      <Footer />
    </div>
  );
}

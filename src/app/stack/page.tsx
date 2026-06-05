import Header from "@/components/Header";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";

export default function StackPage() {
  return (
    <div className="min-h-screen bg-[#f8f6f5] flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center pt-[73px]">
        <TechStack />
      </main>
      <Footer />
    </div>
  );
}
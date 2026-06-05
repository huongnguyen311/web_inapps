// src/app/contact/page.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact Us — InApps Technology",
  description: "Get in touch with InApps Technology. Schedule a quick call and get a unique proposal tailored to your project.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#fff" }}>
      <Header forceDark />
      <main className="flex-1 flex flex-col">
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsappButton";

export default function Page() {
  return (
    <main className="w-full overflow-x-hidden">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* SERVICES */}
      <Services />

      {/* FAQ */}
      <Faq />

      {/* CONTACT */}
      <Contact />

      {/* FOOTER */}
      <Footer />
      <WhatsAppButton />

    </main>
  );
}
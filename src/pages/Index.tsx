import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HighlightsSection from "@/components/HighlightsSection";
import MenuSection from "@/components/MenuSection";
import DocinhosSection from "@/components/DocinhosSection";
import EncomendasSection from "@/components/EncomendasSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <HighlightsSection />
        <MenuSection />
        <DocinhosSection />
        <EncomendasSection />
        <AboutSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default Index;

import HeroSection from '@/components/home/HeroSection';
import ProductCategoryShowcase from '@/components/home/ProductCategoryShowcase';
import AboutSection from '@/components/home/AboutSection';
import Highlights from '@/components/home/Highlights';
import HomeInquiryBanner from '@/components/home/HomeInquiryBanner';
import WashBasinShowcase from '@/components/home/WashBasinShowcase';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Highlights />
      <ProductCategoryShowcase />
      <WashBasinShowcase />
      <HomeInquiryBanner />
    </>
  );
}

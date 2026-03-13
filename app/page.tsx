import HeroSection from '@/components/home/HeroSection';
import HomeInquiryBanner from '@/components/home/HomeInquiryBanner';
import Highlights from '@/components/home/Highlights';
import AboutSection from '@/components/home/AboutSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Highlights />
      <HomeInquiryBanner />
    </>
  );
}

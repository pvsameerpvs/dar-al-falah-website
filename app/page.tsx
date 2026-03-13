import HeroSection from '@/components/home/HeroSection';
import HomeInquiryBanner from '@/components/home/HomeInquiryBanner';
import Highlights from '@/components/home/Highlights';
import ProductCategories from '@/components/home/ProductCategories';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductCategories />
      <Highlights />
      <HomeInquiryBanner />
    </>
  );
}

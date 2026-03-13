import PageIntro from '@/components/shared/PageIntro';
import AboutContentSection from '@/components/about/AboutContentSection';
import { siteConfig } from '@/data/site';

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About Dar Al Falah"
        title="Built to present a dependable Dubai supplier with clarity and confidence."
        description={`${siteConfig.companyName} is positioned as a trusted source for sanitary ware, ceramic tiles, building material, plumbing items, and hardware. The design language stays light, clean, and business-ready.`}
      />
      <AboutContentSection />
    </>
  );
}

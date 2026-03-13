import PageIntro from '@/components/shared/PageIntro';
import ServicesGrid from '@/components/services/ServicesGrid';

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title="Service sections that support trust, support enquiries, and explain how the company works."
        description="Instead of only listing items, this page shows Dar Al Falah as a responsive business partner for supply, guidance, and project support."
      />
      <ServicesGrid />
    </>
  );
}

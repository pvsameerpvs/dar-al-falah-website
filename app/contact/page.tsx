import PageIntro from '@/components/shared/PageIntro';
import ContactDetailsSection from '@/components/contact/ContactDetailsSection';

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact us"
        title="Simple enquiry page with direct business details and a clean quote request form."
        description="This page is made to help customers quickly call, email, or send a product enquiry to Dar Al Falah."
      />
      <ContactDetailsSection />
    </>
  );
}

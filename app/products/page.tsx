import PageIntro from '@/components/shared/PageIntro';
import ProductCategoryGrid from '@/components/products/ProductCategoryGrid';

export default function ProductsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Our products"
        title="Structured product categories ready for future catalogue expansion."
        description="This page gives Dar Al Falah a clear digital showroom. Product images, supplier brands, and downloadable brochures can be added later without changing the overall layout."
      />
      <ProductCategoryGrid />
    </>
  );
}

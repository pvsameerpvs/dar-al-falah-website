import { Suspense } from 'react';
import SanitaryWareCatalog from '@/components/products/SanitaryWareCatalog';
import SanitaryWareCatalogContent from '@/components/products/SanitaryWareCatalogContent';

export default function SanitaryWarePage() {
  return (
    <Suspense fallback={<SanitaryWareCatalogContent />}>
      <SanitaryWareCatalog />
    </Suspense>
  );
}

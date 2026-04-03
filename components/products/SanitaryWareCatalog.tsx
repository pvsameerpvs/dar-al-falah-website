'use client';

import { useSearchParams } from 'next/navigation';
import SanitaryWareCatalogContent from '@/components/products/SanitaryWareCatalogContent';

export default function SanitaryWareCatalog() {
  const searchParams = useSearchParams();

  return <SanitaryWareCatalogContent currentTab={searchParams.get('tab')} />;
}

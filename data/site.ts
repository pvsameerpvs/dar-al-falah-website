import type { SvgIconComponent } from '@mui/icons-material';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import HardwareRoundedIcon from '@mui/icons-material/HardwareRounded';
import PlumbingRoundedIcon from '@mui/icons-material/PlumbingRounded';
import SanitizerRoundedIcon from '@mui/icons-material/SanitizerRounded';
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';

export type Category = {
  title: string;
  description: string;
  icon: SvgIconComponent;
  image: string;
  details: string;
};

export type Service = {
  title: string;
  description: string;
  icon: SvgIconComponent;
};

export const siteConfig = {
  companyName: 'Dar Al Falah',
  tagline: 'Trusted building material supplier in Dubai',
  email: ['anwarpanja1986@gmail.com', 'daftuae@gmail.com'],
  phones: ['0567345748', '0542993832', '(04) 577 2025'],
  address: ['Art Tower', 'Mezzanine Floor M2-B56', 'Al Raffa, Dubai'],
  heroDescription:
    'Dar Al Falah supplies sanitary ware, ceramic tiles, plumbing items, hardware, and essential building materials for residential, commercial, and renovation projects across Dubai.',
  aboutDescription:
    'We focus on dependable supply, practical product guidance, and smooth service for contractors, builders, traders, and property owners who need quality materials delivered with care.'
};

export const categories: Category[] = [
  {
    title: 'Sanitary Ware',
    description: 'Modern, durable fittings and essentials selected for functionality, hygiene, and everyday use.',
    icon: SanitizerRoundedIcon,
    image: '/sanitary-ware.png',
    details: 'Our sanitary ware collection includes everything from modern bathroom sinks and elegant faucets to luxury bathtubs and shower sets. We provide high-quality, durable components designed to enhance both the aesthetics and functionality of your space.'
  },
  {
    title: 'Ceramic Tiles',
    description: 'Wall and floor tile options that balance clean design, durability, and easy maintenance.',
    icon: GridViewRoundedIcon,
    image: '/ceramic-tiles.jpg',
    details: 'Explore our wide selection of ceramic tiles ideal for living rooms, kitchens, bathrooms, and outdoor areas. Our tiles are highly durable, easy to clean, and come in various styles to match your design vision perfectly.'
  },
  {
    title: 'Building Material',
    description: 'Core material support for fit-out work, maintenance requirements, and ongoing site demand.',
    icon: StorefrontRoundedIcon,
    image: '/building-material.png',
    details: 'We supply essential building materials including cement, concrete, blocks, steel reinforcements, and insulation materials. Whether it is a small renovation or a large commercial project, we ensure timely delivery of quality construction supplies.'
  },
  {
    title: 'Plumbing Items',
    description: 'Reliable plumbing accessories and utility products for repair, replacement, and installation.',
    icon: PlumbingRoundedIcon,
    image: '/plumbingitems.png',
    details: 'From PVC pipes and fittings to water heaters, valves, and drainage systems, our plumbing selection is comprehensive. We supply reliable, standardized plumbing items to ensure leak-free and robust piping solutions for any property.'
  },
  {
    title: 'Hardware',
    description: 'Practical hardware solutions for daily site needs, finishing tasks, and maintenance work.',
    icon: HardwareRoundedIcon,
    image: '/Hardware.png',
    details: 'Our hardware collection answers daily site needs with a robust range of hand tools, power tools, fasteners, screws, locks, and safety equipment. Built for durability, these tools ensure tasks are completed efficiently and safely.'
  }
];

export const services: Service[] = [
  {
    title: 'Product Supply',
    description: 'A focused range of materials and fixtures for ongoing project requirements and daily shop purchases.',
    icon: LocalShippingRoundedIcon
  },
  {
    title: 'Project Support',
    description: 'Guidance on selecting suitable sanitary ware, tile, plumbing, and hardware products for the job.',
    icon: SupportAgentRoundedIcon
  },
  {
    title: 'Quality Commitment',
    description: 'We aim to offer dependable products that support durability, appearance, and long-term value.',
    icon: VerifiedRoundedIcon
  },
  {
    title: 'Trade Counter Experience',
    description: 'Fast assistance for contractors, maintenance teams, and walk-in customers looking for the right items.',
    icon: ConstructionRoundedIcon
  }
];

export const stats = [
  { label: 'Core categories', value: '05+' },
  { label: 'Customer-first support', value: '100%' },
  { label: 'Dubai location', value: '01' }
];

export const whyChooseUs = [
  'Clear product categories for quick purchasing',
  'Friendly support for contractors and retail buyers',
  'Light, modern presentation built to inspire trust',
  'Contact-ready website designed to generate enquiries'
];

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
    icon: SanitizerRoundedIcon
  },
  {
    title: 'Ceramic Tiles',
    description: 'Wall and floor tile options that balance clean design, durability, and easy maintenance.',
    icon: GridViewRoundedIcon
  },
  {
    title: 'Building Material',
    description: 'Core material support for fit-out work, maintenance requirements, and ongoing site demand.',
    icon: StorefrontRoundedIcon
  },
  {
    title: 'Plumbing Items',
    description: 'Reliable plumbing accessories and utility products for repair, replacement, and installation.',
    icon: PlumbingRoundedIcon
  },
  {
    title: 'Hardware',
    description: 'Practical hardware solutions for daily site needs, finishing tasks, and maintenance work.',
    icon: HardwareRoundedIcon
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

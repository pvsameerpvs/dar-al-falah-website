import Link from 'next/link';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { categories, siteConfig } from '@/data/site';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' }
];

export default function Footer() {
  return (
    <Box component="footer" sx={{ pt: 8, pb: 4 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 6,
            backgroundColor: 'rgba(255,255,255,0.9)',
            border: '1px solid rgba(81,112,138,0.12)'
          }}
        >
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="h5" fontWeight={800} color="primary.main" gutterBottom>
                {siteConfig.companyName}
              </Typography>
              <Typography color="text.secondary" sx={{ maxWidth: 380 }}>
                Light, modern web presence for a Dubai-based supplier of sanitary ware, ceramic tiles,
                plumbing items, hardware, and building materials.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <Typography variant="h6" gutterBottom>
                Quick Links
              </Typography>
              <Stack spacing={1.1}>
                {quickLinks.map((item) => (
                  <Typography key={item.href} component={Link} href={item.href} color="text.secondary">
                    {item.label}
                  </Typography>
                ))}
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 2 }}>
              <Typography variant="h6" gutterBottom>
                Product Range
              </Typography>
              <Stack spacing={1.1}>
                {categories.map((item) => (
                  <Typography key={item.title} color="text.secondary">
                    {item.title}
                  </Typography>
                ))}
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <Typography variant="h6" gutterBottom>
                Contact
              </Typography>
              <Stack spacing={1.4}>
                <Stack direction="row" spacing={1} alignItems="flex-start">
                  <CallRoundedIcon fontSize="small" color="primary" />
                  <Typography color="text.secondary">{siteConfig.phones.join(' / ')}</Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="flex-start">
                  <EmailRoundedIcon fontSize="small" color="primary" />
                  <Typography color="text.secondary">{siteConfig.email.join(' / ')}</Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="flex-start">
                  <LocationOnRoundedIcon fontSize="small" color="primary" />
                  <Typography color="text.secondary">{siteConfig.address.join(', ')}</Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>

          <Divider sx={{ my: 3 }} />
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

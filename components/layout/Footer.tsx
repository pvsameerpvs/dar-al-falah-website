import Link from 'next/link';
import Image from 'next/image';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
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
  { label: 'Contact', href: '/contact' }
];

const contactItems = [
  {
    icon: CallRoundedIcon,
    label: 'Call',
    value: siteConfig.phones.join(' / ')
  },
  {
    icon: EmailRoundedIcon,
    label: 'Email',
    value: siteConfig.email.join(' / ')
  },
  {
    icon: LocationOnRoundedIcon,
    label: 'Visit',
    value: siteConfig.address.join(', ')
  }
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        mt: { xs: 5, md: 8 },
        color: '#fff',
        background:
          'radial-gradient(circle at top left, rgba(229,57,53,0.28), transparent 26%), linear-gradient(135deg, #121212 0%, #1a1a1a 48%, #7f1d1d 100%)',
        overflow: 'hidden'
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(255,255,255,0.03), transparent 24%), radial-gradient(circle at bottom right, rgba(255,255,255,0.08), transparent 30%)',
          pointerEvents: 'none'
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: { xs: 6, md: 7 } }}>
        <Grid container spacing={{ xs: 4, md: 5 }}>
          <Grid size={{ xs: 12, md: 4.5 }}>
            <Stack spacing={2.2}>
              <Box sx={{ mb: 1 }}>
                <Image
                  src="/logo-2.png"
                  alt="Dar Al Falah Logo"
                  width={200}
                  height={80}
                  style={{ objectFit: 'contain' }}
                />
              </Box>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: '2rem', md: '2.8rem' },
                  lineHeight: 0.98,
                  textTransform: 'uppercase',
                  maxWidth: 420
                }}
              >
                Reliable building material support from Dubai.
              </Typography>
              <Typography sx={{ color: 'rgba(255,255,255,0.74)', maxWidth: 430, lineHeight: 1.75 }}>
                Dar Al Falah supplies sanitary ware, ceramic tiles, plumbing items, hardware, and building material
                products for trade, fit-out, and renovation requirements.
              </Typography>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 2.5 }}>
            <Stack spacing={1.5}>
              <Typography sx={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                Quick Links
              </Typography>
              <Stack spacing={1.15}>
                {quickLinks.map((item) => (
                  <Box
                    key={item.href}
                    component={Link}
                    href={item.href}
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 1,
                      color: 'rgba(255,255,255,0.76)',
                      transition: 'color 0.2s ease, transform 0.2s ease',
                      '&:hover': {
                        color: '#fff',
                        transform: 'translateX(4px)'
                      }
                    }}
                  >
                    <ArrowOutwardRoundedIcon sx={{ fontSize: 16 }} />
                    <Typography sx={{ fontSize: '0.98rem' }}>{item.label}</Typography>
                  </Box>
                ))}
              </Stack>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 2.5 }}>
            <Stack spacing={1.5}>
              <Typography sx={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                Product Range
              </Typography>
              <Stack spacing={1.15}>
                {categories.map((item) => (
                  <Typography key={item.title} sx={{ color: 'rgba(255,255,255,0.76)' }}>
                    {item.title}
                  </Typography>
                ))}
              </Stack>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 2.5 }}>
            <Stack spacing={1.5}>
              <Typography sx={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                Contact
              </Typography>
              <Stack spacing={1.5}>
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Stack key={item.label} direction="row" spacing={1.4} alignItems="flex-start">
                      <Box
                        sx={{
                          width: 38,
                          height: 38,
                          borderRadius: 0,
                          bgcolor: 'rgba(255,255,255,0.08)',
                          display: 'grid',
                          placeItems: 'center',
                          color: '#fff',
                          flexShrink: 0
                        }}
                      >
                        <Icon sx={{ fontSize: 19 }} />
                      </Box>
                      <Box>
                        <Typography sx={{ color: 'rgba(255,255,255,0.56)', fontSize: '0.82rem', mb: 0.3 }}>
                          {item.label}
                        </Typography>
                        <Typography sx={{ color: 'rgba(255,255,255,0.84)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                          {item.value}
                        </Typography>
                      </Box>
                    </Stack>
                  );
                })}
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: { xs: 3, md: 4 }, borderColor: 'rgba(255,255,255,0.12)' }} />

       
      </Container>
    </Box>
  );
}

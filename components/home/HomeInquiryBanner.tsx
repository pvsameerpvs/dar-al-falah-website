import Link from 'next/link';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { siteConfig } from '@/data/site';

export default function HomeInquiryBanner() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#fff' }}>
      <Container maxWidth="lg">
        <Paper
          className="overflow-hidden"
          sx={{
            position: 'relative',
            p: { xs: 3, md: 5 },
            borderRadius: 0,
            background: 'linear-gradient(135deg, #c62828 0%, #e53935 52%, #8e1b1b 100%)',
            border: '1px solid rgba(255,255,255,0.14)',
            boxShadow: '0 28px 70px rgba(164, 28, 28, 0.32)'
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(circle at top right, rgba(255,255,255,0.22), transparent 28%), radial-gradient(circle at bottom left, rgba(0,0,0,0.18), transparent 38%)',
              pointerEvents: 'none'
            }}
          />

          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={{ xs: 3.5, md: 5 }}
            alignItems={{ xs: 'flex-start', md: 'center' }}
            justifyContent="space-between"
            sx={{ position: 'relative', zIndex: 1 }}
          >
            <Stack spacing={2.2} sx={{ maxWidth: 760 }}>
              <Chip
                label="Get in touch"
                sx={{
                  alignSelf: 'flex-start',
                  color: '#fff',
                  borderColor: 'rgba(255,255,255,0.4)',
                  bgcolor: 'rgba(255,255,255,0.08)',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase'
                }}
                variant="outlined"
              />
              <Typography
                variant="h3"
                sx={{
                  color: '#fff',
                  fontSize: { xs: '2rem', md: '3rem' },
                  lineHeight: 1.05,
                  textTransform: 'uppercase',
                  maxWidth: 720
                }}
              >
                Need sanitary ware, tiles, plumbing items, or hardware for your next project?
              </Typography>
              <Typography
                sx={{
                  color: 'rgba(255,255,255,0.84)',
                  maxWidth: 700,
                  fontSize: { xs: '1rem', md: '1.05rem' },
                  lineHeight: 1.75
                }}
              >
                Contact {siteConfig.companyName} for quick assistance, product availability, and project-ready support
                from our Dubai location.
              </Typography>
            </Stack>

            <Stack spacing={2} alignItems={{ xs: 'stretch', md: 'flex-start' }} sx={{ minWidth: { md: 260 } }}>
              <Stack spacing={0.8}>
                <Typography sx={{ color: 'rgba(255,255,255,0.68)', textTransform: 'uppercase', letterSpacing: '0.14em', fontSize: '0.78rem' }}>
                  Call us
                </Typography>
                <Typography sx={{ color: '#fff', fontSize: { xs: '1.45rem', md: '1.7rem' }, fontWeight: 700 }}>
                  {siteConfig.phones[2] || siteConfig.phones[0]}
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.76)' }}>{siteConfig.address.join(', ')}</Typography>
              </Stack>

              <Button
                component={Link}
                href="/contact"
                variant="contained"
                endIcon={<ArrowForwardRoundedIcon />}
                sx={{
                  alignSelf: { xs: 'stretch', md: 'flex-start' },
                  bgcolor: '#fff',
                  color: '#c62828',
                  px: 3.5,
                  py: 1.4,
                  borderRadius: 0,
                  fontWeight: 800,
                  boxShadow: '0 12px 30px rgba(0,0,0,0.18)',
                  '&:hover': {
                    bgcolor: '#fff5f5',
                    boxShadow: '0 16px 34px rgba(0,0,0,0.24)'
                  }
                }}
              >
                Contact Us
              </Button>
            </Stack>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}

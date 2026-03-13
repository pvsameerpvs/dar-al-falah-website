import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ContactDetailsSection from '@/components/contact/ContactDetailsSection';
import { siteConfig } from '@/data/site';

const accent = '#E53935';

export default function ContactPage() {
  return (
    <>
      <Box
        sx={{
          pt: { xs: 7, md: 9 },
          pb: { xs: 5, md: 7 },
          background:
            'radial-gradient(circle at top left, rgba(229,57,53,0.14), transparent 28%), linear-gradient(180deg, #ffffff 0%, #fff7f7 100%)'
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="stretch">
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={2.3} justifyContent="center" sx={{ height: '100%' }}>
                <Chip
                  label="Contact Us"
                  variant="outlined"
                  sx={{
                    width: 'fit-content',
                    color: accent,
                    borderColor: 'rgba(229,57,53,0.28)',
                    fontWeight: 700,
                    fontSize: '0.72rem',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase'
                  }}
                />
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '1.95rem', md: '3.25rem' },
                    lineHeight: 1,
                    textTransform: 'uppercase',
                    maxWidth: 620
                  }}
                >
                  Direct enquiry page with a stronger red and white business presentation.
                </Typography>
                <Typography
                  sx={{
                    maxWidth: 600,
                    color: 'rgba(17,17,17,0.72)',
                    fontSize: { xs: '0.94rem', md: '1rem' },
                    lineHeight: 1.7
                  }}
                >
                  Call, email, or send a quote request to {siteConfig.companyName}. This page is designed to help
                  contractors, project teams, and walk-in buyers reach you quickly.
                </Typography>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  position: 'relative',
                  minHeight: { xs: 340, md: 440 },
                  p: { xs: 2, md: 2.5 },
                  borderRadius: 4,
                  background: 'linear-gradient(135deg, #ffffff 0%, #ffe7e7 100%)',
                  border: '1px solid rgba(229,57,53,0.2)',
                  boxShadow: '0 28px 70px rgba(229,57,53,0.14)'
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: 18,
                    left: 18,
                    px: 1.4,
                    py: 1,
                    bgcolor: accent,
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '0.72rem',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    zIndex: 2
                  }}
                >
                  Contact Desk
                </Box>

                <Box
                  sx={{
                    height: '100%',
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: '1.1fr 0.9fr' },
                    gap: 2
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      overflow: 'hidden',
                      borderRadius: 4,
                      minHeight: { xs: 180, md: '100%' },
                      bgcolor: '#fff'
                    }}
                  >
                    <Box
                      component="img"
                      src="/hero1.jpg"
                      alt="Dar Al Falah contact and showroom"
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        display: 'block'
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(180deg, rgba(0,0,0,0.08), rgba(0,0,0,0.58))'
                      }}
                    />
                    <Box sx={{ position: 'absolute', left: 18, bottom: 18, color: '#fff' }}>
                      <Typography sx={{ fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.72)' }}>
                        Dubai Office
                      </Typography>
                      <Typography variant="h5">{siteConfig.companyName}</Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      p: 2.2,
                      borderRadius: 4,
                      bgcolor: '#111',
                      color: '#fff',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Box>
                      <Typography sx={{ fontSize: '0.74rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', mb: 1 }}>
                        Quick Contact
                      </Typography>
                      <Stack spacing={1.2}>
                        <Typography sx={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.88)' }}>
                          {siteConfig.phones[2] || siteConfig.phones[0]}
                        </Typography>
                        <Typography sx={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.88)' }}>
                          {siteConfig.email[0]}
                        </Typography>
                        <Typography sx={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.6 }}>
                          {siteConfig.address.join(', ')}
                        </Typography>
                      </Stack>
                    </Box>
                    <Box
                      sx={{
                        mt: 2,
                        p: 1.5,
                        borderRadius: 4,
                        bgcolor: 'rgba(255,255,255,0.08)'
                      }}
                    >
                      <Typography sx={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.72)' }}>
                        Use the form below for product enquiry, pricing requests, or project supply support.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <ContactDetailsSection />
    </>
  );
}

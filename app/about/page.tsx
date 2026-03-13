import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AboutContentSection from '@/components/about/AboutContentSection';
import { categories, siteConfig } from '@/data/site';

const accent = '#E53935';

export default function AboutPage() {
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
                  label="About Dar Al Falah"
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
                  Built around project supply, dependable service, and a clear product story.
                </Typography>
                <Typography
                  sx={{
                    maxWidth: 590,
                    color: 'rgba(17,17,17,0.72)',
                    fontSize: { xs: '0.94rem', md: '1rem' },
                    lineHeight: 1.7
                  }}
                >
                  {siteConfig.companyName} is positioned as a practical Dubai supplier for sanitary ware, ceramic
                  tiles, building material, plumbing items, and hardware. The page uses real project-style imagery
                  and a tighter red-and-white presentation instead of a generic about layout.
                </Typography>
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                    gap: 1.2,
                    maxWidth: 380
                  }}
                >
                  <Box sx={{ p: 1.4, borderRadius: 4, bgcolor: '#fff', border: '1px solid rgba(229,57,53,0.16)' }}>
                    <Typography sx={{ color: accent, fontSize: '1.35rem', fontWeight: 800 }}>05</Typography>
                    <Typography sx={{ fontSize: '0.8rem', color: 'rgba(17,17,17,0.68)' }}>Core lines</Typography>
                  </Box>
                  <Box sx={{ p: 1.4, borderRadius: 4, bgcolor: '#fff', border: '1px solid rgba(229,57,53,0.16)' }}>
                    <Typography sx={{ color: accent, fontSize: '1.35rem', fontWeight: 800 }}>Dubai</Typography>
                    <Typography sx={{ fontSize: '0.8rem', color: 'rgba(17,17,17,0.68)' }}>Location</Typography>
                  </Box>
                  <Box sx={{ p: 1.4, borderRadius: 4, bgcolor: '#fff', border: '1px solid rgba(229,57,53,0.16)' }}>
                    <Typography sx={{ color: accent, fontSize: '1.35rem', fontWeight: 800 }}>Direct</Typography>
                    <Typography sx={{ fontSize: '0.8rem', color: 'rgba(17,17,17,0.68)' }}>Support</Typography>
                  </Box>
                </Box>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  position: 'relative',
                  minHeight: { xs: 460, md: 560 },
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
                  Company View
                </Box>

                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: '1.1fr 0.9fr' },
                    gap: 2,
                    height: '100%'
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      overflow: 'hidden',
                      borderRadius: 4,
                      minHeight: { xs: 250, md: '100%' },
                      bgcolor: '#fff'
                    }}
                  >
                    <Box
                      component="img"
                      src="/about-bg.jpg"
                      alt="Dar Al Falah building materials showroom"
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
                        background: 'linear-gradient(180deg, rgba(0,0,0,0.08), rgba(0,0,0,0.56))'
                      }}
                    />
                    <Box sx={{ position: 'absolute', left: 18, bottom: 18, color: '#fff' }}>
                      <Typography sx={{ fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.72)' }}>
                        Project Image
                      </Typography>
                      <Typography variant="h5">{siteConfig.companyName}</Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'grid', gridTemplateRows: '1fr auto', gap: 2 }}>
                    <Box
                      sx={{
                        position: 'relative',
                        overflow: 'hidden',
                        borderRadius: 4,
                        minHeight: 180,
                        bgcolor: '#fff'
                      }}
                    >
                      <Box
                        component="img"
                        src="/hero1.jpg"
                        alt="Dar Al Falah showroom products"
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
                          background: 'linear-gradient(180deg, rgba(229,57,53,0.04), rgba(0,0,0,0.52))'
                        }}
                      />
                    </Box>

                    <Box
                      sx={{
                        p: 2,
                        borderRadius: 4,
                        bgcolor: '#111',
                        color: '#fff'
                      }}
                    >
                      <Typography sx={{ fontSize: '0.74rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', mb: 1 }}>
                        Main Categories
                      </Typography>
                      <Stack spacing={0.7}>
                        {categories.map((category) => (
                          <Typography key={category.title} sx={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.88)' }}>
                            {category.title}
                          </Typography>
                        ))}
                      </Stack>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <AboutContentSection />
    </>
  );
}

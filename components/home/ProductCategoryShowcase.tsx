import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { categories } from '@/data/site';

const accent = '#E53935';

export default function ProductCategoryShowcase() {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: '#fff',
        color: '#0f0f0f',
        py: { xs: 6, md: 10 },
        borderTop: `6px solid ${accent}`,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at top left, rgba(229,57,53,0.08), transparent 55%)',
          pointerEvents: 'none'
        }}
      />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="stretch">
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={3} sx={{ height: '100%' }}>
              <Stack spacing={1.5}>
                <Chip
                  label="Core material focus"
                  sx={{
                    alignSelf: { xs: 'center', md: 'flex-start' },
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    bgcolor: 'rgba(229,57,53,0.08)',
                    color: accent,
                    borderColor: 'rgba(229,57,53,0.4)'
                  }}
                  variant="outlined"
                />
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '2rem', md: '2.6rem' },
                    fontWeight: 700,
                    letterSpacing: '-0.01em',
                    textAlign: { xs: 'center', md: 'left' }
                  }}
                >
                  Pure white presentation with bold red energy to mirror the in-store project visuals.
                </Typography>
                <Typography
                  color="text.secondary"
                  sx={{ fontSize: { xs: '1rem', md: '1.05rem' }, textAlign: { xs: 'center', md: 'left' } }}
                >
                  Sanitary ware, ceramic tiles, building materials, plumbing items, and hardware are positioned as
                  five confident blocks. Each card can later hold SKU references, feature lists, or enquiry buttons
                  without needing a redesign.
                </Typography>
              </Stack>
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: 4,
                  overflow: 'hidden',
                  minHeight: { xs: 220, md: 320 },
                  backgroundImage: 'linear-gradient(120deg, rgba(229,57,53,0.55), rgba(5,5,5,0.65)), url(/hero1.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <Box sx={{ position: 'absolute', inset: 0, border: '1px solid rgba(255,255,255,0.2)' }} />
                <Stack spacing={1} sx={{ position: 'relative', zIndex: 1, p: { xs: 3, md: 4 }, color: '#fff' }}>
                  <Typography variant="overline" sx={{ letterSpacing: '0.2em', color: 'rgba(255,255,255,0.85)' }}>
                    Project imagery
                  </Typography>
                  <Typography variant="h4" sx={{ maxWidth: 360, lineHeight: 1.2 }}>
                    Clean showroom lighting paired with the Dar Al Falah signature red strip.
                  </Typography>
                  <Divider sx={{ borderColor: 'rgba(255,255,255,0.4)', my: 1 }} />
                  <Typography sx={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.85)' }}>
                    This visual anchors the section and echoes the photography direction already used on the hero.
                  </Typography>
                </Stack>
              </Box>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                <Box>
                  <Typography variant="h3" sx={{ color: accent }}>
                    05
                  </Typography>
                  <Typography color="text.secondary">Showroom-ready categories</Typography>
                </Box>
                <Box>
                  <Typography variant="h3" sx={{ color: '#111' }}>
                    Single
                  </Typography>
                  <Typography color="text.secondary">consistent tone of voice</Typography>
                </Box>
              </Stack>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Grid container spacing={2.5}>
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <Grid key={category.title} size={{ xs: 12, sm: 6 }}>
                    <Card
                      sx={{
                        height: '100%',
                        borderRadius: 4,
                        border: '1px solid rgba(229,57,53,0.18)',
                        borderTop: `4px solid ${accent}`,
                        boxShadow: '0 25px 60px rgba(15,15,15,0.08)',
                        p: { xs: 2.6, md: 3 },
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1.5
                      }}
                    >
                      <Box
                        sx={{
                          width: 58,
                          height: 58,
                          borderRadius: '40% 60% 35% 65%',
                          background: 'linear-gradient(135deg, rgba(229,57,53,0.1), rgba(229,57,53,0.35))',
                          display: 'grid',
                          placeItems: 'center',
                          color: accent
                        }}
                      >
                        <Icon sx={{ fontSize: 28 }} />
                      </Box>
                      <Box>
                        <Typography variant="h5" sx={{ mb: 0.5 }}>
                          {category.title}
                        </Typography>
                        <Typography color="text.secondary" sx={{ fontSize: '0.98rem', lineHeight: 1.6 }}>
                          {category.description}
                        </Typography>
                      </Box>
                      <Box sx={{ mt: 'auto' }}>
                        <Typography
                          sx={{
                            textTransform: 'uppercase',
                            letterSpacing: '0.12em',
                            fontSize: '0.75rem',
                            color: 'rgba(15,15,15,0.65)'
                          }}
                        >
                          Ready for spec sheets
                        </Typography>
                      </Box>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

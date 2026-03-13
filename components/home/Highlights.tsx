import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { whyChooseUs } from '@/data/site';

const accent = '#E53935';

export default function Highlights() {
  return (
    <Box
      className="relative"
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: '#050505',
        color: '#fff',
        borderTop: '1px solid rgba(229,57,53,0.35)',
        borderBottom: '1px solid rgba(229,57,53,0.25)'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: 'grid', gap: 3 }}>
              <Box>
                <Typography
                  variant="overline"
                  sx={{
                    letterSpacing: '0.2em',
                    color: accent,
                    textTransform: 'uppercase'
                  }}
                >
                  Why choose us
                </Typography>
                <Typography variant="h3" sx={{ color: '#fff', mt: 1 }}>
                  Built with a red + black energy that mirrors the brand floor in Muscat.
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.75)', mt: 2, fontSize: '1.05rem' }}>
                  This block delivers trust signals, product clarity, and the confident tone your showroom uses every
                  day.
                </Typography>
              </Box>
              <Box sx={{ borderLeft: `4px solid ${accent}`, pl: 3 }}>
                <Typography sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                  Every line item below is a real reason a contractor picks up the phone. The language is direct and
                  intentional.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
            <Box
              component="ul"
              sx={{
                listStyle: 'none',
                m: 0,
                p: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 1
              }}
            >
              {whyChooseUs.map((item, index) => (
                <Box
                  key={item}
                  component="li"
                  sx={{
                    position: 'relative',
                    display: 'grid',
                    gridTemplateColumns: 'auto 1fr',
                    gap: 3,
                    padding: { xs: '1.6rem 1.5rem', md: '1.9rem 2.25rem' },
                    backgroundImage: 'linear-gradient(120deg, rgba(229,57,53,0.3), rgba(5,5,5,0.9))',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 0,
                    overflow: 'hidden'
                  }}
                >
                  <Box
                    sx={{
                      width: 54,
                      height: 54,
                      backgroundColor: accent,
                      color: '#fff',
                      display: 'grid',
                      placeItems: 'center',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      fontSize: '0.95rem',
                      textTransform: 'uppercase'
                    }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </Box>
                  <Typography sx={{ color: '#f5f5f5', fontSize: '1.1rem', lineHeight: 1.65 }}>
                    {item}
                  </Typography>
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      borderLeft: `4px solid ${accent}`,
                      opacity: 0.08,
                      pointerEvents: 'none'
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

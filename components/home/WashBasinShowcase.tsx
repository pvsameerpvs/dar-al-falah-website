import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const accent = '#E53935';

const categories = ['Sanitary ware', 'Ceramic tiles', 'Building material', 'Plumbing items', 'Hardware'];

const basinImages = [
  { src: '/wash-basin1.jpg', alt: 'Wash basin display 1' },
  { src: '/tools.jpg', alt: 'Wash basin display 2' },
  { src: '/ceramic.png', alt: 'Wash basin display 3' }
];

export default function WashBasinShowcase() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 7, md: 10 },
        background: 'linear-gradient(180deg, #f6f6f6 0%, #ececec 100%)'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={2.5}>
              <Typography
                variant="overline"
                sx={{
                  color: accent,
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase'
                }}
              >
                Product Focus
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: '2rem', md: '3rem' },
                  lineHeight: 1.05,
                  textTransform: 'uppercase'
                }}
              >
                Quality materials with a clean and simple presentation.
              </Typography>
              <Typography sx={{ color: 'rgba(17,17,17,0.72)', lineHeight: 1.75 }}>
                Dar Al Falah supplies essential product categories for residential, commercial, and renovation
                projects. This section keeps the content direct and highlights the wash basin visuals without heavy
                decoration.
              </Typography>
              <Stack direction="row" flexWrap="wrap" gap={1.2}>
                {categories.map((category) => (
                  <Chip
                    key={category}
                    label={category}
                    sx={{
                      bgcolor: '#fff',
                      border: '1px solid rgba(229,57,53,0.18)',
                      color: '#111',
                      fontWeight: 600
                    }}
                  />
                ))}
              </Stack>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                gap: 2,
                alignItems: 'stretch'
              }}
            >
              <Box
                sx={{
                  gridColumn: { xs: 'auto', sm: 'span 2' },
                  borderRadius: 5,
                  overflow: 'hidden',
                  minHeight: { xs: 240, md: 320 },
                  boxShadow: '0 22px 50px rgba(17,17,17,0.12)'
                }}
              >
                <Box
                  component="img"
                  src={basinImages[0].src}
                  alt={basinImages[0].alt}
                  sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </Box>

              {basinImages.slice(1).map((image) => (
                <Box
                  key={image.src}
                  sx={{
                    borderRadius: 5,
                    overflow: 'hidden',
                    minHeight: { xs: 220, md: 250 },
                    boxShadow: '0 18px 40px rgba(17,17,17,0.1)'
                  }}
                >
                  <Box
                    component="img"
                    src={image.src}
                    alt={image.alt}
                    sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
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

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ProductCategoryGrid from '@/components/products/ProductCategoryGrid';
import { categories } from '@/data/site';

const accent = '#E53935';

export default function ProductsPage() {
  return (
    <>
      <Box
        sx={{
          pt: { xs: 7, md: 9 },
          pb: { xs: 5, md: 7 },
          background:
            'radial-gradient(circle at top left, rgba(229,57,53,0.12), transparent 30%), linear-gradient(180deg, #ffffff 0%, #fff7f7 100%)'
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="stretch">
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack spacing={2.2}>
                <Chip
                  label="Our Products"
                  variant="outlined"
                  sx={{
                    width: 'fit-content',
                    color: accent,
                    borderColor: 'rgba(229,57,53,0.3)',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase'
                  }}
                />
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.4rem', md: '4.4rem' },
                    lineHeight: 0.95,
                    textTransform: 'uppercase',
                    maxWidth: 820
                  }}
                >
                  Product categories presented with a cleaner red and white showroom feel.
                </Typography>
                <Typography
                  sx={{
                    maxWidth: 760,
                    color: 'rgba(17,17,17,0.7)',
                    fontSize: { xs: '1rem', md: '1.08rem' },
                    lineHeight: 1.8
                  }}
                >
                  Explore Dar Al Falah&apos;s main supply categories for sanitary ware, ceramic tiles, building
                  material, plumbing items, and hardware. Each card opens a focused product view for quick enquiry.
                </Typography>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                sx={{
                  height: '100%',
                  p: { xs: 3, md: 4 },
                  borderRadius: 0,
                  background: 'linear-gradient(135deg, #111 0%, #e53935 100%)',
                  color: '#fff',
                  boxShadow: '0 24px 60px rgba(229,57,53,0.18)'
                }}
              >
                <Stack spacing={2.5}>
                  <Typography
                    variant="overline"
                    sx={{ letterSpacing: '0.16em', color: 'rgba(255,255,255,0.74)', textTransform: 'uppercase' }}
                  >
                    Product focus
                  </Typography>
                  <Typography variant="h4" sx={{ lineHeight: 1.12 }}>
                    Structured selection for trade counters, project supply, and renovation demand.
                  </Typography>
                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: { xs: '1fr 1fr', sm: 'repeat(3, 1fr)' },
                      gap: 1.2
                    }}
                  >
                    <Box sx={{ p: 1.8, borderRadius: 0, bgcolor: 'rgba(255,255,255,0.08)' }}>
                      <Typography sx={{ fontSize: '1.6rem', fontWeight: 800 }}>{categories.length}</Typography>
                      <Typography sx={{ color: 'rgba(255,255,255,0.72)', fontSize: '0.88rem' }}>Core ranges</Typography>
                    </Box>
                    <Box sx={{ p: 1.8, borderRadius: 0, bgcolor: 'rgba(255,255,255,0.08)' }}>
                      <Typography sx={{ fontSize: '1.6rem', fontWeight: 800 }}>Red</Typography>
                      <Typography sx={{ color: 'rgba(255,255,255,0.72)', fontSize: '0.88rem' }}>Brand-led theme</Typography>
                    </Box>
                    <Box sx={{ p: 1.8, borderRadius: 0, bgcolor: 'rgba(255,255,255,0.08)' }}>
                      <Typography sx={{ fontSize: '1.6rem', fontWeight: 800 }}>Fast</Typography>
                      <Typography sx={{ color: 'rgba(255,255,255,0.72)', fontSize: '0.88rem' }}>Inquiry flow</Typography>
                    </Box>
                  </Box>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <ProductCategoryGrid />
    </>
  );
}

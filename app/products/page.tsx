import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
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
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={2.4} justifyContent="center" sx={{ height: '100%' }}>
                <Chip
                  label="Our Products"
                  variant="outlined"
                  sx={{
                    width: 'fit-content',
                    color: accent,
                    borderColor: 'rgba(229,57,53,0.3)',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    fontSize: '0.72rem',
                    textTransform: 'uppercase'
                  }}
                />
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '1.9rem', md: '3.2rem' },
                    lineHeight: 1,
                    textTransform: 'uppercase',
                    maxWidth: 620
                  }}
                >
                  A sharper product showroom with better image presentation.
                </Typography>
                <Typography
                  sx={{
                    maxWidth: 580,
                    color: 'rgba(17,17,17,0.7)',
                    fontSize: { xs: '0.92rem', md: '0.98rem' },
                    lineHeight: 1.65
                  }}
                >
                  Explore Dar Al Falah&apos;s main supply categories for sanitary ware, ceramic tiles, building
                  material, plumbing items, and hardware. Each card opens a focused product view for quick enquiry.
                </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <Button
                    component={Link}
                    href="/contact"
                    variant="contained"
                    sx={{
                      bgcolor: accent,
                      color: '#fff',
                      px: 3.5,
                      py: 1.4,
                      fontWeight: 700,
                      '&:hover': {
                        bgcolor: '#c62828'
                      }
                    }}
                  >
                    Request Product Inquiry
                  </Button>
                 
                </Stack>
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
                  boxShadow: '0 28px 70px rgba(229,57,53,0.16)'
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
                  Product Focus
                </Box>
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: '1.2fr 0.8fr' },
                    gap: 2,
                    height: '100%'
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      minHeight: { xs: 240, md: '100%' },
                      overflow: 'hidden',
                      borderRadius: 4,
                      bgcolor: '#fff'
                    }}
                  >
                    <Box
                      component="img"
                      src={categories[0].image}
                      alt={categories[0].title}
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
                        background: 'linear-gradient(180deg, rgba(0,0,0,0.05), rgba(0,0,0,0.52))'
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        left: 18,
                        bottom: 18,
                        color: '#fff'
                      }}
                    >
                      <Typography sx={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.72)' }}>
                        Main Range
                      </Typography>
                      <Typography variant="h5">{categories[0].title}</Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateRows: '1fr 1fr',
                      gap: 2
                    }}
                  >
                    {[categories[1], categories[3]].map((category) => (
                      <Box
                        key={category.title}
                        sx={{
                          position: 'relative',
                          minHeight: 170,
                          overflow: 'hidden',
                          borderRadius: 4,
                          bgcolor: '#fff'
                        }}
                      >
                        <Box
                          component="img"
                          src={category.image}
                          alt={category.title}
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
                            background: 'linear-gradient(180deg, rgba(229,57,53,0.02), rgba(0,0,0,0.58))'
                          }}
                        />
                        <Box
                          sx={{
                            position: 'absolute',
                            left: 14,
                            bottom: 14,
                            color: '#fff'
                          }}
                        >
                          <Typography sx={{ fontSize: '1rem', fontWeight: 700 }}>{category.title}</Typography>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <ProductCategoryGrid />
    </>
  );
}

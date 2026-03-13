import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SectionHeading from '@/components/shared/SectionHeading';
import { categories } from '@/data/site';

export default function ProductCategories() {
  return (
    <Box className="relative" sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="Product categories"
          title="Five core product areas presented with a polished layout."
          description="Each category card can later be expanded with product images, pricing, brands, or downloadable catalogues."
        />
        <Grid container spacing={2.5}>
          {categories.map((item) => {
            const Icon = item.icon;
            return (
              <Grid key={item.title} size={{ xs: 12, sm: 6, md: 4 }}>
                <Card sx={{ p: 3, borderRadius: 6, height: '100%' }}>
                  <Stack spacing={2}>
                    <Box
                      sx={{
                        width: 58,
                        height: 58,
                        display: 'grid',
                        placeItems: 'center',
                        borderRadius: 4,
                        backgroundColor: 'rgba(84,202,132,0.14)'
                      }}
                    >
                      <Icon color="primary" />
                    </Box>
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography color="text.secondary">{item.description}</Typography>
                  </Stack>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}

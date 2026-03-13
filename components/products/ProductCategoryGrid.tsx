import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { categories } from '@/data/site';

export default function ProductCategoryGrid() {
  return (
    <Box sx={{ py: { xs: 5, md: 8 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {categories.map((item, index) => {
            const Icon = item.icon;
            return (
              <Grid key={item.title} size={{ xs: 12, md: 6 }}>
                <Card sx={{ p: { xs: 3, md: 4 }, borderRadius: 6, height: '100%' }}>
                  <Stack spacing={2.3}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Box
                        sx={{
                          width: 64,
                          height: 64,
                          display: 'grid',
                          placeItems: 'center',
                          borderRadius: 4,
                          backgroundColor: 'rgba(84,202,132,0.14)'
                        }}
                      >
                        <Icon color="primary" />
                      </Box>
                      <Chip label={`Category 0${index + 1}`} variant="outlined" />
                    </Stack>
                    <Typography variant="h5">{item.title}</Typography>
                    <Typography color="text.secondary">{item.description}</Typography>
                    <Box
                      sx={{
                        p: 2.5,
                        borderRadius: 4,
                        backgroundColor: 'rgba(246,255,249,0.98)',
                        border: '1px dashed rgba(47,138,88,0.28)'
                      }}
                    >
                      <Typography color="text.secondary">
                        Suggested addition: product photos, size/specification details, brand names, and a quick
                        enquiry button.
                      </Typography>
                    </Box>
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

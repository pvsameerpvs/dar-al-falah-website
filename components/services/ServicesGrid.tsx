import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SectionHeading from '@/components/shared/SectionHeading';
import { services } from '@/data/site';

export default function ServicesGrid() {
  return (
    <Box sx={{ py: { xs: 5, md: 8 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="What we offer"
          title="Helpful service blocks built with MUI cards and Tailwind-ready styling."
          description="These cards can be edited anytime with real company promises, service policies, or delivery information."
        />
        <Grid container spacing={3}>
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <Grid key={item.title} size={{ xs: 12, md: 6 }}>
                <Card sx={{ p: { xs: 3, md: 4 }, borderRadius: 6, height: '100%' }}>
                  <Stack spacing={2}>
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        display: 'grid',
                        placeItems: 'center',
                        borderRadius: 4,
                        backgroundColor: 'rgba(242,166,90,0.14)'
                      }}
                    >
                      <Icon color="primary" />
                    </Box>
                    <Typography variant="h5">{item.title}</Typography>
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

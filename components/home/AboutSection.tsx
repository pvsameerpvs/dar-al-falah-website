import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SectionHeading from '@/components/shared/SectionHeading';

const stats = [
  { label: 'Product categories', value: '5 core groups' },
  { label: 'Clients served', value: '350+ yearly' },
  { label: 'Response time', value: 'Under 24 hrs' }
];

export default function AboutSection() {
  return (
    <Box className="relative" sx={{ py: { xs: 6, md: 9 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="stretch">
          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{ p: { xs: 3, md: 4 }, borderRadius: 6, height: '100%' }}>
              <SectionHeading
                eyebrow="About Dar Al Falah"
                title="A responsive building materials partner rooted in Muscat"
                description="The company pairs a stocked showroom with fast procurement work, giving contractors and facilities teams a single point of contact for HVAC, piping, electrical, and finishing materials."
              />
              <Typography color="text.secondary" sx={{ fontSize: '1.02rem' }}>
                This site highlights the breadth of available inventory, the professionalism of the team, and the
                ease of initiating an order. The messaging is written for engineers, maintenance managers, and
                procurement leads who value timely quotations and predictable follow through.
              </Typography>
              <Stack spacing={2.5} mt={4} direction={{ xs: 'column', sm: 'row' }}>
                {stats.map((item) => (
                  <Stack key={item.label} spacing={0.5} flex={1}>
                    <Typography variant="h5" component="p">
                      {item.value}
                    </Typography>
                    <Typography color="text.secondary">{item.label}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{ borderRadius: 6, height: '100%', overflow: 'hidden' }}>
              <Box
                component="img"
                src="/about-bg.jpg"
                alt="Dar Al Falah showroom"
                sx={{
                  width: '100%',
                  height: { xs: 280, sm: 360, md: '100%' },
                  minHeight: { md: 440 },
                  objectFit: 'cover',
                  objectPosition: { xs: 'center', md: 'center right' },
                  display: 'block'
                }}
              />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

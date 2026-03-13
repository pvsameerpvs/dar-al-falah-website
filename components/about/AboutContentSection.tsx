import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SectionHeading from '@/components/shared/SectionHeading';
import { siteConfig } from '@/data/site';

const values = [
  {
    title: 'Practical selection',
    text: 'We present products that fit real project needs without making the buying process complicated.'
  },
  {
    title: 'Reliable service',
    text: 'The website is structured to make Dar Al Falah easy to contact, easy to find, and easy to trust.'
  },
  {
    title: 'Growth-ready design',
    text: 'This foundation can later grow into a catalogue, brand showcase, or online quotation platform.'
  }
];

export default function AboutContentSection() {
  return (
    <Box sx={{ py: { xs: 5, md: 8 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={3.5}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Card sx={{ p: { xs: 3, md: 4 }, borderRadius: 6, height: '100%' }}>
              <SectionHeading
                eyebrow="Company overview"
                title="A strong website helps buyers understand what you sell and how to reach you."
                description={siteConfig.aboutDescription}
              />
              <Typography color="text.secondary" sx={{ fontSize: '1.03rem' }}>
                The page structure focuses on readable content, clear product groups, direct contact details, and a
                polished interface that works well for contractors, maintenance teams, and walk-in customers. It is
                designed as a clean starting point that can be expanded later with real product photos and more
                detailed inventory information.
              </Typography>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={2.5}>
              {values.map((item) => (
                <Card key={item.title} sx={{ p: 3, borderRadius: 6 }}>
                  <Typography variant="h6" mb={1}>
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary">{item.text}</Typography>
                </Card>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

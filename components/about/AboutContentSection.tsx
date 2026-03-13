import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
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
    <Box sx={{ py: { xs: 5, md: 8 }, background: 'linear-gradient(180deg, #fff7f7 0%, #ffffff 100%)' }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 3, md: 3.5 }}>
          <Grid size={{ xs: 12, md: 7.5 }}>
            <Card sx={{ p: { xs: 3, md: 4 }, borderRadius: 4, height: '100%', border: '1px solid rgba(229,57,53,0.12)' }}>
              <Stack spacing={2}>
                <Chip
                  label="Company Overview"
                  variant="outlined"
                  sx={{
                    width: 'fit-content',
                    color: '#E53935',
                    borderColor: 'rgba(229,57,53,0.24)',
                    fontWeight: 700,
                    fontSize: '0.72rem',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase'
                  }}
                />
                <Typography variant="h3" sx={{ fontSize: { xs: '1.6rem', md: '2.2rem' }, maxWidth: 700 }}>
                  A practical business page should explain what you supply and why clients trust your response time.
                </Typography>
                <Typography color="text.secondary" sx={{ fontSize: '1rem', lineHeight: 1.8 }}>
                  {siteConfig.aboutDescription}
                </Typography>
              </Stack>
              <Typography color="text.secondary" sx={{ fontSize: '1rem', lineHeight: 1.8, mt: 3 }}>
                The page structure focuses on readable content, clear product groups, direct contact details, and a
                polished interface that works well for contractors, maintenance teams, and walk-in customers. It is
                designed as a clean starting point that can be expanded later with real product photos and more
                detailed inventory information.
              </Typography>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 4.5 }}>
            <Stack spacing={2}>
              {values.map((item) => (
                <Card
                  key={item.title}
                  sx={{
                    p: 3,
                    borderRadius: 4,
                    borderLeft: '4px solid #E53935',
                    boxShadow: '0 14px 32px rgba(17,17,17,0.06)'
                  }}
                >
                  <Typography variant="h6" mb={1} sx={{ fontWeight: 700 }}>
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {item.text}
                  </Typography>
                </Card>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

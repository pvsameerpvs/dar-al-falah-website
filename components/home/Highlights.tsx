import StarRoundedIcon from '@mui/icons-material/StarRounded';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SectionHeading from '@/components/shared/SectionHeading';
import { whyChooseUs } from '@/data/site';

export default function Highlights() {
  return (
    <Box className="relative" sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="Why choose us"
          title="A clean, business-focused experience designed to convert visitors into enquiries."
          description="This homepage section introduces credibility, product coverage, and practical reasons to contact Dar Al Falah."
        />
        <Grid container spacing={2.5}>
          {whyChooseUs.map((item) => (
            <Grid key={item} size={{ xs: 12, md: 6 }}>
              <Card sx={{ p: 3, borderRadius: 6, height: '100%' }}>
                <Stack direction="row" spacing={2} alignItems="flex-start">
                  <Box
                    sx={{
                      display: 'grid',
                      placeItems: 'center',
                      width: 46,
                      height: 46,
                      borderRadius: 2.5,
                      backgroundColor: 'rgba(84,202,132,0.14)'
                    }}
                  >
                    <StarRoundedIcon color="primary" />
                  </Box>
                  <Typography color="text.secondary" sx={{ fontSize: '1.02rem' }}>
                    {item}
                  </Typography>
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

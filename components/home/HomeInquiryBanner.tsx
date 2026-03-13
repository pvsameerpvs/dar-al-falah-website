import Link from 'next/link';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { siteConfig } from '@/data/site';

export default function HomeInquiryBanner() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Paper
          className="overflow-hidden"
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 8,
            background: 'linear-gradient(135deg, rgba(84,202,132,0.12), rgba(47,138,88,0.16))',
            border: '1px solid rgba(47,138,88,0.24)'
          }}
        >
          <Stack spacing={2.2} alignItems="flex-start">
            <Typography variant="h3" sx={{ maxWidth: 760 }}>
              Need a stronger online presence for {siteConfig.companyName}?
            </Typography>
            <Typography color="text.secondary" sx={{ maxWidth: 760 }}>
              This project is built as a complete light-theme starter website with five pages, modern UI, and space
              to add product images, brands, testimonials, and enquiry handling later.
            </Typography>
            <Button component={Link} href="/contact" variant="contained" endIcon={<ArrowForwardRoundedIcon />}>
              Open Contact Page
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}

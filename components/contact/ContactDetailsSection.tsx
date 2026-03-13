'use client';

import CallRoundedIcon from '@mui/icons-material/CallRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { siteConfig } from '@/data/site';

const contactRows = [
  {
    title: 'Phone',
    text: siteConfig.phones.join(' / '),
    icon: CallRoundedIcon
  },
  {
    title: 'Email',
    text: siteConfig.email.join(' / '),
    icon: EmailRoundedIcon
  },
  {
    title: 'Address',
    text: siteConfig.address.join(', '),
    icon: LocationOnRoundedIcon
  },
  {
    title: 'Business note',
    text: 'Use this form as a front-end enquiry section. It can later be connected to email or WhatsApp.',
    icon: AccessTimeRoundedIcon
  }
];

export default function ContactDetailsSection() {
  return (
    <Box sx={{ py: { xs: 5, md: 8 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={3.5}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={2.5}>
              {contactRows.map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.title} sx={{ p: 3, borderRadius: 6 }}>
                    <Stack direction="row" spacing={2} alignItems="flex-start">
                      <Box
                        sx={{
                          width: 52,
                          height: 52,
                          display: 'grid',
                          placeItems: 'center',
                          borderRadius: 4,
                          backgroundColor: 'rgba(84,202,132,0.14)'
                        }}
                      >
                        <Icon color="primary" />
                      </Box>
                      <Box>
                        <Typography variant="h6" mb={0.5}>
                          {item.title}
                        </Typography>
                        <Typography color="text.secondary">{item.text}</Typography>
                      </Box>
                    </Stack>
                  </Card>
                );
              })}
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Card sx={{ p: { xs: 3, md: 4 }, borderRadius: 6 }}>
              <Stack spacing={2.2} component="form">
                <Typography variant="h4">Request a Quote</Typography>
                <Typography color="text.secondary">
                  Add your backend logic later for email sending, CRM integration, or WhatsApp redirection.
                </Typography>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField fullWidth label="Full Name" />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField fullWidth label="Phone Number" />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField fullWidth label="Email Address" />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField fullWidth label="Product Category" />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField fullWidth label="Message" multiline minRows={5} />
                  </Grid>
                </Grid>
                <Button variant="contained" size="large">
                  Send Enquiry
                </Button>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

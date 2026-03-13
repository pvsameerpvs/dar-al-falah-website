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
    <Box sx={{ py: { xs: 5, md: 8 }, background: 'linear-gradient(180deg, #fff7f7 0%, #ffffff 100%)' }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 3, md: 3.5 }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={2}>
              {contactRows.map((item) => {
                const Icon = item.icon;
                return (
                  <Card
                    key={item.title}
                    sx={{
                      p: 3,
                      borderRadius: 4,
                      borderLeft: '4px solid #E53935',
                      boxShadow: '0 14px 32px rgba(17,17,17,0.06)'
                    }}
                  >
                    <Stack direction="row" spacing={2} alignItems="flex-start">
                      <Box
                        sx={{
                          width: 52,
                          height: 52,
                          display: 'grid',
                          placeItems: 'center',
                          borderRadius: 4,
                          backgroundColor: 'rgba(229,57,53,0.1)',
                          color: '#E53935'
                        }}
                      >
                        <Icon />
                      </Box>
                      <Box>
                        <Typography variant="h6" mb={0.5} sx={{ fontWeight: 700 }}>
                          {item.title}
                        </Typography>
                        <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                          {item.text}
                        </Typography>
                      </Box>
                    </Stack>
                  </Card>
                );
              })}
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Card
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: 4,
                border: '1px solid rgba(229,57,53,0.14)',
                boxShadow: '0 18px 40px rgba(17,17,17,0.08)'
              }}
            >
              <Stack spacing={2.2} component="form">
                <Typography variant="h4" sx={{ fontSize: { xs: '1.6rem', md: '2rem' } }}>
                  Request a Quote
                </Typography>
                <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  Send your product requirement, quantity request, or project enquiry. This form can later be
                  connected to email, CRM, or WhatsApp workflow.
                </Typography>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      placeholder="Enter your full name"
                      InputLabelProps={{ shrink: true }}
                      sx={fieldSx}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      placeholder="Enter your phone number"
                      InputLabelProps={{ shrink: true }}
                      sx={fieldSx}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      placeholder="Enter your email address"
                      InputLabelProps={{ shrink: true }}
                      sx={fieldSx}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Product Category"
                      placeholder="Sanitary ware / tiles / plumbing"
                      InputLabelProps={{ shrink: true }}
                      sx={fieldSx}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label="Message"
                      placeholder="Tell us the products, quantity, or project details you need"
                      multiline
                      minRows={5}
                      InputLabelProps={{ shrink: true }}
                      sx={fieldSx}
                    />
                  </Grid>
                </Grid>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    alignSelf: 'flex-start',
                    bgcolor: '#E53935',
                    px: 3.5,
                    py: 1.4,
                    fontWeight: 700,
                    '&:hover': {
                      bgcolor: '#c62828'
                    }
                  }}
                >
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

const fieldSx = {
  '& .MuiOutlinedInput-root': {
    borderRadius: 4,
    backgroundColor: '#fff',
    '& fieldset': {
      borderColor: 'rgba(229,57,53,0.18)'
    },
    '&:hover fieldset': {
      borderColor: 'rgba(229,57,53,0.36)'
    },
    '&.Mui-focused fieldset': {
      borderColor: '#E53935'
    }
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#E53935'
  },
  '& .MuiInputBase-input::placeholder': {
    color: 'rgba(17,17,17,0.45)',
    opacity: 1
  },
  '& .MuiInputBase-input.MuiInputBase-inputMultiline::placeholder': {
    color: 'rgba(17,17,17,0.45)',
    opacity: 1
  }
};

import Link from 'next/link';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { siteConfig } from '@/data/site';

function buildWhatsAppLink() {
  const phone = siteConfig.phones[0].replace(/\D/g, '');
  const localNumber = phone.startsWith('0') ? phone.slice(1) : phone;
  const message = encodeURIComponent(`Hello, I want to inquire about your products.`);

  return `https://wa.me/971${localNumber}?text=${message}`;
}

export default function FloatingWhatsApp() {
  return (
    <Box
      component={Link}
      href={buildWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      sx={{
        position: 'fixed',
        right: { xs: 16, md: 22 },
        bottom: { xs: 16, md: 22 },
        zIndex: 1400,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 1.2,
        px: { xs: 1.6, md: 1.8 },
        py: { xs: 1.2, md: 1.35 },
        bgcolor: '#25D366',
        color: '#fff',
        borderRadius: 999,
        boxShadow: '0 16px 34px rgba(37,211,102,0.32)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease',
        '&:hover': {
          bgcolor: '#1ebe5d',
          transform: 'translateY(-2px)',
          boxShadow: '0 20px 38px rgba(37,211,102,0.38)'
        }
      }}
    >
      <WhatsAppIcon sx={{ fontSize: { xs: 28, md: 30 } }} />
      <Typography
        sx={{
          display: { xs: 'none', sm: 'block' },
          fontWeight: 700,
          fontSize: '0.92rem',
          whiteSpace: 'nowrap'
        }}
      >
        WhatsApp
      </Typography>
    </Box>
  );
}

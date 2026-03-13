'use client';

import * as React from 'react';
import Link from 'next/link';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { siteConfig } from '@/data/site';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' }
];

export default function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      color="transparent"
      sx={{
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(81, 112, 138, 0.12)',
        backgroundColor: 'rgba(248, 251, 255, 0.92)'
      }}
    >
      <Box sx={{ borderBottom: '1px solid rgba(81, 112, 138, 0.08)' }}>
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={1}
            justifyContent="space-between"
            alignItems={{ xs: 'flex-start', md: 'center' }}
            py={1}
          >
            <Typography variant="body2" color="text.secondary">
              {siteConfig.tagline}
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} color="text.secondary">
              <Stack direction="row" spacing={1} alignItems="center">
                <CallRoundedIcon fontSize="small" />
                <Typography variant="body2">{siteConfig.phones[0]}</Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <EmailRoundedIcon fontSize="small" />
                <Typography variant="body2">{siteConfig.email[0]}</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: 78, justifyContent: 'space-between' }}>
          <Box>
            <Typography variant="h5" fontWeight={800} color="primary.main">
              Dar Al Falah
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Sanitary ware, tiles & building materials
            </Typography>
          </Box>

          <Stack direction="row" spacing={1.5} alignItems="center" sx={{ display: { xs: 'none', md: 'flex' } }}>
            {navItems.map((item) => (
              <Button key={item.href} component={Link} href={item.href} color="inherit">
                {item.label}
              </Button>
            ))}
            <Button component={Link} href="/contact" variant="contained" color="primary">
              Get a Quote
            </Button>
          </Stack>

          <IconButton sx={{ display: { md: 'none' } }} onClick={() => setOpen(true)}>
            <MenuRoundedIcon />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Stack sx={{ width: 280, p: 3 }} spacing={2}>
          <Typography variant="h6" fontWeight={800} color="primary.main">
            Dar Al Falah
          </Typography>
          {navItems.map((item) => (
            <Button
              key={item.href}
              component={Link}
              href={item.href}
              color="inherit"
              sx={{ justifyContent: 'flex-start' }}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Button>
          ))}
          <Button component={Link} href="/contact" variant="contained" onClick={() => setOpen(false)}>
            Contact Us
          </Button>
        </Stack>
      </Drawer>
    </AppBar>
  );
}

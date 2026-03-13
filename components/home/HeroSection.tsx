'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { siteConfig, categories } from '@/data/site';

import PhoneInTalkRoundedIcon from '@mui/icons-material/PhoneInTalkRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import ArchitectureRoundedIcon from '@mui/icons-material/ArchitectureRounded';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import HandymanRoundedIcon from '@mui/icons-material/Handyman';
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';

export default function HeroSection() {
  const [scrollRotation, setScrollRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Negative multiplier ensures it rotates anti-clockwise when scrolling down
      setScrollRotation(-window.scrollY * 0.15);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: 'auto', md: '100vh' },
        minHeight: { xs: '100vh', md: 'auto' },
        overflow: 'hidden',
        backgroundColor: '#FAFAFA',
        pt: { xs: 12, md: 0 },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      {/* ROTATING BACKGROUND GLOBE */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: `translate(-50%, -50%) rotate(${scrollRotation}deg)`,
          width: { xs: 800, md: 1000 },
          height: { xs: 800, md: 1000 },
          zIndex: 0,
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* Outer dashed circle */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            border: '1px dashed rgba(229,57,53,0.15)'
          }}
        />
        {/* Middle solid border circle */}
        <Box
          sx={{
            position: 'absolute',
            width: { xs: 500, md: 680 },
            height: { xs: 500, md: 680 },
            borderRadius: '50%',
            border: { xs: '30px solid rgba(229,57,53,0.04)', md: '50px solid rgba(229,57,53,0.04)' }
          }}
        />
        {/* Inner white circle */}
        <Box
          sx={{
            position: 'absolute',
            width: { xs: 300, md: 400 },
            height: { xs: 300, md: 400 },
            borderRadius: '50%',
            backgroundColor: '#FFFFFF',
            boxShadow: '0 0 80px rgba(229,57,53,0.06)'
          }}
        />

        {/* ORBITING ICONS */}
        <Box
          sx={{
            position: 'absolute',
            left: { xs: '10%', md: '15%' },
            top: { xs: '20%', md: '25%' },
            transform: `rotate(${-scrollRotation}deg)`,
            width: { xs: 45, md: 60 },
            height: { xs: 45, md: 60 },
            borderRadius: '50%',
            bgcolor: '#ffffff',
            border: '2px solid rgba(229,57,53,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 20px rgba(229,57,53,0.1)'
          }}
        >
          <ArchitectureRoundedIcon sx={{ color: '#E53935', fontSize: { xs: 20, md: 28 } }} />
        </Box>

        <Box
          sx={{
            position: 'absolute',
            right: { xs: '12%', md: '18%' },
            bottom: { xs: '25%', md: '30%' },
            transform: `rotate(${-scrollRotation}deg)`,
            width: { xs: 55, md: 70 },
            height: { xs: 55, md: 70 },
            borderRadius: '50%',
            bgcolor: '#ffffff',
            border: '2px solid rgba(255,111,96,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 24px rgba(255,111,96,0.15)'
          }}
        >
          <CategoryRoundedIcon sx={{ color: '#FF6F60', fontSize: { xs: 24, md: 32 } }} />
        </Box>
      </Box>

      {/* LEFT SIDE IMAGE */}
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          bottom: { xs: 'auto', md: 0 },
          top: { xs: 20, md: 'auto' },
          width: { xs: '280px', md: '850px' },
          height: { xs: '280px', md: '750px' },
          opacity: { xs: 0.15, md: 1 },
          zIndex: 1,
          pointerEvents: 'none'
        }}
      >
        <Box
          component="img"
          src="/hero-cut.png"
          alt="Dar Al Falah Building Material"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'bottom left',
            opacity: 0.95
          }}
        />
      </Box>

      {/* MAIN CONTENT CENTER */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 3, flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', pb: { xs: 8, md: 0 } }}>
        <Stack alignItems="center" textAlign="center" spacing={3} sx={{ width: '100%' }}>
          
          {/* Top Pill */}
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1.2,
              px: { xs: 2, md: 2.5 },
              py: { xs: 0.8, md: 1 },
              borderRadius: 10,
              border: '1px solid #E5E7EB',
              bgcolor: '#ffffff',
              boxShadow: '0 2px 10px rgba(229,57,53,0.06)'
            }}
          >
            <Box
              sx={{
                bgcolor: '#E53935',
                color: '#fff',
                borderRadius: '50%',
                width: 24,
                height: 24,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <CheckCircleRoundedIcon sx={{ fontSize: 16 }} />
            </Box>
            <Typography variant="body2" sx={{ fontWeight: 700, letterSpacing: 1.2, color: '#111827', textTransform: 'uppercase', fontSize: { xs: '0.75rem', md: '0.85rem' } }}>
              BUILDING MATERIALS ALL IN ONE
            </Typography>
          </Box>

          {/* Headline */}
          <Typography
            variant="h1"
            sx={{
              fontWeight: 400,
              fontSize: { xs: '3.5rem', sm: '4.5rem', md: '6rem' },
              lineHeight: 1,
              color: '#111827',
              maxWidth: 900,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              fontFamily: 'var(--font-bebas-neue), system-ui, sans-serif'
            }}
          >
            SUPPLYING <Box component="span" sx={{ color: '#E53935' }}>QUALITY</Box>
            <br />
            WITH ROBUST <Box component="span" sx={{ color: '#E53935' }}>MATERIALS</Box>
          </Typography>

          {/* Subheading */}
          <Typography
            sx={{
              color: '#4b5563',
              fontSize: { xs: '1rem', md: '1.2rem' },
              maxWidth: 680,
              mx: 'auto',
              lineHeight: 1.6,
              mt: 1,
              mb: 2
            }}
          >
            {siteConfig.heroDescription}
          </Typography>

          {/* Phone & CTA */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignItems="center"
            justifyContent="center"
            spacing={{ xs: 2.5, sm: 4 }}
            sx={{ mt: 1 }}
          >
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <Box sx={{ color: '#E53935', display: 'flex' }}>
                <PhoneInTalkRoundedIcon fontSize="large" sx={{ animation: 'pulse 2s infinite' }} />
              </Box>
              <Typography sx={{ fontWeight: 800, fontSize: { xs: '1.3rem', md: '1.5rem' }, color: '#111827', letterSpacing: '0.02em' }}>
                {siteConfig.phones[2] || siteConfig.phones[0]}
              </Typography>
            </Stack>
            
            <Button
              component={Link}
              href="/contact"
              variant="contained"
              color="primary"
              endIcon={<ArrowForwardRoundedIcon />}
              sx={{
                borderRadius: 8,
                px: 4,
                py: { xs: 1.5, md: 1.8 },
                fontWeight: 700,
                fontSize: { xs: '0.95rem', md: '1.05rem' },
                textTransform: 'none',
                boxShadow: '0 8px 20px rgba(229,57,53,0.25)',
                '&:hover': {
                  boxShadow: '0 10px 25px rgba(229,57,53,0.4)',
                  transform: 'translateY(-2px)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              GET A QUOTE
            </Button>
          </Stack>
        </Stack>
      </Container>

      {/* BOTTOM LOGO/CATEGORY BAR */}
      <Box sx={{ bgcolor: '#111827', py: { xs: 3, md: 4 }, borderTop: '4px solid #E53935', position: 'absolute', bottom: 0, width: '100%', zIndex: 4 }}>
        <Container maxWidth="xl">
          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent={{ xs: 'center', md: 'space-evenly' }}
            alignItems="center"
            gap={{ xs: 4, md: 6 }}
          >
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Stack
                  key={category.title}
                  direction="row"
                  alignItems="center"
                  spacing={1.2}
                  sx={{
                    opacity: 0.85,
                    transition: 'opacity 0.2s',
                    '&:hover': { opacity: 1 }
                  }}
                >
                  <Icon sx={{ color: '#fff', fontSize: 26 }} />
                  <Typography sx={{ color: '#fff', fontWeight: 600, fontSize: '1rem', letterSpacing: '0.04em' }}>
                    {category.title}
                  </Typography>
                </Stack>
              );
            })}
          </Stack>
        </Container>
      </Box>

      <style jsx global>{`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
      `}</style>
    </Box>
  );
}


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
        height: { xs: '100svh', md: '100vh' },
        overflow: 'hidden',
        backgroundColor: '#FAFAFA',
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

      {/* LEFT SIDE IMAGE - Moved down to ensure proper document flow on mobile */}

      {/* MAIN CONTENT CENTER */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 3, flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', mt: { xs: -14, sm: -8, md: 0 } }}>
        <Stack alignItems="center" textAlign="center" spacing={{ xs: 2, md: 3 }} sx={{ width: '100%' }}>
          
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
              fontSize: { xs: '2.8rem', sm: '4.5rem', md: '6rem' },
              lineHeight: 1,
              color: '#111827',
              maxWidth: 900,
              textTransform: 'uppercase',
              letterSpacing: { xs: '0.02em', md: '0.04em' },
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
            sx={{ mt: { xs: 2, md: 1 } }}
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
              endIcon={<ArrowForwardRoundedIcon />}
              sx={{
                bgcolor: '#E53935',
                color: '#fff',
                borderRadius: 8,
                px: { xs: 5, md: 4 },
                py: { xs: 1.5, md: 1.8 },
                fontWeight: 700,
                fontSize: { xs: '0.95rem', md: '1.05rem' },
                textTransform: 'none',
                boxShadow: '0 8px 20px rgba(229,57,53,0.25)',
                '&:hover': {
                  bgcolor: '#C62828',
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

      {/* LEFT SIDE IMAGE (Mobile Flow & Desktop Absolute) */}
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          bottom: { xs: '70px', sm: '80px', md: 0 },
          width: { xs: '100%', sm: '100%', md: '850px' },
          height: { xs: '45vh', sm: '50vh', md: '750px' },
          maxHeight: { xs: '320px', sm: '450px', md: '100%' },
          opacity: 1,
          zIndex: 1,
          pointerEvents: 'none',
          display: 'flex',
          justifyContent: 'center'
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
            objectPosition: { xs: 'bottom center', md: 'bottom left' },
            opacity: 0.95
          }}
        />
      </Box>

      {/* BOTTOM LOGO/CATEGORY BAR */}
      <Box sx={{ bgcolor: '#111827', py: { xs: 1.5, sm: 2, md: 4 }, borderTop: '4px solid #E53935', position: 'absolute', bottom: 0, width: '100%', zIndex: 4, overflow: 'hidden' }}>
        <Container maxWidth="xl" sx={{ px: { xs: 0, sm: 2, md: 3 } }}>
          <Stack
            direction="row"
            flexWrap={{ xs: 'nowrap', md: 'wrap' }}
            justifyContent={{ xs: 'flex-start', md: 'space-evenly' }}
            alignItems="center"
            columnGap={{ xs: 3, sm: 4, md: 6 }}
            rowGap={{ xs: 1, md: 6 }}
            sx={{
              width: { xs: 'max-content', md: '100%' },
              animation: { xs: 'scrollMarquee 20s linear infinite', md: 'none' },
              '&:hover': {
                animationPlayState: { xs: 'paused', md: 'running' }
              },
              pb: { xs: 0.5, md: 0 },
              pl: { xs: 3, md: 0 } // Offset left margin to match the gap gap
            }}
          >
            {/* Duplicate categories just for the seamless scroll loop on mobile */}
            {[...categories, ...categories].map((category, index) => {
              const Icon = category.icon;
              const isDuplicate = index >= categories.length;
              return (
                <Stack
                  key={`${category.title}-${index}`}
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  sx={{
                    display: { xs: 'flex', md: isDuplicate ? 'none' : 'flex' },
                    opacity: 0.85,
                    transition: 'opacity 0.2s',
                    flexShrink: 0,
                    '&:hover': { opacity: 1 }
                  }}
                >
                  <Icon sx={{ color: '#fff', fontSize: { xs: 20, md: 26 } }} />
                  <Typography sx={{ color: '#fff', fontWeight: 600, fontSize: { xs: '0.85rem', md: '1rem' }, letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>
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
        @keyframes scrollMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 12px)); } /* accounting for the 3 unit gap */
        }
      `}</style>
    </Box>
  );
}


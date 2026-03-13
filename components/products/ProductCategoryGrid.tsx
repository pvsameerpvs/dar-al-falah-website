"use client";

import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { categories, siteConfig, Category } from '@/data/site';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import CloseIcon from '@mui/icons-material/Close';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const imagePanelSx = {
  width: '100%',
  height: 240,
  objectFit: 'cover',
  objectPosition: 'center',
  display: 'block'
} as const;

export default function ProductCategoryGrid() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const handleOpen = (category: Category) => {
    setSelectedCategory(category);
  };

  const handleClose = () => {
    setSelectedCategory(null);
  };

  const openWhatsApp = () => {
    if (!selectedCategory) return;
    const phone = siteConfig.phones[0].replace(/\D/g, ''); // Extract numbers from the first phone number
    const message = encodeURIComponent(`Hi, I'm interested in products from the ${selectedCategory.title} category.`);
    window.open(`https://wa.me/971${phone.substring(phone.length - 9)}?text=${message}`, '_blank');
  };

  return (
    <Box
      sx={{
        py: { xs: 5, md: 8 },
        background: 'linear-gradient(180deg, #fff7f7 0%, #ffffff 100%)'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Grid key={category.title} size={{ xs: 12, sm: 6, md: 4 }}>
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    border: '1px solid rgba(229,57,53,0.16)',
                    boxShadow: '0 18px 45px rgba(17,17,17,0.08)',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 28px 60px rgba(229,57,53,0.16)'
                    }
                  }}
                >
                  <Box
                    component="button"
                    type="button"
                    onClick={() => handleOpen(category)}
                    sx={{
                      height: '100%',
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      p: 0,
                      m: 0,
                      border: 0,
                      background: 'transparent',
                      textAlign: 'left',
                      cursor: 'pointer',
                      font: 'inherit'
                    }}
                  >
                    <Box sx={{ position: 'relative', width: '100%' }}>
                      <CardMedia component="img" image={category.image} alt={category.title} sx={imagePanelSx} />
                      <Box
                        sx={{
                          position: 'absolute',
                          inset: 0,
                          background: 'linear-gradient(180deg, rgba(0,0,0,0.06), rgba(0,0,0,0.52))'
                        }}
                      />
                      <Chip
                        label={`Category ${String(index + 1).padStart(2, '0')}`}
                        sx={{
                          position: 'absolute',
                          top: 16,
                          left: 16,
                          bgcolor: '#fff',
                          color: '#E53935',
                          fontWeight: 700
                        }}
                      />
                    </Box>
                    <CardContent sx={{ flexGrow: 1, p: 3, width: '100%' }}>
                      <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                        <Box
                          sx={{
                            width: 54,
                            height: 54,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 4,
                            backgroundColor: 'rgba(229,57,53,0.1)',
                            color: '#E53935',
                            flexShrink: 0
                          }}
                        >
                          <Icon />
                        </Box>
                        <Typography variant="h5" component="h2" sx={{ lineHeight: 1.15 }}>
                          {category.title}
                        </Typography>
                      </Stack>
                      <Typography color="text.secondary" sx={{ mb: 2.5, lineHeight: 1.7 }}>
                        {category.description}
                      </Typography>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography sx={{ color: '#E53935', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.82rem', letterSpacing: '0.08em' }}>
                          View Details
                        </Typography>
                        <ArrowOutwardRoundedIcon sx={{ color: '#E53935', fontSize: 18 }} />
                      </Stack>
                    </CardContent>
                  </Box>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>

      {/* Category Details Dialog */}
      <Dialog
        open={Boolean(selectedCategory)}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 4,
            overflow: 'hidden'
          }
        }}
      >
        <Box
          sx={{
            position: 'relative',
            px: 3,
            py: 2.4,
            pr: 7,
            background: 'linear-gradient(135deg, #111 0%, #E53935 100%)',
            color: '#fff'
          }}
        >
          <Typography sx={{ letterSpacing: '0.12em', textTransform: 'uppercase', fontSize: '0.76rem', color: 'rgba(255,255,255,0.74)', mb: 0.8 }}>
            Product category
          </Typography>
          <Typography sx={{ fontSize: '1.6rem', fontWeight: 700 }}>{selectedCategory?.title}</Typography>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 10,
              top: 10,
              color: '#fff',
              bgcolor: 'rgba(255,255,255,0.08)',
              '&:hover': {
                bgcolor: 'rgba(255,255,255,0.14)'
              }
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <DialogContent sx={{ p: 3 }}>
          {selectedCategory && (
            <Stack spacing={3}>
              <Box
                component="img"
                src={selectedCategory.image}
                alt={selectedCategory.title}
                sx={{
                  width: '100%',
                  height: 350,
                  objectFit: 'cover',
                  borderRadius: 4
                }}
              />
              <Box>
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 700 }}>
                  About {selectedCategory.title}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.7 }}>
                  {selectedCategory.details}
                </Typography>
              </Box>
              <Button
                variant="contained"
                size="large"
                startIcon={<WhatsAppIcon />}
                onClick={openWhatsApp}
                sx={{
                  backgroundColor: '#E53935',
                  color: '#fff',
                  '&:hover': {
                    backgroundColor: '#c62828'
                  },
                  borderRadius: 4,
                  textTransform: 'none',
                  fontSize: '1rem',
                  fontWeight: 700,
                  py: 1.5
                }}
              >
                Send Inquiry on WhatsApp
              </Button>
            </Stack>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
}

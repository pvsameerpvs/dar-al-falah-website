'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { sanitaryCatalog, sanitaryProductCount } from '@/data/sanitaryCatalog';
import { siteConfig } from '@/data/site';

const accent = '#E53935';
const fallbackImage = '/sanitary-ware.png';

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const getWhatsAppBaseUrl = () => {
  const phoneDigits = siteConfig.phones[0].replace(/\D/g, '');
  return `https://wa.me/971${phoneDigits.slice(-9)}`;
};

const getInquiryUrl = (heading: string, subheading: string) => {
  const message = encodeURIComponent(
    `Hi, I'm interested in ${subheading} from ${heading}. Please share pricing and availability.`
  );
  return `${getWhatsAppBaseUrl()}?text=${message}`;
};

export default function SanitaryWarePage() {
  const groupedCatalog = useMemo(() => {
    const grouped = new Map<string, typeof sanitaryCatalog[number]['subsections']>();

    sanitaryCatalog.forEach((group) => {
      const existing = grouped.get(group.heading) ?? [];
      grouped.set(group.heading, [...existing, ...group.subsections]);
    });

    return Array.from(grouped.entries()).map(([heading, subsections]) => ({ heading, subsections }));
  }, []);

  const [activeTab, setActiveTab] = useState('all');

  const visibleGroups =
    activeTab === 'all' ? groupedCatalog : groupedCatalog.filter((group) => slugify(group.heading) === activeTab);

  return (
    <Box sx={{ background: 'linear-gradient(180deg, #ffffff 0%, #fff6f6 100%)' }}>
      <Box
        sx={{
          pt: { xs: 6, md: 8 },
          pb: { xs: 4, md: 6 },
          background:
            'radial-gradient(circle at top right, rgba(229,57,53,0.12), transparent 38%), linear-gradient(180deg, #ffffff 0%, #fff9f9 100%)',
          borderBottom: '1px solid rgba(229,57,53,0.16)'
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={2.5}>
            <Button
              component={Link}
              href="/products"
              startIcon={<ArrowBackRoundedIcon />}
              sx={{
                width: 'fit-content',
                color: 'rgba(17,17,17,0.75)',
                borderColor: 'rgba(17,17,17,0.16)',
                '&:hover': {
                  borderColor: 'rgba(17,17,17,0.3)',
                  backgroundColor: 'rgba(17,17,17,0.03)'
                }
              }}
              variant="outlined"
            >
              Back to Products
            </Button>

            <Chip
              label="Sanitary Ware Catalogue"
              sx={{
                width: 'fit-content',
                fontWeight: 700,
                letterSpacing: '0.08em',
                color: accent,
                bgcolor: 'rgba(229,57,53,0.1)',
                border: '1px solid rgba(229,57,53,0.24)'
              }}
            />

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '1.8rem', md: '2.8rem' },
                textTransform: 'uppercase',
                lineHeight: 1.08,
                maxWidth: 860
              }}
            >
              One Piece Closet, Water Closet, Floor Mount, and Wall Hung models in one clear product page.
            </Typography>

            <Typography sx={{ color: 'rgba(17,17,17,0.72)', maxWidth: 800, lineHeight: 1.75 }}>
              Total products listed: <strong>{sanitaryProductCount}</strong>. Each card includes image preview, model name,
              and technical bullet description so your team can quickly review and send enquiries.
            </Typography>

            <Box
              sx={{
                borderRadius: 2,
                border: '1px solid rgba(229,57,53,0.16)',
                bgcolor: '#fff',
                px: 1
              }}
            >
              <Tabs
                value={activeTab}
                onChange={(_, value) => setActiveTab(value)}
                variant="scrollable"
                scrollButtons="auto"
                sx={{
                  minHeight: 54,
                  '.MuiTabs-indicator': { backgroundColor: accent, height: 3 },
                  '.MuiTab-root': {
                    minHeight: 54,
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    fontSize: '0.8rem',
                    color: 'rgba(17,17,17,0.66)'
                  },
                  '.Mui-selected': {
                    color: '#111'
                  }
                }}
              >
                <Tab value="all" label={`All Products (${sanitaryProductCount})`} />
                {groupedCatalog.map((group) => (
                  <Tab
                    key={group.heading}
                    value={slugify(group.heading)}
                    label={`${group.heading} (${group.subsections.length})`}
                  />
                ))}
              </Tabs>
            </Box>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Stack spacing={{ xs: 5, md: 6 }}>
          {visibleGroups.map((group) => (
            <Box
              key={group.heading}
            >
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.2} justifyContent="space-between" sx={{ mb: 2.5 }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '1.3rem', md: '1.65rem' },
                    textTransform: 'uppercase'
                  }}
                >
                  {group.heading}
                </Typography>
                <Chip
                  label={`${group.subsections.length} Products`}
                  sx={{
                    width: 'fit-content',
                    fontWeight: 700,
                    bgcolor: 'rgba(229,57,53,0.1)',
                    color: accent
                  }}
                />
              </Stack>

              <Grid container spacing={{ xs: 2, md: 2.8 }}>
                {group.subsections.map((item, itemIndex) => (
                  <Grid key={`${item.subheading}-${itemIndex}`} size={{ xs: 12, sm: 6, lg: 4 }}>
                    <Card
                      sx={{
                        height: '100%',
                        borderRadius: 3,
                        overflow: 'hidden',
                        border: '1px solid rgba(229,57,53,0.16)',
                        boxShadow: '0 15px 40px rgba(17,17,17,0.07)',
                        display: 'flex',
                        flexDirection: 'column',
                        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                        '&:hover': {
                          transform: 'translateY(-6px)',
                          boxShadow: '0 22px 45px rgba(229,57,53,0.16)'
                        }
                      }}
                    >
                      <Box sx={{ position: 'relative' }}>
                        <Box
                          component="img"
                          src={item.image ?? fallbackImage}
                          alt={item.subheading}
                          sx={{
                            width: '100%',
                            height: 190,
                            objectFit: 'cover',
                            objectPosition: 'center',
                            display: 'block'
                          }}
                        />
                        <Box
                          sx={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(180deg, rgba(0,0,0,0.06), rgba(0,0,0,0.58))'
                          }}
                        />
                        <Chip
                          label={`Image: ${slugify(item.subheading)}.jpg`}
                          size="small"
                          sx={{
                            position: 'absolute',
                            left: 12,
                            top: 12,
                            fontWeight: 700,
                            bgcolor: 'rgba(255,255,255,0.92)',
                            color: '#111'
                          }}
                        />
                      </Box>

                      <CardContent sx={{ p: 2.2, display: 'flex', flexDirection: 'column', gap: 1.5, flexGrow: 1 }}>
                        <Typography
                          variant="h5"
                          sx={{ fontSize: '1.18rem', textTransform: 'uppercase', lineHeight: 1.18, minHeight: 52 }}
                        >
                          {item.subheading}
                        </Typography>

                        {item.content?.length ? (
                          <Stack spacing={0.7}>
                            {item.content.map((line, lineIndex) => (
                              <Typography
                                key={`${item.subheading}-content-${lineIndex}`}
                                sx={{ color: 'rgba(17,17,17,0.75)', fontSize: '0.94rem', lineHeight: 1.48 }}
                              >
                                {line}
                              </Typography>
                            ))}
                          </Stack>
                        ) : null}

                        {item.bullets.length ? (
                          <Box component="ul" sx={{ m: 0, pl: 2.5, display: 'grid', gap: 0.75 }}>
                            {item.bullets.map((bullet, bulletIndex) => (
                              <Typography
                                key={`${item.subheading}-bullet-${bulletIndex}`}
                                component="li"
                                sx={{ color: 'rgba(17,17,17,0.75)', fontSize: '0.94rem', lineHeight: 1.48 }}
                              >
                                {bullet}
                              </Typography>
                            ))}
                          </Box>
                        ) : null}

                        <Box sx={{ mt: 'auto', pt: 0.5 }}>
                          <Button
                            component="a"
                            href={getInquiryUrl(group.heading, item.subheading)}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="outlined"
                            sx={{
                              borderColor: 'rgba(229,57,53,0.48)',
                              color: accent,
                              fontWeight: 700,
                              '&:hover': {
                                borderColor: accent,
                                bgcolor: 'rgba(229,57,53,0.05)'
                              }
                            }}
                          >
                            Inquire on WhatsApp
                          </Button>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

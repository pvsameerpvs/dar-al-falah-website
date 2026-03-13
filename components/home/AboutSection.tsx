import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import SectionHeading from '@/components/shared/SectionHeading';



export default function AboutSection() {
  return (
    <Box
      className="relative"
      sx={{
        py: { xs: 2, md: 0 },
        overflow: 'hidden',
        minHeight: '100vh',
        backgroundColor: '#fff'
      }}
    >
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          minHeight: '100%'
        }}
      >
        <Grid
          container
          spacing={{ xs: 0, md: 4 }}
          alignItems="stretch"
          sx={{ minHeight: { md: '100vh' }, width: '100%', m: 0 }}
        >
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              order: { xs: 2, md: 2 },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              px: { xs: 3, md: 6 }
            }}
          >
            <Box
              sx={{
                width: '100%',
                maxWidth: 620,
                p: { xs: 2.5, md: 5 },
                backgroundColor: '#fff',
               
              }}
            >
              <Box
                sx={{
                  width: { xs: 48, md: 64 },
                  height: 6,
                  borderRadius: 999,
                  backgroundColor: 'primary.main',
                  mb: 3,
                  mx: { xs: 'auto', md: 'unset' }
                }}
              />
              <Box
                sx={{
                  textAlign: { xs: 'center', md: 'left' },
                  '& .MuiChip-root': { mx: { xs: 'auto', md: 'unset' } }
                }}
              >
                <SectionHeading
                  eyebrow="About Dar Al Falah"
                  title="A responsive building materials partner rooted in Muscat"
                  description="The company pairs a stocked showroom with fast procurement work, giving contractors and facilities teams a single point of contact for HVAC, piping, electrical, and finishing materials."
                />
              </Box>
              <Typography
                color="text.secondary"
                sx={{ fontSize: { xs: '0.98rem', md: '1.05rem' }, lineHeight: { xs: 1.6, md: 1.75 }, textAlign: { xs: 'center', md: 'left' } }}
              >
                This site highlights the breadth of available inventory, the professionalism of the team, and the
                ease of initiating an order. The messaging is written for engineers, maintenance managers, and
                procurement leads who value timely quotations and predictable follow through.
              </Typography>
             
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              order: { xs: 1, md: 1 },
              display: 'flex',
              alignItems: 'stretch',
              justifyContent: 'flex-start',
              pl: { xs: 0, md: 0 },
              pr: { xs: 0, md: 0 }
            }}
          >
            <Box
              sx={{
                flex: 1,
                width: '100%',
                height: { xs: 300, sm: 360, md: '100vh' },
                minHeight: { md: '100vh' },
                backgroundImage: 'url(/about-bg.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: { xs: 'center', md: 'center left' },
                backgroundRepeat: 'no-repeat'
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

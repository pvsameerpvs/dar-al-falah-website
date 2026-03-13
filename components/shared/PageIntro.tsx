import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

interface PageIntroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export default function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <Container className="relative" maxWidth="lg" sx={{ pt: { xs: 7, md: 9 }, pb: 2 }}>
      <Stack spacing={2.2}>
        <Chip label={eyebrow} color="secondary" sx={{ width: 'fit-content' }} />
        <Typography variant="h1" sx={{ fontSize: { xs: '2.3rem', md: '3.6rem' }, maxWidth: 880 }}>
          {title}
        </Typography>
        <Typography color="text.secondary" sx={{ maxWidth: 860, fontSize: '1.05rem' }}>
          {description}
        </Typography>
      </Stack>
    </Container>
  );
}

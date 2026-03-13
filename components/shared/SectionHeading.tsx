import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <Stack spacing={1.5} mb={4.5}>
      <Chip label={eyebrow} color="primary" variant="outlined" sx={{ width: 'fit-content' }} />
      <Typography variant="h3" sx={{ maxWidth: 720 }}>
        {title}
      </Typography>
      {description ? (
        <Typography color="text.secondary" sx={{ maxWidth: 760, fontSize: '1.02rem' }}>
          {description}
        </Typography>
      ) : null}
    </Stack>
  );
}

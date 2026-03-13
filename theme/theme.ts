'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'light',
    primary: {
      main: '#E53935',
      light: '#FF6F60',
      dark: '#AB000D'
    },
    secondary: {
      main: '#1F2937',
      light: '#4B5563',
      dark: '#111827'
    },
    background: {
      default: '#FAFAFA',
      paper: '#FFFFFF'
    },
    text: {
      primary: '#111827',
      secondary: '#4B5563'
    }
  },
  shape: {
    borderRadius: 4
  },
  typography: {
    fontFamily: 'var(--font-roboto)',
    h1: {
      fontWeight: 800,
      lineHeight: 1.1
    },
    h2: {
      fontWeight: 800,
      lineHeight: 1.2
    },
    h3: {
      fontWeight: 700
    },
    button: {
      fontWeight: 700,
      textTransform: 'none'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          paddingInline: '1.2rem'
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 4
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          boxShadow: '0 16px 42px rgba(30, 96, 61, 0.12)'
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          backgroundImage: 'none'
        }
      }
    }
  }
});

export default theme;

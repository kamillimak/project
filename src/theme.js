import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // A professional blue
    },
    secondary: {
      main: '#f50057', // A vibrant pink for accents
    },
    background: {
      default: '#f4f6f8', // A light grey background
      paper: '#ffffff',   // White for cards and surfaces
    },
    text: {
      primary: '#2c3e50', // A dark, soft black for text
      secondary: '#607d8b', // A lighter grey for secondary text
    },
  },
  typography: {
    fontFamily: [
      '"Inter"',
      '"Roboto"',
      '"Helvetica"',
      'Arial',
      'sans-serif'
    ].join(','),
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2.2rem',
      fontWeight: 600,
      borderBottom: '3px solid #1976d2',
      paddingBottom: '8px',
      marginBottom: '16px',
    },
    h3: {
        fontSize: '1.5rem',
        fontWeight: 600,
    },
    h4: {
        fontSize: '1.2rem',
        fontWeight: 600,
    }
  },
  components: {
    MuiPaper: {
        styleOverrides: {
            root: {
                boxShadow: '0px 10px 30px -5px rgba(0, 0, 0, 0.1)',
                borderRadius: '12px',
            }
        }
    },
    MuiButton: {
        styleOverrides: {
            root: {
                borderRadius: '8px',
                textTransform: 'none',
                fontWeight: 600,
            }
        }
    }
  }
});

export default theme;

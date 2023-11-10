import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
      primary: {
        main: '#E7D322',
        // light: will be calculated from palette.primary.main,
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        main: '#212020',
        light: '#4d4c4c',
        // dark: will be calculated from palette.secondary.main,
        contrastText: '#FFFFFF',
      },
    },
    typography: {
      fontFamily: [
        "Play"
      ],
      h2: {
        fontSize: '20px',
        '@media (min-width:600px)': {
          fontSize: '33px'
        }
      }
    },
    components: {
      MuiTouchRipple: {
        styleOverrides: {
          childLeaving: {
            backgroundColor: "transparent",
            color: "transparent"
          },
          ripple: {
            backgroundColor: "transparent",
            color: "transparent"
          },
          ripplePulsate: {
            backgroundColor: "transparent",
            color: "transparent"
          },
          root: {
            backgroundColor: "transparent",
            color: "transparent"
          },
          rippleVisible: {
            backgroundColor: "transparent",
            color: "transparent"
          },
          child: {
            backgroundColor: "transparent",
            color: "transparent"
          },
          childPulsate: {
            backgroundColor: "transparent",
            color: "transparent"
          }
        }
      }
    }
  });
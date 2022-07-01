import { extendTheme } from '@chakra-ui/react';
import '@fontsource/poppins';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: 'poppins, sans-serif',
        color: '#000000',
        backgroundColor: '#FFFAFA',
      },

      h1: { padding: '16px 24px', fontSize: '3rem', fontWeight: '900', maxWidth: '70ch', lineHeight: '1.6' },
      h2: { padding: '16px 24px', fontSize: '2rem', fontWeight: '800', maxWidth: '70ch', lineHeight: '1.6' },
      p: { padding: '16px 24px', fontSize: '1rem', fontWeight: '600', maxWidth: '70ch', lineHeight: '1.6' },
    },
    '.chakra-box': {
      // borderColor: 'red !important',
      opacity: 1,
      paddingRight: '5em',
    },
  },

  components: {},
  colors: {
    brand: {
      primary: '#000000',
      secondary: '#FFFFFF',
    },
  },

  layerStyles: {},
  textStyles: {},
  breakpoints: {
    sm: '480px',
    md: '768px',
    lg: '1024px',
  },
});

export default theme;

// Extra small devices (<768px): width: auto (or no width)
// Small Devices (≥576px): width: 540px
// Medium Devices (≥768px): width: 720px
// Larger Devices (≥992px): width: 960px
// XLarge Devices (≥1200px): width: 1140px

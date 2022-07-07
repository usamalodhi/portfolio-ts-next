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
      h3: { padding: '16px 24px', fontSize: '1rem', fontWeight: '600', maxWidth: '70ch', lineHeight: '1.6' },
      p: { padding: '16px 24px', fontSize: '1rem', maxWidth: '70ch', lineHeight: '1.6' },
      ul: { listStyleType: 'none', gap: '24px' },
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
      secondary: '#FFFAFA',
    },
  },

  layerStyles: {
    header_footer: {
      backgroundColor: 'brand.primary',
      color: 'brand.secondary',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    Hero: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      paddingBottom: '24px',
      textAlign: 'center',
    },
    ProjectLinks: {
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontWeight: '600',
      backgroundColor: '#edf2f7',
      width: '78px',
      height: '50px',
    },
    ProjectImage: {
      fit: 'cover',
      align: 'center',
      width: '100%',
      height: `{{ base: '100%', sm: '400px', lg: '500px' }}`,
    },
  },
  textStyles: {
    ProjectLinks: {
      textAlign: 'center',
      fontWeight: '600',
    },
  },
  breakpoints: {
    sm: '480px',
    md: '768px',
    lg: '1024px',
    xl: '1200px',
    '2xl': '1536px',
  },
});

export default theme;

// Extra small devices (<768px): width: auto (or no width)
// Small Devices (≥576px): width: 540px
// Medium Devices (≥768px): width: 720px
// Larger Devices (≥992px): width: 960px
// XLarge Devices (≥1200px): width: 1140px

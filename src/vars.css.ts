import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme('#app', {
  colors: {
    white: '#fff',
    main: '#323338',
    mainDark: '#28292D',
    mainLight: '#36373E',
    mainXLight: '#3C3D45',
    mainBorder: '#3E3F44',
    sub: '#DFE0E2',
    subDark: '#9B9CA3',
    point: '#5765F2',
    pointText: '#8DA1FC',
    pointLight: '#91A0F5',
    pointBorder: '#6771EC',
    pointHover: '#4654C0',
  },
  font: {
    size: {
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '28px',
      '4xl': '32px',
      '5xl': '36px',
      '6xl': '40px',
      '7xl': '44px',
      '8xl': '48px',
    },
  },
  radius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
  },
});

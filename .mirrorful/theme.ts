
  export type Colors = keyof typeof Tokens.colors
  export type FontSize = keyof typeof Tokens.fontSizes
  export type Shadows = keyof typeof Tokens.boxShadows

  export type Token = Colors | FontSize | Shadows

  export const Tokens = {
  colors: {
    bone: {
      '50': '#ffffff',
      '100': '#ffffff',
      '200': '#ffffff',
      '300': '#fbfaf8',
      '400': '#f1ede6',
      '500': '#e4dccf',
      '600': '#d7cbb8',
      '700': '#c0ad8f',
      '800': '#b39d78',
      '900': '#a68c61',
      base: '#E4DCCF',
    },
    old: {
      '50': '#ffffff',
      '100': '#ffffff',
      '200': '#ffffff',
      '300': '#ffffff',
      '400': '#ffffff',
      '500': '#f9f5eb',
      '600': '#f1e7d0',
      '700': '#e2cf9e',
      '800': '#dac183',
      '900': '#d1b367',
      base: '#F9F5EB',
    },
    fire: {
      '50': '#fdeded',
      '100': '#f9cdcd',
      '200': '#f5adad',
      '300': '#f18d8e',
      '400': '#ee7475',
      '500': '#ea5455',
      '600': '#e63435',
      '700': '#c21819',
      '800': '#a21415',
      '900': '#831011',
      base: '#EA5455',
    },
    cool: {
      '50': '#077cff',
      '100': '#006be3',
      '200': '#005abf',
      '300': '#00499b',
      '400': '#003c7f',
      '500': '#002b5b',
      '600': '#001a37',
      '700': '#000000',
      '800': '#000000',
      '900': '#000000',
      base: '#002B5B',
    },
  },
  fontSizes: {},
  fontWeights: {},
  lineHeights: {},
  boxShadows: {},
}
  
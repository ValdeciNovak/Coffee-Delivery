/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xsm: '100px',
        xs: '480px',
        xl: '1535px',
      },
      fontFamily: {
        baloo: ['"Baloo 2"', 'serif'], // Define Inter como fonte padrão sans-serif
        roboto: ['"Roboto"', 'serif'],
      },
      fontWeight: {
        baloo700: '700', // Peso 700
        baloo800: '800', // Peso 800
        roboto400: '400',
        roboto700: '700',
      },
      lineHeight: {
        130: '1.3', // 130% como uma fração (1.3)
        160: '1.6', // 130% como uma fração (1.3)
      },
      backgroundColor: {
        baseCard: '#F3F2F2',
        yellowLight: '#F1E9C9',
        yellowDark: '#C47F17',
        baseButton: '#E6E5E5',
        purpleDark: '#4B2995',
        baseInput: '#EDEDED',
        baseHover: '#D7D5D5',
        purpleLight: '#EBE5F9',
        yellow: '#DBAC2C',
        purple: '#8047F8',
      },
      textColor: {
        yellowDark: '#C47F17',
        title: '#272221',
        subtitle: '#403937',
        textStandard: '#574F4D',
        descriptionColor: '#8D8686',
        purpleText: '#8047F8',
        purpleDark: '#4B2995',
      },
      borderColor: {
        borderInput: '#E6E5E5',
        purpleBorder: '#8047F8',
        yellowDark: '#C47F17',
      },
      gradientColorStops: {
        yellow: '#DBAC2C',
        purple: '#8047F8',
      },
    },
  },
  plugins: [],
}

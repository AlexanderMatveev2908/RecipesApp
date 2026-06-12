/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        neutral__0: '#FFFFFF',
        neutral__100: '#F6F5F1',
        neutral__200: '#E0E6E3',
        neutral__300: '#D0DCD9',
        neutral__600: '#395852',
        neutral__900: '#163A34',

        orange__500: '#FE9F6B',
        teal__500: '#49AC9B',
        indigo__500: '#697DDB',
      },

      spacing: {
        0: '0px',

        25: '2px',
        50: '4px',
        75: '6px',

        100: '8px',
        125: '10px',
        150: '12px',

        200: '16px',
        250: '20px',
        300: '24px',

        400: '32px',
        500: '40px',
        600: '48px',

        800: '64px',
        1000: '80px',
        1200: '96px',

        1400: '112px',
        1600: '128px',
        1800: '140px',
      },

      extend: {
        borderRadius: {
          0: '0px',
          4: '4px',
          6: '6px',
          8: '8px',
          10: '10px',
          12: '12px',
          16: '16px',
          20: '20px',
          24: '24px',
          full: '999px',
        },
      },
    },
  },
  plugins: [],
};

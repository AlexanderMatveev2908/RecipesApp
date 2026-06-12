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
    },
  },
  plugins: [],
};

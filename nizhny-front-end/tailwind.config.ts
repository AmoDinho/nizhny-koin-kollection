import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-red-lightest': '#EB9B9B',
        'primary-red-light': '#EB5757',
        'primary-red-dark': '#B21212',
        'diamond-lightest': '#F1F7FB',
        'diamond-light': '#DEF3F3',
        'diamond-dark': '#D9EBF4',
        'silver-light': '#C0C0C0',
        'silver-lightest': '#B9B9B9',
        'gold-dark': '#FBE41A',
        'gold-light': '#EDDF6A',
        'bronze-light': '#CD7F32',
        'bronze-dark': '#B9722D',
      },
      fontFamily: {
        advent: 'var(--font-advent)',
        bungee: 'var(--font-bungee)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;

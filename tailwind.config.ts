import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '2rem',
      },
    },
    extend: {
      colors: {
        primary: {
          light: '#d4e6ff',
          DEFAULT: '#0d6efd',
          dark: '#0a58ca',
        },
        secondary: {
          light: '#e2e3e5',
          DEFAULT: '#6c757d',
          dark: '#565e64',
        },
        success: {
          light: '#d1e7dd',
          DEFAULT: '#198754',
          dark: '#146c43',
        },
        danger: {
          light: '#f8d7da',
          DEFAULT: '#dc3545',
          dark: '#b02a37',
        },
        warning: {
          light: '#fff3cd',
          DEFAULT: '#ffc107',
          dark: '#ffca2c',
        },
        info: {
          light: '#cff4fc',
          DEFAULT: '#0dcaf0',
          dark: '#0aa2c0',
        },
        dark: {
          light: '#d3d3d4',
          DEFAULT: '#212529',
          dark: '#1a1e21',
        },
      },
      fontSize: {
        '12': 'clamp(0.625rem, 0.4515rem + 0.4819vw, 0.75rem)',
        '14': 'clamp(0.75rem, 0.5765rem + 0.4819vw, 0.875rem)',
        '15': 'clamp(0.8125rem, 0.639rem + 0.4819vw, 0.9375rem)',
        '16': 'clamp(0.875rem, 0.7015rem + 0.4819vw, 1rem)',
        '18': 'clamp(1rem, 0.8265rem + 0.4819vw, 1.125rem)',
        '20': 'clamp(1.125rem, 0.9515rem + 0.4819vw, 1.25rem)',
        '22': 'clamp(1.25rem, 1.0765rem + 0.4819vw, 1.375rem)',
        '24': 'clamp(1.375rem, 1.2015rem + 0.4819vw, 1.5rem)',
        '26': 'clamp(1.5rem, 1.3265rem + 0.4819vw, 1.625rem)',
        '28': 'clamp(1.625rem, 1.4515rem + 0.4819vw, 1.75rem)',
        '30': 'clamp(1.625rem, 1.278rem + 0.9639vw, 1.875rem)',
        '32': 'clamp(1.75rem, 1.403rem + 0.9639vw, 2rem)',
        '35': 'clamp(1.625rem, 0.8443rem + 2.1687vw, 2.1875rem)',
        '36': 'clamp(2rem, 1.653rem + 0.9639vw, 2.25rem)',
        '42': 'clamp(2rem, 1.1325rem + 2.4096vw, 2.625rem)',
        '46': 'clamp(2.25rem, 1.3825rem + 2.4096vw, 2.875rem)',
        '52': 'clamp(2.25rem, 0.862rem + 3.8554vw, 3.25rem)',
      },
    },
  },
  plugins: [],
};

export default config;
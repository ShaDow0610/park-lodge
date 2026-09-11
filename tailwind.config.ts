import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Fixed brand colors (do not change with theme)
        pine: {
          950: '#141f10',
          900: '#1e2c18',
          800: '#2a3d22',
          700: '#3a532e',
        },
        sage: {
          500: '#7c9b5e',
          300: '#a9c088',
        },
        brass: {
          500: '#b4894f',
          300: '#d3ac78',
        },
        // Fixed off-white for text/icons on permanently-dark brand backgrounds
        // (header, footer, page banners, dark CTA sections). Unlike `stone`,
        // this never flips in dark mode — it must always read as light text.
        ivory: '#faf9f4',
        // Semantic surface colors — sourced from CSS variables so they can
        // flip in dark mode via the [data-theme="dark"] attribute (see globals.css)
        stone: {
          50: 'var(--stone-050)',
          100: 'var(--stone-100)',
        },
        sand: {
          200: 'var(--sand-200)',
        },
        ink: {
          900: 'var(--ink-900)',
          600: 'var(--ink-600)',
        },
        grey: {
          400: 'var(--grey-400)',
        },
        line: {
          DEFAULT: 'var(--line)',
          light: 'var(--line-light)',
        },
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-work-sans)', 'sans-serif'],
      },
      borderRadius: {
        arc: '999px',
      },
      transitionTimingFunction: {
        signature: 'cubic-bezier(.22,.68,0,1)',
      },
      maxWidth: {
        wrap: '1180px',
      },
      letterSpacing: {
        eyebrow: '0.22em',
      },
    },
  },
  plugins: [],
};

export default config;

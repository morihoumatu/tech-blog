/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'blog-primary': '#FF0000',
        'blog-secondary': '#FFA500',
        'blog-dark': '#000000',
        'blog-light': '#FFFFFF',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            color: '#000000',
            a: {
              color: '#FF0000',
              '&:hover': {
                color: '#FFA500',
              },
            },
            h1: {
              color: '#000000',
            },
            h2: {
              color: '#000000',
            },
            h3: {
              color: '#000000',
            },
            strong: {
              color: '#000000',
            },
            code: {
              color: '#FF0000',
            },
            blockquote: {
              borderLeftColor: '#FF0000',
              color: '#000000',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
        quicksand: ['var(--font-quicksand)', 'sans-serif'],
      },
      colors: {
        primary: '#0A2342',      // Deep navy blue
        secondary: '#2A7DE1',    // Vibrant blockchain blue
        accent: '#1CDB7C',       // Bright green
        'neutral-light': '#F3F4F6', // Light gray
        'neutral-dark': '#1F2937',  // Dark gray
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
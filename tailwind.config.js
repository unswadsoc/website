/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './slices/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  daisyui: {
  //   themes: [
  //     {
  //       mytheme: {
  //         "primary": "#",
  //         "secondary": "#f6d860",
  //         "accent": "#37cdbe",
  //         "neutral": "#3d4451",
  //         "base-100": "#ffffff",
  //       },
  //     },
  //   ]
  },
  plugins: [
    require("daisyui")
  ],
}
